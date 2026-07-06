# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project Overview

Build a brand-new company website (design, code structure, and content all rebuilt from scratch) to replace the old site at https://www.advancedgrid.co.th/
The old site runs on an outdated CMS, is not well responsive, and has very weak SEO (empty titles, no meta descriptions, no alt text). This project must rebuild and improve every aspect of it.

## Tech Stack

- **Framework:** Astro (latest version; use Astro Content Collections for products/articles where appropriate)
- **Styling:** Tailwind CSS (`@astrojs/tailwind`)
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

**Products/brands found on the old site (need expanded details — pending additional info):**
- CEWE — Prometer 100
- SECURE — Premier 550
- CEWE — ProQ 100
- CEWE — Elite 500
- EDMI — Mk6E
- Meter Calibration service

> ⚠️ The product info above is only what was scraped from the old site (brand/model names only, no specs). Detailed specs, images, and selling points are pending a data file from the user — **do not invent or guess product specifications**.

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

## Design Guidelines

- Should feel trustworthy and professional, fitting a B2B electrical/energy equipment business
- Fully responsive (the old site worked poorly on mobile)
- Modern layout, not a generic recycled template look
- Content is primarily in Thai — structure the codebase so it *could* support a second language later, but full i18n is not required now

## Content Guidelines

- Never invent unsourced company/product/pricing information. If data is missing, insert a clear placeholder like `[pending product spec]` and immediately flag to the user what's needed
- Keep contact info/address/registration number exactly as specified above — do not alter or introduce typos
- Content tone: confident, professional, concise, emphasizing trustworthiness (honest, sincere, fast, punctual)

## Common Commands

```bash
npm run dev       # start dev server
npm run build     # production build
npm run preview   # preview build
```

When starting the dev server in an agent session, use background mode:

```bash
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Todo / Pending Information

- [x] Product data: no separate spec file — migrated from the pre-existing legacy HTML (see `legacy-html/`), which already had real specs for all 6 products
- [x] Product count confirmed: 6 (Prometer 100, Premier 550, ProQ 100, Elite 500, Mk6E, Calibration service)
- [x] Contact form: functioning form via Web3Forms confirmed (not mailto-only)
- [ ] Web3Forms access key needed before contact/quote forms go live (set `PUBLIC_WEB3FORMS_KEY`)
- [ ] Real product photography still missing — placeholders are decorative SVG only
- [ ] 3 of 4 project case studies (Rayong power plant, Chonburi rooftop, Bangkok AMR) are unverified/likely-fabricated — kept as `status: pending` in the projects collection, no detail page, until real data is supplied
