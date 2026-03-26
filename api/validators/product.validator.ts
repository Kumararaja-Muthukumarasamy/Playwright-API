import { expect } from '@playwright/test';
import { Product } from '../models/product.model';

export class ProductValidator {

    static validateProductDetails(product: Product, expectedId: number) {
        expect(product).toBeTruthy();

        expect(product.id).toBe(expectedId);
        expect(product.title).toBeTruthy();
        expect(product.price).toBeGreaterThan(0);
        expect(product.category).toBeTruthy();
    }

    static validateProductList(products: Product[]) {
        expect(products.length).toBeGreaterThan(0);

        for (const product of products) {
            expect(product.id).toBeTruthy();
            expect(product.title).toBeTruthy();
        }
    }
}