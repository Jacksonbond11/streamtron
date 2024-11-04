// src/main/playwright-script.js
const { chromium } = require("playwright");

async function navigateToUrl(url) {
  const browser = await chromium.launch({
    headless: false,
    args: [
      '--kiosk',
       '--window-position=0,0'
      
    ],
  });

  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }, // Match screen size
  });

  const page = await context.newPage();
  await page.goto(url);
}

module.exports = { navigateToUrl };
