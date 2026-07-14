const {test,expect} = require ('@playwright/test');
const logindata = [
    { username: 'standard_user', password: 'secret_sauce', expected: 'pass' },
    { username: 'locked_out_user', password: 'secret_sauce', expected: 'fail' },
    { username: 'invalid_user', password: 'wrong_pass', expected: 'fail' }
];

for (const data of logindata){
    test(`Login test - ${data.username}` ,async({page})=> {
        await page.goto("https://www.saucedemo.com");
        await page.getByPlaceholder('Username').fill(data.username);
        await page.getByPlaceholder('Password').fill(data.password);
        await page.getByRole('button', { name: 'Login' }).click();

        if (data.expected === 'pass') {
            await expect(page).toHaveURL(/inventory/);
            console.log(`${data.username} - Login Passed!`);
        } else {
            await expect(page.locator('.error-message-container')).toBeVisible();
            console.log(`${data.username} - Error shown correctly!`);
        }
    });
}

