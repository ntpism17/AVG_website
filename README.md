# Advanced Grid Co., Ltd. — Website

Astro + Tailwind CSS rebuild of advancedgrid.co.th. See `CLAUDE.md` for full project context, content rules, and pending items. The site is trilingual (Thai default/unprefixed, English and Chinese under `/en/` and `/zh/`).

## Commands

```sh
npm install
npm run dev          # start dev server
npm run build        # production build to ./dist/
npm run preview      # preview the build
npm run check        # type-check (astro check)
npm run format       # format with Prettier
npm run build:og     # regenerate public/og-image.png — run manually, then commit
npm run build:favicon # regenerate the favicon set — run manually, then commit
```

`build:og` and `build:favicon` are deliberately **not** part of `npm run build`:
the social card and favicon set are reviewed, committed artifacts rather than
per-build surprises.

## Project structure

```
src/
├── assets/                  # images imported by components (optimized by astro:assets)
├── components/
│   ├── icons/               # single-purpose inline SVG components
│   ├── illustrations/       # decorative artwork (HeroMeter)
│   ├── layout/              # Header, Footer
│   ├── ui/                  # primitives: Button, Card, Section, Field, …
│   ├── ContactForm.astro    # Web3Forms wrapper; fields passed as children
│   ├── ProductCard.astro
│   └── SpecTable.astro
├── content/                 # Content Collections, nested th/ en/ zh/: products, projects, articles, brands
├── content.config.ts        # collection schemas (glob loader) + entry types
├── layouts/BaseLayout.astro # SEO meta, OG tags, canonical, JSON-LD, favicons, `head` slot
├── lib/                     # site constants, nav, services, i18n, queries, JSON-LD builders
├── pages/                   # routes — Thai (unprefixed) + en/ and zh/ mirrors
└── styles/global.css        # Tailwind v4 entry, font imports, design tokens
public/                      # served as-is: favicon set, og-image.png, robots.txt
scripts/build-og.mjs         # generates the OG card (see build:og above)
scripts/build-favicon.mjs    # regenerates the favicon set (see build:favicon above)
reference/legacy-site/       # original CMS HTML/CSS, kept as the migration reference — not built or deployed
```

### Where things live

- **Company data** (phone, email, addresses, registration number, socials) lives
  only in `src/lib/site.ts`. Never hardcode it into a page or component.
- **Structured data** is built in `src/lib/schema.ts` and emitted into `<head>`,
  either by `BaseLayout` (LocalBusiness, every page) or by a page through the
  layout's `head` slot (Product/Service, BreadcrumbList).
- **Collection queries** go through `src/lib/collections.ts` so ordering stays
  consistent across the listing pages, homepage teaser and footer.

## Pending before launch

See the "Todo / Pending Information" section in `CLAUDE.md`.
