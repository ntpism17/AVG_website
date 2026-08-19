# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project Overview

Build a brand-new company website (design, code structure, and content all rebuilt from scratch) to replace the old site at https://www.advancedgrid.co.th/
The old site runs on an outdated CMS, is not well responsive, and has very weak SEO (empty titles, no meta descriptions, no alt text). This project must rebuild and improve every aspect of it.

## Tech Stack

- **Framework:** Astro (latest version; use Astro Content Collections for products/articles where appropriate)
- **Styling:** Tailwind CSS v4 via `@tailwindcss/vite`, registered as a Vite plugin in `astro.config.mjs` — _not_ the older `@astrojs/tailwind` integration, which is not installed. Design tokens and font imports live in `src/styles/global.css`
- **Language:** TypeScript for all components/scripts
- **Image optimization:** Use Astro's `<Image />` component (`astro:assets`) for all images — avoid raw `<img>` tags unless necessary
- **Deployment target:** Static site (SSG). No backend/CMS needed at this stage unless specified later
- **Font:** Use a readable Thai-friendly font, e.g. Noto Sans Thai or IBM Plex Sans Thai (self-hosted via `@fontsource`, not a direct Google Fonts CDN link, for performance)

### Why Astro (not Next.js / WordPress)

- The site maintainer is a developer (not a non-technical content editor), so a headless/full CMS isn't required.
- No planned dynamic features (no user accounts, no online ordering) — this is a static, content-driven company site.
- Astro ships zero JS by default, which gives the best out-of-the-box SEO and performance for this use case, while still allowing Markdown/Content Collections for easy content maintenance directly in code.

## Site Structure (Sitemap)

1. **Home** — Hero section, company summary, core services, featured products, contact CTA
2. **About Us** — Company history, vision/mission, brand positioning (honest, sincere, fast, punctual)
3. **Services** — Either sub-pages or sections for the core services (see below)
4. **Products** — Full product listing; each product has its own detail page (use a Content Collection)
5. **Contact** — Contact details, embedded Google Map, contact form (since this is a static site, use a third-party form handler like Formspree or Web3Forms if a working form is required)

## Company Information (from the old site)

**Company name:** Advanced Grid Co., Ltd. (บริษัท แอดวานซ์ กริด จำกัด)
**Corporate registration number:** 0125563021024

**Core business:**
Distributor and service provider of electrical equipment — Energy Meters, Power Quality Meters (PQM), communication equipment; consulting, design, and installation of electrical/communication systems; import-export of electrical and communication equipment.

**Brand positioning / tagline:** Working with honesty, sincerity, speed, and punctuality.

**Core services:**

1. Supply of TOU Meters & Power Quality Analyzers for power plant, solar, rooftop, and floating solar farm projects
2. Design and installation of Meter Boxes, Communication Boxes, etc.
3. Design and supply of smart meter communication system equipment
4. Meter calibration services

**Product catalogue (7 items):**

- SECURE — Prometer 100 _(full spec table from datasheet)_
- SECURE — Premier 550 _(full spec table from datasheet)_
- SECURE — Saral _(full spec table from datasheet)_
- CEWE — ProQ 100 _(tag-level specs only — datasheet needed)_
- CEWE — Elite 500 _(tag-level specs only — datasheet needed)_
- EDMI — Mk6E _(tag-level specs only — datasheet needed)_
- Meter Calibration service

> ⚠️ **Brand attribution correction (2026-08-17):** the old site listed Prometer 100 under CEWE, but the
> manufacturer datasheet (`reference/legacy-site/assets/1717570843_prometer100wall.pdf`) is a **SECURE Meters**
> document — `securemeters.com` appears 7 times with SECURE regional sales contacts. Corrected to SECURE
> across the product entry, the CEWE/SECURE brand descriptions, and the Lopburi case study.
>
> ProQ 100 and Elite 500 remain attributed to **CEWE but unverified** — no datasheet was supplied for
> either, so their attribution has not been independently confirmed. Verify before relying on it.

> ⚠️ Specs in `specTable` are transcribed **verbatim** from manufacturer datasheets, with `specSource`
> recording the origin. Never invent, round, or extrapolate a spec value. Products without a supplied
> datasheet keep only their short `specs` marketing tags.
>
> The datasheet PDFs are kept **untracked and local** in `reference/legacy-site/assets/` and are
> deliberately _not_ hosted in `public/` — they are manufacturer copyright documents.

**Locations:**

- Registered address: 99/6116 Moo 2, Tha It, Pak Kret, Nonthaburi 11120
- Sales office: MRV Building, 38/5 Moo 4, Bang Phlap, Pak Kret, Nonthaburi 11120

**Contact info:**

