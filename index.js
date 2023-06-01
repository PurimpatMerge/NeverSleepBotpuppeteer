const puppeteer = require('puppeteer');
const fillInputFields = require('./function/fillinput');

(async () => {
  const browser = await puppeteer.launch({
    headless: false, // แสดง browser window
  });

  const page = await browser.newPage(); // เปิด tab ใหม่

  await page.goto('https://www.425degree.com/'); // เปิดเว็บนี้

  await page.waitForTimeout(3000); //รอ 3 วิให้เว็บโหลด กดยอมรับ cookie
  await page.waitForSelector('button.amgdprcookie-button.-allow.-save[title="ยอมรับ"][aria-label="ยอมรับ"]');
  await page.click('button.amgdprcookie-button.-allow.-save[title="ยอมรับ"][aria-label="ยอมรับ"]');
  console.log("1.Successfully accepted cookie.");

  // เลือนหน้าจอหา item นั้น โดยการเลื่อนลงหา 
  await page.evaluate(() => {
    const scrollInterval = setInterval(() => {
      window.scrollBy(0, 700); // ความเร็วในการเลื่อนลง
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        clearInterval(scrollInterval);
      }
    }, 1000); 
  });

  // ทำการค้นหา ไปด้วย
  await page.waitForSelector('a[title="Case-Mate Tough Plus Clear with MagSafe เคส iPhone 14 Pro Max"]');
  await page.click('a[title="Case-Mate Tough Plus Clear with MagSafe เคส iPhone 14 Pro Max"]');
  console.log("2.Successfully found item.");

  await page.waitForTimeout(3000); //รอ 3 วิให้เว็บโหลด
  await page.waitForSelector('button[title="Increase"][type="button"][data-role="change_cart_qty"][data-qty="1"]');
  await page.click('button[title="Increase"][type="button"][data-role="change_cart_qty"][data-qty="1"]');
  console.log("3.Successfully add item in cart.");

  await page.waitForSelector('button[type="submit"][data-action="buynow"][title="สั่งซื้อสินค้า"]');
  await page.click('button[type="submit"][data-action="buynow"][title="สั่งซื้อสินค้า"]');
  console.log("4.Successfully going to payment method.");


  await page.waitForTimeout(3000); 
  // แรก function เติม input
  await fillInputFields(page);
  

await page.waitForSelector('input#cashondelivery');
await page.focus('input#cashondelivery');
await page.keyboard.press('Space');
  
console.log("5.Successfully selected payment method.");
  
})();
