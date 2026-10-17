import { defineMiddleware } from 'astro:middleware';
import { isComingSoon } from './lib/launch';

/**
 * When the coming-soon gate is active (launchMode "coming-soon" on the main
 * branch), every route is rewritten to the homepage, which renders the
 * coming-soon page. This guarantees no other route leaks real content before
 * launch, without having to guard each page individually.
 *
 * On preview branches and local dev the gate is off and requests pass through
 * untouched, so the full site is visible for development and review.
 */
export const onRequest = defineMiddleware((context, next) => {
  if (isComingSoon() && context.url.pathname !== '/') {
    return context.rewrite('/');
  }
  return next();
});
