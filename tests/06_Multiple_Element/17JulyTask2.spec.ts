import { test, expect } from "@playwright/test"

test("Get terminated employee from webtable", async ({ page }) => {

    await page.goto("https://awesomeqa.com/hr/web/index.php/auth/login");
    await page.locator("//input[@placeholder='Username']").fill("admin");
    await page.locator("//input[@placeholder='Password']").fill("Awesomeqa@4321");
    await page.locator("//button[@type='submit']").click();

    const header = page.locator("//h6[text()='PIM']");
    await expect(header).toBeVisible();

    const rows = page.locator(".oxd-table-body .oxd-table-row");
    await page.waitForTimeout(1500);

    const rowcount = await rows.count();

    console.log(rowcount);

    for (let i = 1; i <= rowcount; i++) {
        const cellvalues = await rows.nth(i).locator(".oxd-table-cell").allInnerTexts();
        //console.log(cellvalues);
        if (cellvalues.includes("Terminated")) {
            console.log(`First Terminated employee found at row ${i + 1}`, cellvalues);
            await page.locator("//button['.oxd-icon-button oxd-table-cell-action-space']").nth(i).click();
            const alertbox = page.locator("//button[text()=' No, Cancel ']");
            await expect(alertbox).toBeVisible();
            break;
        }

    }
});