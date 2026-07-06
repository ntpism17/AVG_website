# Advanced Grid Co., Ltd. — Website

Astro + Tailwind CSS rebuild of advancedgrid.co.th. See `CLAUDE.md` for full project context, content rules, and pending items.

## Commands

```sh
npm install
npm run dev       # start dev server
npm run build     # production build to ./dist/
npm run preview   # preview the build
npm run astro check   # type-check
```

## Project structure

```
src/
├── content/            # Content Collections: products, projects, brands
├── content.config.ts   # collection schemas (glob loader)
├── components/         # Header, Footer, SectionHeading, illustrations
├── layouts/BaseLayout.astro  # SEO meta, JSON-LD, fonts
└── pages/               # one route per file/folder
legacy-html/             # original hand-built HTML/CSS site, kept as a copy reference — not built or deployed
```

## Pending before launch

See the "Todo / Pending Information" section in `CLAUDE.md`.
