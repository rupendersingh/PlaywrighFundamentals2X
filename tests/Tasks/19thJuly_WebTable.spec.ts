import { test, expect } from "@playwright/test";
test("Yoshi country test", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/tables/webtable");
    await expect(page).toHaveTitle("Companies Table — The Testing Academy");

    const rows = await page.locator("//table[@id='companies-table']/tbody/tr").count();
    const cols = await page.locator("//table[@id='companies-table']/tbody/tr[2]/td").count();

    const firstPart = "//table[@id='companies-table']/tbody/tr[";
    const secondPart = "]/td[";
    const thirdPart = "]";
    for (let i = 2; i <= rows; i++) {
        for (let j = 1; j <= cols; j++) {
            const dynamicpath = `${firstPart}${i}${secondPart}${j}${thirdPart}`;
            const data = await page.locator(dynamicpath).innerText();

            if (data.includes("Yoshi")) {
                const country = await page.locator(`${dynamicpath}/following-sibling::td`).innerText();
                console.log("Country for contact Yoshi is " + country);
                break;
            }

        }
    }

});