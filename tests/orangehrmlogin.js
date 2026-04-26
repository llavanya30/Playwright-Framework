import { test, expect } from '@playwright/test';

test('OrangeHRM Login Test', async ({ page }) => {

  // Step 1: Navigate to the application
  await page.goto('https://opensource-demo.orangehrmlive.com/');

  // Step 2: Enter username
  await page.locator('input[name="username"]').fill('Admin');

  // Step 3: Enter password
  await page.locator('input[name="password"]').fill('admin123');

  // Step 4: Click on login button
  await page.locator('button[type="submit"]').click();

  // Step 5: Validate successful login (Dashboard URL)
  await expect(page).toHaveURL(/dashboard/);

});