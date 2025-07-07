import { test, expect } from '@playwright/test';

test('register new user and login success', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/ParaBank/);

  await   




});








test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
