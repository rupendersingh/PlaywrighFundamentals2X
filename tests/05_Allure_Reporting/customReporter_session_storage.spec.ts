import { test, expect } from "@playwright/test";

test.use({
    storageState: "./user-session.json"
});

test("saved session test - No login", async ({ page }) => {
  await test.step("Navigate to dashboard", async () => {
    await page.goto("https://app.wingify.com/#/dashboard?accountId=1227004");
  });

  await test.step("Verify dashboard URL", async () => {
    await expect(page).toHaveURL(/dashboard/);
  });

  await test.step("Log success", async () => {
    console.log("Dashboard loaded, no login required");
  });

  await test.step("Wait for 3 seconds", async () => {
    await page.waitForTimeout(3000);
  });
});