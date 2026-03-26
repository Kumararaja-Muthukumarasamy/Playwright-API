import { APIClient } from '../client/apiclient';
import { PRODUCT_ENDPOINTS } from '../auth/endpoints/productendpoints';
import { Product, ProductResponse } from '../models/product.model';

export class ProductService {
    constructor(private api: APIClient) {}

    async getAllProducts(): Promise<ProductResponse> {
        const response = await this.api.get(
            PRODUCT_ENDPOINTS.ALL,
            { auth: false }
        );

        return await response.json();
    }

    async getProductById(productId: number): Promise<Product> {
        const response = await this.api.get(
            PRODUCT_ENDPOINTS.BY_ID(productId),
            { auth: false }
        );

        return await response.json();
    }
}