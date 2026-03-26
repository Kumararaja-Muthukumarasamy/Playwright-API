import { getToken } from "../auth/tokenmanager";
import { HEADERS } from '../constants/headers';


export class APIClient {
    constructor(private request: any) { }

    async get(path: string, options?: { auth?: boolean }) {

        const headers: Record<string, string> = {};

        // ✅ only add token if auth is NOT false
        if (options?.auth !== false) {
            const token = await getToken(this.request);
         headers[HEADERS.AUTHORIZATION] = `Bearer ${token}`;
        }

        return await this.request.get(path, { headers });
    }

    async post(path: string, data: any) {
        const token = await getToken(this.request);
        return await this.request.post(path, {
            data,
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    }
}