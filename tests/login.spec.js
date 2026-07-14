

test('Login and Go to Cart Test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.clickFirstProduct();
    await cartPage.goToCart();
    
    const title = await cartPage.getCartTitle();
    console.log('Cart Title is: ' + title);
    
    await expect(page).toHaveURL(/cart/);
    console.log('Cart Test Passed!');
});