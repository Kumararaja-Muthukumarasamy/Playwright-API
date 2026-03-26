import { test, expect } from '@playwright/test';
import { APIClient } from '../../../api/client/apiclient';
import { ProductService } from '../../../api/services/product.service';
import { readData } from '../../../api/util/datamanager';

test('Get product details without using chaining', async ({ request }) => {

  const api = new APIClient(request);
  const productService = new ProductService(api);

  const data = readData();
  const productId = data.productId;

  if (!productId) {
    throw new Error('Product ID is missing');
  }

  const product = await productService.getProductById(productId);

  console.log('Product:', product);

  expect(product.id).toBe(productId);
  expect(product.title).toBeTruthy();
});