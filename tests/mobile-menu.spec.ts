import { expect, test } from '@playwright/test';

// Every link in the mobile menu must navigate when tapped. iPhone Safari
// doesn't focus a link on tap, which once let the menu close before the link
// could navigate. The links are read from the page, so new menu items are
// covered automatically.
test('tapping each mobile menu link opens its page', async ({ page }) => {
  await page.goto('/');
  const panel = page.locator('#mobile-menu');
  const links = await panel.locator('a').evaluateAll((anchors) =>
    anchors.map((a) => ({ label: a.textContent!.trim(), path: new URL((a as HTMLAnchorElement).href).pathname })),
  );
  expect(links.length).toBeGreaterThan(5);

  for (const { label, path } of links) {
    // Start somewhere that isn't the target page.
    await page.goto(path === '/contact' ? '/about' : '/contact');
    await page.getByRole('button', { name: 'Menu' }).tap();
    await expect(panel).toBeVisible();
    await panel.getByRole('link', { name: label, exact: true }).tap();
    await expect(page, `tapping "${label}"`).toHaveURL(new RegExp(`${path.replace(/\/$/, '')}/?$`));
  }
});

test('tapping outside the open menu closes it', async ({ page }) => {
  await page.goto('/contact');
  await page.getByRole('button', { name: 'Menu' }).tap();
  const panel = page.locator('#mobile-menu');
  await expect(panel).toBeVisible();
  // The footer sits below the panel, outside the header.
  await page.locator('footer').tap({ position: { x: 5, y: 5 } });
  await expect(panel).toBeHidden();
});
