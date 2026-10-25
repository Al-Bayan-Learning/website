// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';
import site from './src/data/site.json' with { type: 'json' };

// The build branch comes from Cloudflare Workers Builds' WORKERS_CI_BRANCH env
// var, which exists in the Node build process but NOT in the Cloudflare
// prerender/Worker runtime (where process.env is not the CI environment). Bake
// it into the bundle at build time via `vite.define` so the coming-soon gate in
// src/lib/launch.ts can read it wherever the middleware runs.
const workersCiBranch = process.env.WORKERS_CI_BRANCH ?? '';

// Static-first build deployed to Cloudflare Workers with static assets.
// Pages are prerendered to static HTML by default and served straight from the
// assets store. Server code (forms now, payments later) is written as Astro
// routes/endpoints that opt out of prerendering (`export const prerender =
// false`); the Cloudflare adapter bundles those into the Worker. There is no
// /functions folder.
export default defineConfig({
  site: site.url,
  output: 'static',
  // Images are optimised at build time with sharp and served as static files
  // (no Cloudflare Images binding needed at build or run time).
  adapter: cloudflare({ imageService: 'compile' }),
  // The Cloudflare adapter enables Astro sessions by default and injects a
  // SESSION KV binding with no namespace id, relying on auto-provisioning.
  // Preview deploys can't auto-provision it, so the deploy fails (error
  // 10021). Nothing uses sessions yet; when something does, create a KV
  // namespace and add it to wrangler.jsonc, then remove this line.
  session: false,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    define: {
      __WORKERS_CI_BRANCH__: JSON.stringify(workersCiBranch),
    },
  },
});
