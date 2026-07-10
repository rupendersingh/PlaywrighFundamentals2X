import { test, expect } from '@playwright/test';

test("Browser context1 ttcart", async ({ browser }) => {
    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto("https://app.thetestingacademy.com/playwright/ttacart/");
    await expect(page).toHaveTitle("TTACart - Login");
});

test("Browser context2 ttbank", async ({ browser }) => {
    let context = await browser.newContext();
    let page = await context.newPage();
    await page.goto("https://tta-bank-digital-973242068062.us-west1.run.app/");
    await expect(page).toHaveTitle("TTA Bank - Digital Banking");
});