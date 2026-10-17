import site from '../data/site.json';

/**
 * The branch this build is running on.
 *
 * Cloudflare Pages exposes the current branch via the CF_PAGES_BRANCH build
 * variable. Locally (astro dev / astro build) it is unset, so we report
 * "local", which is treated like a preview branch (full site).
 */
export function getBranch(): string {
  return process.env.CF_PAGES_BRANCH ?? 'local';
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
