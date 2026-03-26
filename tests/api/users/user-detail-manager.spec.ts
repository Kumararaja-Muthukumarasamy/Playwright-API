import { test, expect} from '@playwright/test';
import { getToken } from '../../../api/auth/tokenmanager'

test('Get current user details using token manager', async({request})=>{
    const token = await getToken(request);
   const response = await request.get('https://dummyjson.com/auth/me', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  const body = await response.json();
  console.log('User: ', body);

  expect(response.status()).toBe(200);
  expect(body.username).toBeTruthy();
})  