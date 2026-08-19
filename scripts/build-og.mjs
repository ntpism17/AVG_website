// Generates public/og-image.png — the 1200x630 social card.
//
// Run manually (`node scripts/build-og.mjs`) and commit the result; this is
// deliberately NOT wired into `npm run build` so the card stays a reviewed
// artifact rather than a per-build surprise.
//
// Colours come from the design tokens in src/styles/global.css.
import sharp from 'sharp';
import { readFileSync } from 'node:fs';

const W = 1200;
const H = 630;

const BG = '#F7F4ED';
const INK = '#0F172A';
const INK2 = '#334155';
const INK3 = '#64748B';
const ACCENT = '#B91C1C';
const GOLD = '#C99B2D';

// Embed the Thai/Latin font so rendering does not depend on system fonts.
const fontPath =
  'node_modules/@fontsource/noto-sans-thai/files/noto-sans-thai-thai-700-normal.woff';
const displayPath = 'node_modules/@fontsource/manrope/files/manrope-latin-800-normal.woff';
const thaiFont = readFileSync(fontPath).toString('base64');
const displayFont = readFileSync(displayPath).toString('base64');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <style>
    @font-face {
      font-family: 'OGThai';
      src: url(data:font/woff;base64,${thaiFont}) format('woff');
    }
    @font-face {
      font-family: 'OGDisplay';
      src: url(data:font/woff;base64,${displayFont}) format('woff');
    }
    .en { font-family: 'OGDisplay'; font-weight: 800; fill: ${INK}; }
    .th { font-family: 'OGThai'; font-weight: 700; fill: ${INK2}; }
    .sub { font-family: 'OGDisplay'; font-weight: 800; fill: ${INK3}; }
  </style>

  <rect width="${W}" height="${H}" fill="${BG}"/>
  <rect width="${W}" height="12" fill="${ACCENT}"/>

  <text x="80" y="300" class="en" font-size="60">Advanced Grid Co., Ltd.</text>
  <text x="80" y="370" class="th" font-size="34">บริษัท แอดวานซ์ กริด จำกัด</text>
  <text x="80" y="452" class="sub" font-size="25">Energy Meter · Power Quality Meter · Meter Calibration</text>

  <rect x="80" y="498" width="120" height="6" fill="${GOLD}"/>
</svg>`;

const wordmark = await sharp('src/assets/advancedgrid-wordmark.png')
  .resize({ width: 300, fit: 'inside' })
  .png()
  .toBuffer();

await sharp(Buffer.from(svg))
  .composite([{ input: wordmark, top: 88, left: 80 }])
  .png({ compressionLevel: 9, palette: true })
  .toFile('public/og-image.png');

const { size } = await sharp('public/og-image.png')
  .metadata()
  .then(async (m) => ({
    size: (await import('node:fs')).statSync('public/og-image.png').size,
    ...m,
  }));

console.log(`Wrote public/og-image.png — ${W}x${H}, ${(size / 1024).toFixed(1)} kB`);
