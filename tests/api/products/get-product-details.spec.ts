import { test,expect} from '@playwright/test';
import { APIClient } from '../../../api/client/apiclient';
import { readData } from '../../../api/util/datamanager';
import { PRODUCT_ENDPOINTS } from '../../../api/auth/endpoints/productendpoints';
import { STATUS_CODES } from '../../../api/constants/statuscodes';

test('Get product details without using chaining', async({request})=>{
   const api = new APIClient(request);
   
const data = readData();
const productId = data.productId;

console.log('Stored Data:', data);
console.log('Product ID:', productId);

const response = await api.get(
  PRODUCT_ENDPOINTS.BY_ID(productId),
  { auth: false }
);

console.log(await response.json());

 expect(response.status()).toBe(STATUS_CODES.OK);

})