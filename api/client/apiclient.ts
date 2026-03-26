import { getToken } from "../auth/tokenmanager";
import { HEADERS } from '../constants/headers';
import * as allure from 'allure-js-commons';

export class APIClient {
    constructor(private request: any) { }

    async get(path: string, options?: { auth?: boolean }) {

        const headers: Record<string, string> = {};

        if (options?.auth !== false) {
            const token = await getToken(this.request);
            headers[HEADERS.AUTHORIZATION] = `Bearer ${token}`;
        }

        return await allure.step(`GET ${path}`, async () => {

            try {
                const response = await this.request.get(path, { headers });
                const body = await response.json();

                await allure.attachment(
                    'Request',
                    JSON.stringify({ method: 'GET', path, headers }, null, 2),
                    'application/json'
                );

                await allure.attachment(
                    'Response',
                    JSON.stringify(body, null, 2),
                    'application/json'
                );

                await allure.attachment(
                    'Status Code',
                    response.status().toString(),
                    'text/plain'
                );

                return response;

            } catch (error: any) {

                await allure.attachment(
                    'Error',
                    JSON.stringify(error.message || error, null, 2),
                    'text/plain'
                );

                throw error; // ❗ IMPORTANT
            }
        });
    }
}