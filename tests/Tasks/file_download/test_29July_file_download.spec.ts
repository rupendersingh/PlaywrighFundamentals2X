import { test, expect } from "@playwright/test";
import path from "path";

test.describe("Testing File Upload", () => {
    test.use({
        storageState: "./userQA_session.json"
    });
    test.beforeEach(async ({ page }) => {
        await page.goto("https://qajobfit.com/dashboard?tab=builder");
        await expect(page.locator("//h2[text()='Dashboard']")).toBeVisible();
    });

    test("File upload fee", async ({ page }) => {

        const [staticDownload] = await Promise.all([
            page.waitForEvent('download'),
            page.locator("//button[contains(text(),'PDF')]").click()
        ]);

        const filepath = path.join("out", staticDownload.suggestedFilename());
        await staticDownload.saveAs(filepath);

        await page.pause();
    })


});