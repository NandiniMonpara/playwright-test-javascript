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
    ['@testdino/playwright', {
      token: process.env.TESTDINO_TOKEN,
      debug: true,
      serverUrl: 'https://api.testdino.com',
      
    }], 
  ],

  use: {
    baseURL: 'https://storedemo.testdino.com/',
    headless: true,
  //   trace: 'on',
  //   screenshot: 'only-on-failure',
  //   video: 'retain-on-failure',
