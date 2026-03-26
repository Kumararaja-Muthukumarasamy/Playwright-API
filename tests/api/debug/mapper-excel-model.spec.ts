import { test } from '@playwright/test';
import { ProductMapper } from '../../../api/mappers/product.mapper';

test('Debug - Mapper Test', async () => {

    const products = ProductMapper.getProducts();

    console.log('Mapped Products:', products);
});