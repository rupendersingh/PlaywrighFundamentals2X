import { test, expect } from "@playwright/test";

test.use({
    storageState: "./user-session.json"
});

test("saved session test - No login", async ({ page }) => {
    await page.goto("https://app.wingify.com/#/dashboard?accountId=1227004");
    await expect(page).toHaveURL(/dashboard/);
    console.log("Dashboard loaded, no login required");
    await page.waitForTimeout(3000);
});