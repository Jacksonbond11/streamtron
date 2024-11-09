// src/main/playwright-script.js
const { chromium } = require("playwright");
require('dotenv').config();


async function navigateToUrl(url) {
  const browser = await chromium.launch({
    headless: false,
    args: [
      '--kiosk',
       '--window-position=0,0',
       '--start-maximized',
       '--disable-blink-features=AutomationControlled'
    ],
  });

  const context = await browser.newContext({
    viewport: { width: 1500, height: 1000 }, // Match screen size
  });

  const page = await context.newPage();
  
  

  await page.goto(url);

  await page.fill('input[name="userLoginId"]', process.env.NETFLIX_EMAIL)
  await page.fill('input[name="password"]', process.env.NETFLIX_PASSWORD)
  await page.waitForSelector('input[name="password"]', { state: 'attached' });
  await page.waitForTimeout(500); // Optional delay to ensure the field is filled
  
  await page.click('button[type="submit"]')

  
}

module.exports = { navigateToUrl };
