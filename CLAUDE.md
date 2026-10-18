# Al-Bayan Learning Initiative Foundation website

## Read these first, every session

Before any work on this site, read these three files in full and follow them:

1. `docs/project-brief.md`: what to build, the pages, the content collections
   and the rules. If it conflicts with anything below, the brief wins; update
   this file to match.
2. `docs/design-system.md`: colours, fonts, components and page patterns.
3. `design/home-reference.html`: the approved homepage. Open it in a browser.

## Key rules (from the brief)

- **The repo is public.** Never commit secrets, keys, personal data, bank
  account numbers, or photos of children. Children appear only with written
  guardian consent, using first names or initials; until then use placeholders.
- **Placeholders go in [square brackets]**, for example `[Student count]` or
  `[Photo: debate team]`. Never write realistic fake text, names, numbers or
  quotes.
- **Keep the `launchMode` coming-soon gate working** (see below). Never break or
  remove it: placeholders must never reach albayanlearning.pk.
- **Commit straight to `main`** in small, clear commits. No pull requests before
  launch. **Don't push unless the owner asks.** Pushing `main` triggers the
  production build on Cloudflare.
- No logins, staff portal, intranet, LMS or student records: those live in
  Google Workspace for Education.
- Use CSS logical properties (`ms-`, `me-`, `ps-`, `pe-`, `start-`, `end-`,
  `text-start`), never left/right utilities, so Urdu RTL can be added later.

Astro + Tailwind CSS static site, deployed to **Cloudflare Workers with static
assets** (Workers Builds), using the `@astrojs/cloudflare` adapter. Pages are
prerendered to static HTML and served from the assets store. Server-side code
(forms now, payments later) is written as Astro routes/endpoints that opt out of
prerendering (`export const prerender = false`); the adapter bundles them into
the Worker that runs alongside the assets. There is no `/functions` folder.

### Node version

The build requires **Node >= 22.22.0** (see `engines` in `package.json` and
`.nvmrc`). Run `nvm use` locally; Workers Builds reads `.nvmrc`.

## Run, build, and test locally

```bash
npm install        # install dependencies
npm run dev        # local dev server at http://localhost:4321 (full site)
npm run build      # production build → dist/ (dist/client assets + dist/server Worker)
npm run preview    # serve the built Worker + assets locally (via the adapter)
```

There is no unit-test suite yet. "Testing" a change means: it builds cleanly
(`npm run build`) and looks correct in `npm run dev` / `npm run preview`.

The build output is split by the Cloudflare adapter:

- `dist/client/` — prerendered pages and hashed assets (the static assets).
- `dist/server/` — the Worker (`entry.mjs`) plus a generated `wrangler.json`,
  the real deploy config (it adds `main` and points assets at `../client`).

Deploy with the generated config:

```bash
npx wrangler deploy -c dist/server/wrangler.json
```

The source `wrangler.jsonc` at the repo root defines `name`,
`compatibility_date`, `compatibility_flags`, the `assets` binding/directory, and
`preview_urls`. Do **not** add a `main` field there — the Worker entry does not
exist until after the build, and the adapter injects it into the generated
config.

### Launch mode and branch behaviour

- The site name and all launch settings come from `src/data/site.json`. Read the
  school name from that file in every page — never hard-code it.
- `launchMode` is `"coming-soon"` or `"live"`.
- When `launchMode` is `"coming-soon"` **and** the build is on the **main**
  branch, `src/middleware.ts` rewrites every route to the coming-soon homepage,
  so nothing else ships before launch.
- On any other branch (Cloudflare preview builds) and in local dev, the full
  site is shown. The branch is detected via the `WORKERS_CI_BRANCH` build
  variable (Cloudflare Workers Builds); locally it is unset and treated as a
  preview. The value is read at build time and baked into the bundle through
  `vite.define` in `astro.config.mjs` (as `__WORKERS_CI_BRANCH__`), then exposed
  by `src/lib/launch.ts` — because the gate runs in middleware that executes in
  the Cloudflare prerender/Worker runtime, where `process.env` is not the CI
  environment.

To preview the production (coming-soon) behaviour locally:
`WORKERS_CI_BRANCH=main npm run build`.

## Commit workflow

- Before launch, commit directly to `main` (owner's decision, see the brief).
  No feature branches or pull requests unless the owner asks for them.
- Do not push unless asked. Cloudflare Workers Builds builds `main` as
  production (coming-soon while `launchMode` is `"coming-soon"`), and any other
  pushed branch as a full-site preview with its own `preview_urls` Worker URL.

## Content collections

Content lives in `src/content/<collection>/` and is validated by the schemas in
`src/content.config.ts`, which follow the table in `docs/project-brief.md`.
Collections: `team`, `programs`, `activities`, `jobs`, `news`, `testimonials`.
Site-wide settings (contact details, socials, registration number, announcement
strip, impact stats, `launchMode`) live in `src/data/site.json`.

- Add content by adding a Markdown file to the right collection folder; its
  frontmatter must match that collection's schema.
- To change a content shape, update the schema in `src/content.config.ts` first,
  then update every entry to match. The build fails on schema violations.
- Keep at least one entry per collection so the full site always renders.
  Until real content exists, entries are placeholders in [brackets].

## Database migrations

- All database changes go through migration files in `/migrations` — never apply
  schema changes by hand against a live database.
- One migration per change, applied in order; never edit a migration that has
  already been applied.

## Infrastructure and secrets — do not touch

- **Never change DNS records or Cloudflare account settings** (the Workers
  project config, domains, zones, access rules). These are managed outside this
  repo. Editing `wrangler.jsonc` to change the deployment target, the project
  `name`, or routing counts as account settings — leave it alone unless asked.
- **Never commit secrets** (API keys, tokens, credentials). Use Cloudflare
  Workers environment variables / secrets for runtime values and a local `.env`
  (git-ignored) for development. `.env*` is already in `.gitignore`.
