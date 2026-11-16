import { expect, test } from '@playwright/test';
import { headerCta, mainNav } from '../src/data/navigation';

// Every link in the mobile menu must navigate when tapped. iPhone Safari
// doesn't focus a link on tap, which once let the menu close before the
// link could navigate.
for (const { label, href } of [...mainNav, headerCta]) {
  test(`tapping "${label}" in the mobile menu opens ${href}`, async ({ page }) => {
    // Start somewhere that isn't the target page.
    await page.goto(href === '/contact' ? '/about' : '/contact');
    await page.getByRole('button', { name: 'Menu' }).tap();
    const panel = page.locator('#mobile-menu');
    await expect(panel).toBeVisible();
    await panel.getByRole('link', { name: label, exact: true }).tap();
    await expect(page).toHaveURL(new RegExp(`${href}/?$`));
  });
}

test('tapping outside the open menu closes it', async ({ page }) => {
  await page.goto('/contact');
  await page.getByRole('button', { name: 'Menu' }).tap();
  const panel = page.locator('#mobile-menu');
  await expect(panel).toBeVisible();
  // The footer sits below the panel, outside the header.
  await page.locator('footer').tap({ position: { x: 5, y: 5 } });
  await expect(panel).toBeHidden();
});
