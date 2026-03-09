// @ts-che
import { defineConfig, devices } from '@playwright/test';

const isCI = !!process.env.CI;

export default defineConfig({
  testDir: './tests',
  snapshotDir: './__screenshots__',  // ✅ Baseline image storage
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 0 : 0, // Enable retries for flaky test behavior
  workers: isCI ? 5 : 5,

  timeout: 60 * 1000,
reporter: [
    ['html', {
      outputFolder: 'playwright-report',
      open: 'never'
    }],
    ['blob', { outputDir: 'blob-report' }], // Use blob reporter
    ['json', { outputFile: './playwright-report/report.json' }],
   /* ['@testdino/playwright', {
       token:'trx_production_dcc2575f2b5be74215bb9cca642641d21ed572ca7056fa6c23d27ce853c070c0',
       // token:'trx_development_33ce54f83ed9b2d937c78d180e2431a2ea83ed6e03a716219c7c6e90d853461a',
      //token:'trx_staging_f3a3397c359d61b6d35bebc319d9720ed349f8c0fd9dcdbc41717453aea976a9',
      //serverUrl: 'http://localhost:3000',
      //serverUrl: 'https://staging-api.testdino.com',
       serverUrl: 'https://api.testdino.com',
      debug: true,
      // uploadArtifacts: false,
      
    }], */
  ],

  use: {
    baseURL: 'https://storedemo.testdino.com/',
    headless: true,
  //   trace: 'on',
  //   screenshot: 'only-on-failure',
  //   video: 'retain-on-failure',
