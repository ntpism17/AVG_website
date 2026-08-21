// Generates the favicon set (public/favicon.svg + PNG fallbacks +
// public/apple-touch-icon.png) from the round "Nd" logo raster.
//
// Run manually (`node scripts/build-favicon.mjs`) and commit the results, same
// policy as build-og.mjs — not wired into `npm run build`.
//
// The SVG embeds a 64px raster via a data URI so the favicon is the *actual*
// logo at any render size (a vector re-draw would not match the stylized
// wordmark), while the PNG files provide crisp native fallbacks.
//
// Background removal: the source is a red circle with a white "Nd" on a solid
// black background. Naive black→transparent would also erase dark detail, so
// we flood-fill from the image edges to remove only the *background* black that
// touches the border, keeping the interior white text, then crop to the content
// bbox and feather the alpha for smooth edges.
import sharp from 'sharp';
import { statSync, writeFileSync, rmSync } from 'node:fs';

const SOURCE = 'public/nd-logo.png';
const CLEAN = 'public/.logo-clean.png';

// --- Load as RGBA and remove the connected background ---
const { data, info } = await sharp(SOURCE)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });
const { width, height } = info;

// "Black-ish" pixels are candidates for the solid background (the logo sits on
// pure black #000000).
const DARK_TH = 40;
const dark = new Uint8Array(width * height);
for (let i = 0; i < width * height; i++) {
  const o = i * 4;
  const m = Math.max(data[o], data[o + 1], data[o + 2]);
  dark[i] = m < DARK_TH ? 1 : 0;
}

// Flood fill from every border pixel: black pixels reachable from the edge are
// background. Enclosed white pixels (the "Nd" text) are NOT reached → kept.
const isBg = new Uint8Array(width * height);
const stack = [];
const idx = (x, y) => y * width + x;
const seed = (x, y) => {
  const i = idx(x, y);
  if (dark[i] && !isBg[i]) {
    isBg[i] = 1;
    stack.push(i);
  }
};
for (let x = 0; x < width; x++) {
  seed(x, 0);
  seed(x, height - 1);
}
for (let y = 0; y < height; y++) {
  seed(0, y);
  seed(width - 1, y);
}
while (stack.length) {
  const i = stack.pop();
  const x = i % width;
  const y = (i / width) | 0;
  for (let dy = -1; dy <= 1; dy++) {
    for (let dx = -1; dx <= 1; dx++) {
      if (dx === 0 && dy === 0) continue;
      const nx = x + dx;
      const ny = y + dy;
      if (nx < 0 || ny < 0 || nx >= width || ny >= height) continue;
      const j = idx(nx, ny);
      if (dark[j] && !isBg[j]) {
        isBg[j] = 1;
        stack.push(j);
      }
    }
  }
}

// The "Nd" text must render pure white: force any opaque (non-background)
// pixel that isn't the red circle fill to #FFFFFF, so JPEG compression or a
// non-pure-white source can never make the glyphs gray or off-white.
for (let i = 0; i < width * height; i++) {
  if (isBg[i]) continue; // background — will become transparent
  const o = i * 4;
  const r = data[o];
  const g = data[o + 1];
  const b = data[o + 2];
  if (r - g > 25 && r - b > 25) continue; // red circle fill — keep as-is
  data[o] = 255;
  data[o + 1] = 255;
  data[o + 2] = 255;
}

// Content bbox for cropping + a 3x3 feather of the mask → anti-aliased alpha.
let minX = width;
let minY = height;
let maxX = -1;
let maxY = -1;
let opaque = 0;
for (let i = 0; i < width * height; i++) {
  if (!isBg[i]) {
    const x = i % width;
    const y = (i / width) | 0;
    if (x < minX) minX = x;
    if (x > maxX) maxX = x;
    if (y < minY) minY = y;
    if (y > maxY) maxY = y;
    opaque++;
  }
}
const content = new Uint8Array(width * height);
for (let i = 0; i < width * height; i++) content[i] = isBg[i] ? 0 : 1;
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    let sum = 0;
    let n = 0;
    for (let dy = -1; dy <= 1; dy++) {
      for (let dx = -1; dx <= 1; dx++) {
        const nx = x + dx;
        const ny = y + dy;
        if (nx >= 0 && ny >= 0 && nx < width && ny < height) {
          sum += content[ny * width + nx];
          n++;
        }
      }
    }
    data[(y * width + x) * 4 + 3] = Math.round((sum / n) * 255);
  }
}

const cropW = maxX - minX + 1;
const cropH = maxY - minY + 1;
await sharp(data, { raw: { width, height, channels: 4 } })
  .extract({ left: minX, top: minY, width: cropW, height: cropH })
  .png()
  .toFile(CLEAN);

// Sanity-check the result: the red circle must dominate, but interior white
// (the "Nd" text) must still be present.
const chk = await sharp(CLEAN)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });
let redPx = 0;
let whitePx = 0;
let otherPx = 0;
for (let i = 0; i < chk.info.width * chk.info.height; i++) {
  const o = i * 4;
  if (chk.data[o + 3] < 128) continue;
  const r = chk.data[o];
  const g = chk.data[o + 1];
  const b = chk.data[o + 2];
  if (r - g > 25 && r - b > 25) redPx++;
  else if (r >= 240 && g >= 240 && b >= 240) whitePx++;
  else otherPx++;
}
console.log(
  `Crop ${cropW}x${cropH} · opaque ${opaque}/${width * height} (${((100 * opaque) / (width * height)).toFixed(1)}%) · red ${redPx} px · pure-white text ${whitePx} px · other ${otherPx} px`,
);

// --- Emit the favicon set from the cleaned, cropped logo ---
const base = () => sharp(CLEAN);
const png = (w) =>
  base()
    .resize(w, w, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

await base()
  .resize(16, 16, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toFile('public/favicon-16x16.png');
await base()
  .resize(32, 32, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toFile('public/favicon-32x32.png');
await base()
  .resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toFile('public/apple-touch-icon.png');

// Multi-size favicon.ico (16/32/48) with PNG payloads — supported by all
// modern browsers and fetched by crawlers that ignore <link rel=icon>.
const icoSizes = [16, 32, 48];
const icoPngs = await Promise.all(icoSizes.map(png));
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(icoSizes.length, 4); // count
let offset = 6 + icoSizes.length * 16;
const entries = icoSizes.map((s, i) => {
  const buf = Buffer.alloc(16);
  buf.writeUInt8(s >= 256 ? 0 : s, 0); // width
  buf.writeUInt8(s >= 256 ? 0 : s, 1); // height
  buf.writeUInt8(0, 2); // palette
  buf.writeUInt8(0, 3); // reserved
  buf.writeUInt16LE(1, 4); // planes
  buf.writeUInt16LE(32, 6); // bpp
  buf.writeUInt32LE(icoPngs[i].length, 8); // size
  buf.writeUInt32LE(offset, 12); // offset
  offset += icoPngs[i].length;
  return buf;
});
writeFileSync('public/favicon.ico', Buffer.concat([header, ...entries, ...icoPngs]));

const embedded = (await png(64)).toString('base64');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <image width="64" height="64" href="data:image/png;base64,${embedded}"/>
</svg>
`;
writeFileSync('public/favicon.svg', svg);

rmSync(CLEAN);

for (const f of [
  'public/favicon.ico',
  'public/favicon-16x16.png',
  'public/favicon-32x32.png',
  'public/apple-touch-icon.png',
  'public/favicon.svg',
]) {
  console.log(`Wrote ${f} — ${(statSync(f).size / 1024).toFixed(1)} kB`);
}
