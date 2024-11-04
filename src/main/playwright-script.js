
// src/main/playwright-script.js
const { chromium } = require('playwright');

async function navigateToUrl(url) {  
  const browser = await chromium.launch({headless: false});
  const page = await browser.newPage();
  await page.goto(url)
}

module.exports = { navigateToUrl };
