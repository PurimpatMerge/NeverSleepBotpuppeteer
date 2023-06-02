async function fillCredential(page) {
await page.waitForTimeout(3000);
await page.waitForSelector('input#customer-email');
await page.type('input#customer-email', 'mergeofficial@hotmail.com');

await page.waitForSelector('input[name="firstname"]');
await page.type('input[name="firstname"]', 'Purimpat');

await page.waitForSelector('input[name="lastname"]');
await page.type('input[name="lastname"]', 'Worakaicharuphak');

await page.waitForSelector('input[name="street[0]"]');
await page.type('input[name="street[0]"]', '74/1 หมู่ที่2');

await page.waitForSelector('input[name="street[0]"]');
await page.type('input[name="street[1]"]', 'ไม่มี');

await page.waitForSelector('input[name="street[0]"]');
await page.type('input[name="street[2]"]', 'กระทิงลาย');

await page.waitForSelector('input[name="street[0]"]');
await page.type('input[name="street[3]"]', 'หนองปลาไหล');

await page.waitForSelector('input[name="city"]');
await page.type('input[name="city"]', 'บางละมุง');

await page.waitForSelector('select[name="region_id"]');
await page.select('select[name="region_id"]', '493');

await page.waitForSelector('select[name="country_id"]');
await page.select('select[name="country_id"]', 'TH');

await page.waitForSelector('input[name="postcode"]');
await page.type('input[name="postcode"]', '20150');

await page.waitForSelector('input[name="telephone"]');
await page.type('input[name="telephone"]', '0825639991');

await page.waitForSelector('input[name="vat_id"]');
await page.type('input[name="vat_id"]', 'ไม่มี');

await page.waitForSelector('input[name="company"]');
await page.type('input[name="company"]', 'Never Sleep Co.,Ltd.');

console.log("5.Successfully write down input.");
}
module.exports = fillCredential;