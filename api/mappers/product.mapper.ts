import { readExcel } from '../util/datamanager';
import { Product } from '../models/product.model';

export class ProductMapper {

    static getProducts(): Product[] {
        const data: any[] = readExcel();

        return data.map(row => ({
            id: Number(row.productId),
            title: row.title || '',
            description: '',
            price: Number(row.price || 0),
            brand: '',
            category: row.category || ''
        }));
    }
}