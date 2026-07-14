const {test,expect} = require ('@playwright/test')
test('GET-API FETCH',async({request}) => {
    const response = await request.get ('https://jsonplaceholder.typicode.com/users/1');

    //verify status code
    expect(response.status()).toBe(200);

    //verify body
    const body = await response.json();
    console.log(body);
    expect (body.id).toBe (1);
    expect (body.name).toBe('Leanne Graham');
    console.log("API Test Passed");

}
);