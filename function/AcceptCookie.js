async function AcceptCookie(page){

    await page.waitForTimeout(1000); //รอ 3 วิให้เว็บโหลด กดยอมรับ cookie
    await page.waitForSelector('button.amgdprcookie-button.-allow.-save[title="ยอมรับ"][aria-label="ยอมรับ"]');
    await page.click('button.amgdprcookie-button.-allow.-save[title="ยอมรับ"][aria-label="ยอมรับ"]');
    console.log("1.Successfully accepted cookie.");
} 
module.exports = AcceptCookie;