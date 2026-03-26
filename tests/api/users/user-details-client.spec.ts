import { test, expect } from '@playwright/test';
import { APIClient } from '../../../api/client/apiclient';
import { USER_ENDPOINTS } from '../../../api/auth/endpoints/userendpoints';

test('Get user details with the client', async ({ request }) => {
    const apiClient = new APIClient(request);
    console.log('BaseURL:', process.env.BASE_URL);
    const response = await apiClient.get(USER_ENDPOINTS.ME)
    const body = await response.json();

    console.log('User:', body);

    expect(response.status()).toBe(200);
    expect(body.username).toBeTruthy();
})