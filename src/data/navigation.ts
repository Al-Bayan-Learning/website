import { showDonate, showNews } from '../lib/launch';

/** Main navigation (design system → Header). The header pill is `headerCta`. */
export const mainNav = [
  { label: 'About', href: '/about' },
  { label: 'Academics', href: '/academics' },
  { label: 'Co-curricular', href: '/co-curricular' },
  { label: 'Volunteer', href: '/volunteer' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

/** Gold "Donate" pill in the header; hidden where /donate isn't shown yet. */
export const headerCta = showDonate() ? { label: 'Donate', href: '/donate' } : undefined;

/** The two calls to action used on the homepage hero and every CTA band. */
export const donateCta = showDonate() ? { label: 'Donate now', href: '/donate' } : { label: 'Contact us', href: '/contact' };
export const volunteerCta = { label: 'Volunteer with us', href: '/volunteer' };

export const footerNav = [
  ...mainNav.slice(0, 5),
  ...(showNews() ? [{ label: 'News', href: '/news' }] : []),
  ...(headerCta ? [headerCta] : []),
  mainNav[5],
];

/** True when `href` is the current section (so /news/some-story marks News). */
export function isCurrent(pathname: string, href: string): boolean {
  const path = pathname.replace(/\/$/, '') || '/';
  return path === href || path.startsWith(`${href}/`);
}
