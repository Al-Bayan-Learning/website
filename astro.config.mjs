// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import site from './src/data/site.json' with { type: 'json' };

// Static build. Server code (forms, payments) lives in Cloudflare Pages
// Functions under /functions, not in the Astro output.
export default defineConfig({
  site: site.url,
  output: 'static',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
