import { test } from '@playwright/test';
import { APIClient } from '../../../api/client/apiclient';
import { ProductService } from '../../../api/services/product.service';
import { ProductValidator } from '../../../api/validators/product.validator';
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

  // ✅ Validation moved out of test
  ProductValidator.validateProductDetails(product, productId);
});