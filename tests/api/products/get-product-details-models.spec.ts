import { test, expect } from '@playwright/test';
import { APIClient } from '../../../api/client/apiclient';
import { readData } from '../../../api/util/datamanager';
import { PRODUCT_ENDPOINTS } from '../../../api/auth/endpoints/productendpoints';
import { STATUS_CODES } from '../../../api/constants/statuscodes';
import { Product } from '../../../api/models/product.model';

test('Get product details without using chaining', async ({ request }) => {
  const api = new APIClient(request);

  const data = readData();
  const productId = data.productId;

  console.log('Stored Data:', data);
  console.log('Product ID:', productId);

  const response = await api.get(
    PRODUCT_ENDPOINTS.BY_ID(productId),
    { auth: false }
  );

  // ✅ Map response to model
  const body: Product = await response.json();

  console.log('Response Body:', body);
  console.log('Product Title:', body.title);

  expect(response.status()).toBe(STATUS_CODES.OK);

  // ✅ Strong assertions using model
  expect(body.id).toBe(productId);
  expect(body.title).toBeTruthy();
});