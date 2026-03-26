import { config } from '../../config/env'
import { AUTH_ENDPOINTS } from './endpoints/authendpoints';
import { AUTH_DATA } from '../testdata/authdata';

let token: string = '';
let expiryTime: number = 0;
const TOKEN_EXPIRY_MINUTES = config.tokenExpiry;

async function generateToken(request: any): Promise<string> {
    console.log('Generating new token...');

    const response = await request.post(AUTH_ENDPOINTS.LOGIN, {
        data: AUTH_DATA.login
    });

    const body = await response.json();
    token = body.accessToken;
   
    if (body.expiresIn) {
        expiryTime = Date.now() + body.expiresIn * 1000;
    } else {
        expiryTime = Date.now() + TOKEN_EXPIRY_MINUTES * 60 * 1000;
    }

    return token;
}

export async function getToken(request: any): Promise<string> {
    if (!token || Date.now() > expiryTime) {
        return await generateToken(request);
    }
    console.log('Using existing token');
    return token;
}