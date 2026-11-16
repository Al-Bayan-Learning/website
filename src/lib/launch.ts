import site from '../data/site.json';

/**
 * Build-time branch name, injected by `vite.define` in astro.config.mjs from
 * the WORKERS_CI_BRANCH env var. It must be baked into the bundle rather than
 * read from `process.env` at runtime, because the coming-soon rewrite runs in
 * middleware that executes in the Cloudflare prerender/Worker runtime, where
 * `process.env` is not the Workers Builds CI environment.
 */
declare const __WORKERS_CI_BRANCH__: string;

/**
 * The branch this build is running on.
 *
 * Cloudflare Workers Builds exposes the current branch via the
 * WORKERS_CI_BRANCH build variable. Locally (astro dev / astro build) it is
 * unset, so we report "local", which is treated like a preview branch (full
 * site).
 */
export function getBranch(): string {
  // The typeof check lets Node scripts (the Playwright tests) import this.
  return (typeof __WORKERS_CI_BRANCH__ !== 'undefined' && __WORKERS_CI_BRANCH__) || 'local';
}

/** True when this build is the production (main) branch build on Cloudflare. */
export function isProductionBranch(): boolean {
  return getBranch() === 'main';
}

/**
 * Whether the site should render only the coming-soon page.
 *
 * Coming-soon is shown ONLY when launchMode is "coming-soon" AND the build is
 * on the main branch. Every other branch (preview builds) and local dev show
 * the full site, so the team can work on it before launch.
 */
export function isComingSoon(): boolean {
  return site.launchMode === 'coming-soon' && isProductionBranch();
}

/** Whether /news is built and linked (site.json → showNews). */
export function showNews(): boolean {
  return site.showNews;
}

/**
 * Whether /donate and the Donate buttons appear. Until the team approves the
 * page (site.json → showDonate), they show only on previews and locally,
 * never on the production build.
 */
export function showDonate(): boolean {
  return site.showDonate || !isProductionBranch();
}
