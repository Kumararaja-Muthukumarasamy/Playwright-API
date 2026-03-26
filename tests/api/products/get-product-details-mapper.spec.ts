import { test } from '@playwright/test';
import { APIClient } from '../../../api/client/apiclient';
import { ProductService } from '../../../api/services/product.service';
import { ProductValidator } from '../../../api/validators/product.validator';
import { ProductMapper } from '../../../api/mappers/product.mapper';

const products = ProductMapper.getProducts();

products.forEach(productData => {

  test(`Validate product with ID: ${productData.id}`, async ({ request }) => {

    const api = new APIClient(request);
    const productService = new ProductService(api);

    const product = await productService.getProductById(productData.id);

    ProductValidator.validateProductDetails(product, productData.id);
  });

});