// src/main/playwright-script.js
const { chromium } = require("playwright");

async function navigateToUrl(url) {
  const browser = await chromium.launch({
    headless: false,
    args: [
      '--kiosk',
       '--window-position=0,0',
       '--start-maximized'
      
    ],
  });

  const context = await browser.newContext({
    viewport: { width: 1500, height: 1000 }, // Match screen size
  });

  const page = await context.newPage();
  await page.goto(url);
}

module.exports = { navigateToUrl };
