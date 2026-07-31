import { test, expect } from "@playwright/test";
import path from 'path';

test.describe("File Upload Handling", () => {
    test.use({
        storageState: "./user1-session.json"
    });

    test.beforeEach(async ({ page }) => {
        await page.goto("https://app.thetestingacademy.com/student/settings");
        await page.waitForTimeout(2000);
    });

    test("Testing profile file upload", async ({ page }) => {
        const filepath = path.join(__dirname, 'pic_rupender.jpeg');
        console.log("File Path", filepath);

        await page.getByRole('button', { name: 'Dismiss' }).click();

        await expect(page.locator("//h1")).toHaveText('Profile & Settings');
        await page.waitForTimeout(1500);
        await page.setInputFiles("label[for^='avatar']", filepath);
        //await page.click("label[for^='avatar']");
        await page.pause();

    });

});
