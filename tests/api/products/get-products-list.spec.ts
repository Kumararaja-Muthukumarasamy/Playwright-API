import { test, expect } from '@playwright/test';
import { APIClient } from '../../../api/client/apiclient';
import { writeData } from '../../../api/util/datamanager';
import { STATUS_CODES } from '../../../api/constants/statuscodes';


test('GET - Product details', async ({ request }) => {
    const api = new APIClient(request);

    const response = await api.get('/products', { auth: false });
    const body = await response.json();

    const productId = body.products[4].id;
    writeData(productId);

    console.log(body.products.length);
    console.log(body);

    expect(response.status()).toBe(STATUS_CODES.OK);
    expect(body.products.length).toBeGreaterThan(0);
})