import { test as base, expect } from '@playwright/test';
import { test } from '../fixtures/fixure';

test('register new user success', async ({ page, pageManager, user }) => {

  await page.goto('https://parabank.parasoft.com/');
  await expect(page).toHaveTitle(/ParaBank/);
  await pageManager.onLeftPanel().clickRegisterLink();
  await pageManager.onRegisterForm().fillRegisterForm(user);
  await pageManager.onRegisterForm().submitRegisterForm();
  await expect (pageManager.onRegisterForm().registrationSuccessMessage).toBeVisible();
  await pageManager.onLeftPanel().clickLogoutLink();
  await expect (pageManager.onLeftPanel().registerLink).toBeVisible();

});
