# Advanced Grid Co., Ltd. — Website

Astro + Tailwind CSS rebuild of advancedgrid.co.th. See `CLAUDE.md` for full project context, content rules, and pending items.

## Commands

```sh
npm install
npm run dev          # start dev server
npm run build        # production build to ./dist/
npm run preview      # preview the build
npm run check        # type-check (astro check)
npm run format       # format with Prettier
npm run build:og     # regenerate public/og-image.png — run manually, then commit
```

`build:og` is deliberately **not** part of `npm run build`: the social card is a
reviewed, committed artifact rather than a per-build surprise.

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
├── content/                 # Content Collections: products, projects, brands
├── content.config.ts        # collection schemas (glob loader) + entry types
├── layouts/BaseLayout.astro # SEO meta, OG tags, canonical, JSON-LD, `head` slot
├── lib/                     # site constants, nav, services, queries, JSON-LD builders
├── pages/                   # one route per file/folder
└── styles/global.css        # Tailwind v4 entry, font imports, design tokens
public/                      # served as-is: favicons, og-image.png, robots.txt
scripts/build-og.mjs         # generates the OG card (see build:og above)
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
