/** Main navigation (design system → Header). "Get involved" is the header pill. */
export const mainNav = [
  { label: 'About', href: '/about' },
  { label: 'Academics', href: '/academics' },
  { label: 'Admissions', href: '/admissions' },
  { label: 'Co-curricular', href: '/co-curricular' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' },
];

export const getInvolved = { label: 'Get involved', href: '/get-involved' };

export const footerNav = [...mainNav.slice(0, 5), getInvolved, mainNav[5]];

/** True when `href` is the current section (so /news/some-story marks News). */
export function isCurrent(pathname: string, href: string): boolean {
  const path = pathname.replace(/\/$/, '') || '/';
  return path === href || path.startsWith(`${href}/`);
}
