# Al-Bayan School website

Astro + Tailwind CSS static site, deployed to Cloudflare Pages. Server-side code
(forms now, payments later) runs as Cloudflare Pages Functions under
`/functions`.

## Run, build, and test locally

```bash
npm install        # install dependencies
npm run dev        # local dev server at http://localhost:4321 (full site)
npm run build      # static production build → dist/
npm run preview    # serve the built dist/ locally
```

There is no unit-test suite yet. "Testing" a change means: it builds cleanly
(`npm run build`) and looks correct in `npm run dev` / `npm run preview`.

### Launch mode and branch behaviour

- The site name and all launch settings come from `src/data/site.json`. Read the
  school name from that file in every page — never hard-code it.
- `launchMode` is `"coming-soon"` or `"live"`.
- When `launchMode` is `"coming-soon"` **and** the build is on the **main**
  branch, `src/middleware.ts` rewrites every route to the coming-soon homepage,
  so nothing else ships before launch.
- On any other branch (Cloudflare preview builds) and in local dev, the full
  site is shown. The branch is detected via the `CF_PAGES_BRANCH` build variable
  (see `src/lib/launch.ts`); locally it is unset and treated as a preview.

To preview the production (coming-soon) behaviour locally:
`CF_PAGES_BRANCH=main npm run build`.

## Branch and pull request workflow

- **Never commit directly to `main`.** `main` is the production branch.
- Create a feature branch, push it, and open a pull request with `gh`.
- Cloudflare builds a preview for every non-main branch (full site) and the
  production coming-soon/live build for `main`.

## Content collections

Content lives in `src/content/<collection>/` and is validated by the schemas in
`src/content.config.ts`. Collections: `team`, `programs`, `activities`, `jobs`,
`news`, `testimonials`.

- Add content by adding a Markdown file to the right collection folder; its
  frontmatter must match that collection's schema.
- To change a content shape, update the schema in `src/content.config.ts` first,
  then update every entry to match. The build fails on schema violations.
- Keep one real sample entry per collection so the full site always renders.

## Database migrations

- All database changes go through migration files in `/migrations` — never apply
  schema changes by hand against a live database.
- One migration per change, applied in order; never edit a migration that has
  already been applied.

## Infrastructure and secrets — do not touch

- **Never change DNS records or Cloudflare account settings** (Pages project
  config, domains, zones, access rules). These are managed outside this repo.
- **Never commit secrets** (API keys, tokens, credentials). Use Cloudflare Pages
  environment variables / secrets for runtime values and a local `.env`
  (git-ignored) for development. `.env*` is already in `.gitignore`.
