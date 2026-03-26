import {test, expect} from '@playwright/test';
import { APIClient } from '../../../api/client/apiclient'
import { PRODUCT_ENDPOINTS } from '../../../api/auth/endpoints/productendpoints';
import { STATUS_CODES } from '../../../api/constants/statuscodes';


test('GET - Single product details', async({request})=>{

    const api = new APIClient(request);
  // 🔹 Step 1: Get all products
  const allRes = await api.get(PRODUCT_ENDPOINTS.ALL, { auth: false });
  const allBody = await allRes.json();

  expect(allRes.status()).toBe(200);

  // 🔹 Step 2: Extract one product id
  const productId = allBody.products[0].id;

  console.log('Selected Product ID:', productId);

  // 🔹 Step 3: Get product by id
  const productRes = await api.get(
    PRODUCT_ENDPOINTS.BY_ID(productId),
    { auth: false }
  );

  const product = await productRes.json();

  console.log('Product:', product);

  // 🔹 Step 4: Assertions
  expect(productRes.status()).toBe(200);
  expect(product.id).toBe(productId);
  expect(product.title).toBeTruthy();

});
