# Cloudflare Pages Functions

Server-side code lives here. Cloudflare Pages deploys everything under
`/functions` as [Pages Functions](https://developers.cloudflare.com/pages/functions/)
automatically, alongside the static Astro build in `dist/`.

- File-based routing: `functions/api/contact.ts` → `POST /api/contact`.
- Export `onRequest`, `onRequestGet`, `onRequestPost`, etc. per route.
- Use this for forms today and payments later.

Secrets (API keys, tokens) are configured as Cloudflare Pages environment
variables / secrets — never commit them to the repo.
