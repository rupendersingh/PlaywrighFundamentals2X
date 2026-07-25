import { test, expect } from "@playwright/test";
test("Find employee email id", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");
    await expect(page).toHaveTitle("Companies Table — The Testing Academy");
    const nextPage = await page.locator("#next-page");
    await page.waitForTimeout(1500);

    const name = "Mia Hoffmann";
    while (nextPage.isEnabled()) {
        const rows = await page.locator("//table[@id='employees-table']/tbody/tr").count();
        const cols = await page.locator("//table[@id='employees-table']/tbody/tr[2]/td").count();
        const firstPart = "//table[@id='employees-table']/tbody/tr[";
        const secondPart = "]/td[";
        const thirdPart = "]";

        for (let i = 2; i <= rows; i++) {
            for (let j = 1; j <= cols; j++) {
                const dynamicpath = `${firstPart}${i}${secondPart}${j}${thirdPart}`;
                const data = await page.locator(dynamicpath).innerText();

                if (data.includes(name)) {
                    const email = await page.locator(`${dynamicpath}/following-sibling::td`).innerText();
                    console.log("Email id for Hoffman is " + email);
                    break;
                }
                else if (await nextPage.isDisabled()) {
                    console.log(`Name not found ${name}`);
                }
                else {
                    await nextPage.click();
                }

            }
        }
    }
    await page.pause();
});