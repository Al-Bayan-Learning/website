import { defineConfig, devices } from '@playwright/test';

/**
 * Browser tests against the built site (`npm run build` first). The mobile
 * menu is tested on an iPhone in WebKit (Safari's engine) and an Android
 * phone in Chromium.
 */
export default defineConfig({
  testDir: 'tests',
  reporter: 'list',
  use: { baseURL: 'http://localhost:4323' },
  webServer: {
    command: 'npx astro preview --port 4323 --ignore-lock',
    url: 'http://localhost:4323',
    reuseExistingServer: false,
  },
  projects: [
    { name: 'iphone-webkit', use: { ...devices['iPhone 15'] } },
    { name: 'android-chromium', use: { ...devices['Pixel 7'] } },
  ],
});
