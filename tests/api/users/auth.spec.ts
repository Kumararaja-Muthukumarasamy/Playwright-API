import { test, expect } from '@playwright/test';

test('Generate token', async ({ request }) => {

    const response = await request.post('https://dummyjson.com/auth/login', {
        data: {
            username: 'emilys',
            password: 'emilyspass'
        }
    })

    const body = await response.json();

    console.log('Body:', body); 
    const token = body.accessToken;

    console.log('Token : ' + token);

    console.log('Status :', response.status());

    expect(response.status()).toBe(200);
});