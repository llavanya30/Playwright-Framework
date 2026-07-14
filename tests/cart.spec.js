const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPages');
const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/CartPage');


test('Verify Cart Page Title', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const cartPage = new CartPage(page);
    
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await cartPage.goToCart();
    
    // Assertion - verify cart title
    const title = await cartPage.getCartTitle();
    expect(title).toBe('Your Cart');
    
    console.log('Cart Title verified: ' + title);
});