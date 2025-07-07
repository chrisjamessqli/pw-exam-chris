import { test as base, expect } from '@playwright/test';
import { test } from '../fixtures/fixure';
import { request } from 'http';

test('register new user success', async ({ page, pageManager, user, request }) => {

  await page.goto('https://parabank.parasoft.com/');
  await expect(page).toHaveTitle(/ParaBank/);
  await pageManager.onLeftPanel().clickRegisterLink();
  await pageManager.onRegisterForm().fillRegisterForm(user);
  await pageManager.onRegisterForm().submitRegisterForm()
  await expect (pageManager.onRegisterForm().registrationSuccessMessage).toBeVisible();

  // Check via API that newly created user can login.
  const loginReponse = await request.post('https://parabank.parasoft.com/parabank/login.htm', {
    maxRedirects: 0,  // Ensure the API request doesn't get redirected resulting in 200 status code.
    form: {
      username: user.username,
      password: user.password
    }
  });
  expect(loginReponse.status()).toBe(302);

  await pageManager.onLeftPanel().clickLogoutLink();
  await expect (pageManager.onLeftPanel().registerLink).toBeVisible();

});
