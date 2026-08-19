// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.advancedgrid.co.th',
  vite: {
    plugins: [tailwindcss()],
  },

  // The form thank-you page is a post-submit destination, not a landing page.
  integrations: [sitemap({ filter: (page) => !page.includes('/contact/thank-you') })],
});
