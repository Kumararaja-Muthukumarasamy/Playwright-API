import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
import { config } from './config/env';

dotenv.config();

export default defineConfig({
  testDir: './tests',
 
  fullyParallel: true,
  
  forbidOnly: !!process.env.CI,
 
  retries: process.env.CI ? 2 : 0,
  
  workers: process.env.CI ? 2 : undefined,
  
  reporter: [
    ['list'],
    ['html', { outputFolder: 'playwright-report', open: 'never' }]
  ],
 
   use: {
    baseURL: config.baseUrl,
    trace: 'on-first-retry',
  },

   projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ]
});