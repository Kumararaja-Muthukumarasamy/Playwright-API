import {test,expect} from '@playwright/test'
import { ProductResponse } from '../../../api/models/product.model';
import { APIClient } from '../../../api/client/apiclient';
import { STATUS_CODES } from '../../../api/constants/statuscodes';

test('GET - Product details', async ({ request }) => {
    const api = new APIClient(request);

    const response = await api.get('/products', { auth: false });

    const body: ProductResponse = await response.json();

    const productId = body.products[4].id;

    console.log('Product ID:', productId);

    expect(response.status()).toBe(STATUS_CODES.OK);
});