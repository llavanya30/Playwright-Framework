const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
    console.log('Before Each - Login done!');
});

test.afterEach(async ({ page }) => {
    console.log('After Each - Test completed!');
});

test('Verify Products Page', async ({ page }) => {
    await expect(page).toHaveURL(/inventory/);
    await expect(page.locator('.title')).toHaveText('Products');
    console.log('Products page verified!');
});

test('Verify Cart Page', async ({ page }) => {
    await page.locator('.shopping_cart_link').click();
    await expect(page).toHaveURL(/cart/);
    console.log('Cart page verified!');
});