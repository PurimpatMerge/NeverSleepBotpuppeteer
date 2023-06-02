const puppeteer = require("puppeteer");
const fillCredential = require("./function/fillCredential");
const AcceptCookie = require("./function/AcceptCookie");
const findIphoneCase = require("./function/findSpecificItem");
require('dotenv/config');
(async () => {
  console.time("Total Time"); // Start measuring time
  
  const browser = await puppeteer.launch({
    headless: false, // Show browser window
  });

  const page = await browser.newPage(); // Open a new tab

  await page.goto(process.env.WEB); // Open the website

  await AcceptCookie(page); // acceptCookie Function

  // Directly to iphone case part
  await page.evaluate(() => {
    const targetElement = document.querySelector('h1 span[style="font-size: 44px; color: #2e2e2e;"]');
  
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
  
  await findIphoneCase(page); // Find the iPhone case

 
  
  // Fill input credentials
  await fillCredential(page);

  await page.waitForSelector("input#cashondelivery");
  await page.focus("input#cashondelivery");
  await page.keyboard.press("Space");

  console.log("5. Successfully selected payment method.");
  console.timeEnd("Total Time"); // End measuring time and display elapsed time

   // await browser.close();
})();
