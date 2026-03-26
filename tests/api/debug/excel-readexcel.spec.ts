import { test } from '@playwright/test';
import { readExcel } from '../../../api/util/datamanager';

test('Debug - Read Excel', async () => {

    const data = readExcel();  // uses default 'products'

    console.log('Excel Data:', data);
});