- Phone: 099-226-8000
- Email: advancedgrid@gmail.com
- Line ID: @856khvjl
- Facebook: [Advanced Grid](https://www.facebook.com/profile.php?id=100078060450011)
- Google Maps: https://goo.gl/maps/p8PFbQjK14TDUXtX8

## SEO Requirements (critical — the old site had none of this)

Every page must have:

- A unique `<title>` including relevant business keywords (e.g. "Energy Meter, Power Quality Meter | Advanced Grid Co., Ltd.")
- A page-specific `<meta name="description">` (never empty, unlike the old site)
- Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`)
- Proper semantic HTML (single `<h1>` per page, correct heading hierarchy)
- Meaningful `alt` text on every image (the old site had none)
- `sitemap.xml` and `robots.txt` (use `@astrojs/sitemap`)
- JSON-LD structured data using `LocalBusiness` or `Organization` schema with company/address/phone info
- Clean, readable English-slug URLs (e.g. `/products/prometer-100`, not fragment-based junk like the old site's `#suop--ele___block-gallery-2134`)
- Strong Core Web Vitals — leverage Astro's zero-JS-by-default approach, lazy-load below-the-fold images
- A canonical URL on every page

## Code Structure

```
src/
├── assets/                  # images imported by components
├── components/
│   ├── icons/               # single-purpose inline SVGs
│   ├── illustrations/       # decorative artwork
│   ├── layout/              # Header, Footer
│   └── ui/                  # Button, Card, Section, CTABand, Field, Pill, …
├── content/ + content.config.ts
├── layouts/BaseLayout.astro
├── lib/                     # site.ts, nav.ts, services.ts, collections.ts, schema.ts
├── pages/
└── styles/global.css
reference/legacy-site/       # old CMS export, migration reference only — never built
```

Rules that keep this from decaying:

- **Company data lives only in `src/lib/site.ts`.** Phone, email, both addresses,
  registration number, Line ID, Facebook, maps link. Never retype these into a page
  or component — import `SITE`. The phone number intentionally carries three shapes
  (`display`, `href`, `intl`) because display text, `tel:` links and schema.org each
  need a different one.
- **Reuse the `ui/` primitives** instead of pasting Tailwind class strings. If a
  variant is missing, add a prop to the primitive rather than hand-rolling markup —
  the pre-refactor code had the same button string typed 9 times and it had already
  drifted.
- **Collection queries go through `src/lib/collections.ts`** so the `order` sort stays
  consistent between listing pages, the homepage teaser and the footer.
- **JSON-LD is built in `src/lib/schema.ts`** and always emitted into `<head>` —
  `BaseLayout` emits `LocalBusiness` on every page; pages add their own
  (Product/Service, BreadcrumbList) through the layout's `head` slot.
- **Page titles**: pass the bare page title to `BaseLayout`; it appends
  `TITLE_SUFFIX`. Only the homepage sets `exactTitle` (its keyword-first title is
  deliberate for SEO).
- **Services** are a typed const in `src/lib/services.ts`, not a collection — four
  fixed items consumed by the home teaser, the services page and the footer.

## Design Guidelines

- Should feel trustworthy and professional, fitting a B2B electrical/energy equipment business
- Fully responsive (the old site worked poorly on mobile)
- Modern layout, not a generic recycled template look
- Content is primarily in Thai — structure the codebase so it _could_ support a second language later, but full i18n is not required now

## Content Guidelines

- Never invent unsourced company/product/pricing information. If data is missing, insert a clear placeholder like `[pending product spec]` and immediately flag to the user what's needed
- Keep contact info/address/registration number exactly as specified above — do not alter or introduce typos
- Content tone: confident, professional, concise, emphasizing trustworthiness (honest, sincere, fast, punctual)

## Common Commands

```bash
npm run dev          # start dev server
npm run build        # production build
npm run preview      # preview build
npm run check        # type-check (astro check)
npm run format       # format with Prettier
npm run build:og     # regenerate public/og-image.png, then commit the result
```

`build:og` is intentionally not wired into `npm run build` — the social card stays
a reviewed, committed artifact rather than a per-build surprise.

When starting the dev server in an agent session, launch it as a background task
(the Bash tool's `run_in_background`) rather than blocking on it, since
`npm run dev` never exits on its own.

This environment wraps `astro dev` with a managed background server, so
`astro dev status`, `astro dev stop` and `astro dev logs` do work here — verified
2026-08-17. Note that `astro dev` is idempotent under this wrapper: if a server is
already running it prints "Dev server already running" and exits 0 instead of
starting a second one. A dev server may therefore be left over from an earlier
session — check `astro dev status` first, and confirm it is serving current code
before trusting what you see. These are wrapper features, not upstream Astro CLI
subcommands, so don't rely on them outside this environment.

## Todo / Pending Information

- [x] Product data: migrated from the legacy HTML, then deepened with real datasheet specs (see below)
- [x] Product count: **7** (Prometer 100, Premier 550, Saral, ProQ 100, Elite 500, Mk6E, Calibration service)
- [x] Contact form: functioning form via Web3Forms confirmed (not mailto-only)
- [x] Datasheet ingest: Prometer 100, Premier 550 and Saral now carry full `specTable` data from manufacturer PDFs
- [x] Web3Forms wired to `PUBLIC_WEB3FORMS_KEY` — forms degrade to a phone/email notice when unset
- [x] OG image: real 1200×630 branded card, generated by `scripts/build-og.mjs` (was a 2 MB copy of the logo)
- [ ] **Web3Forms access key** — paste into `.env` (copy `.env.example`); forms stay disabled until then
- [ ] Datasheets needed for ProQ 100, Elite 500, Mk6E to give them spec tables
- [ ] EDMI `origin` + `founded` unknown — `[pending]` in `src/content/brands/edmi.md`, hidden at render
- [ ] Verify ProQ 100 / Elite 500 are genuinely CEWE (Prometer 100 was misattributed — see the warning above)
- [ ] ISO/IEC 17025 accrediting body + certificate number for the calibration service
- [ ] Real product photography still missing — `image` field exists on the products schema, unused
- [ ] 3 of 4 project case studies (Rayong power plant, Chonburi rooftop, Bangkok AMR) are unverified/likely-fabricated — kept as `status: pending` in the projects collection, no detail page, until real data is supplied
