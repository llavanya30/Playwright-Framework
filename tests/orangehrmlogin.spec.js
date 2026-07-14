const { test, expect } = require('@playwright/test');

test('Login Test', async ({ page }) => {
    // Open website
    await page.goto('https://www.saucedemo.com');
    
    // Enter username
    await page.fill('#user-name', 'standard_user');
    
    // Enter password
    await page.fill('#password', 'secret_sauce');
    
    // Click login button
    await page.click('#login-button');
    
    // Verify login successful
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    
    console.log('Login Test Passed!');
});