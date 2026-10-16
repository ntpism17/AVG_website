// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap, { ChangeFreqEnum } from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.advancedgrid.co.th',
  vite: {
    plugins: [tailwindcss()],
  },

  // Thai stays unprefixed at existing URLs (preserves current SEO); English
  // and Chinese live under /en/ and /zh/.
  i18n: {
    defaultLocale: 'th',
    locales: ['th', 'en', 'zh'],
    routing: { prefixDefaultLocale: false },
  },

  // The form thank-you page is a post-submit destination, not a landing page.
  // Priority/changefreq bias crawlers toward the pages carrying the gold
  // keywords from the Thai SEO research (home, the two solutions pages, and
  // the /insights articles, which get fresh content over time).
  integrations: [
    sitemap({
      // Customer Stories (/projects) is hidden from the live site for now —
      // pages/content stay in the repo, just excluded from the sitemap.
      filter: (page) => !page.includes('/contact/thank-you') && !page.includes('/projects'),
      serialize(item) {
        const url = new URL(item.url);
        const path = url.pathname.replace(/^\/(en|zh)(?=\/|$)/, '');
        const isHighPriority =
          path === '/' ||
          path.startsWith('/solutions/amr') ||
          path.startsWith('/solutions/billing') ||
          path.startsWith('/insights');
        return {
          ...item,
          priority: isHighPriority ? 0.9 : 0.5,
          changefreq: path.startsWith('/insights') ? ChangeFreqEnum.WEEKLY : ChangeFreqEnum.MONTHLY,
        };
      },
    }),
  ],

  // Solar Smart Bill split into two products — billing carried the headline
  // PPA-invoicing feature, so the old indexed URL points there.
  redirects: {
    '/solutions/solar-smart-bill': '/solutions/billing',
  },
});
