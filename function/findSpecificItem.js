async function findIphoneCase(page) {
    await page.waitForSelector('a[title="Case-Mate Tough Plus Clear with MagSafe เคส iPhone 14 Pro Max"]');
    await page.click('a[title="Case-Mate Tough Plus Clear with MagSafe เคส iPhone 14 Pro Max"]');
    console.log("2.Successfully found item.");
  
    await page.waitForTimeout(2000); //รอ 3 วิให้เว็บโหลด
    await page.waitForSelector('button[title="Increase"][type="button"][data-role="change_cart_qty"][data-qty="1"]');
    await page.click('button[title="Increase"][type="button"][data-role="change_cart_qty"][data-qty="1"]');
    console.log("3.Successfully add item in cart.");
  
    await page.waitForSelector('button[type="submit"][data-action="buynow"][title="สั่งซื้อสินค้า"]');
    await page.click('button[type="submit"][data-action="buynow"][title="สั่งซื้อสินค้า"]');
    console.log("4.Successfully going to payment method.");
}
    module.exports = findIphoneCase;