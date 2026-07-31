import { chromium } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config();

async function saveQaSession() {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://qajobfit.com/auth");
    await page.waitForTimeout(1500);
    await page.getByPlaceholder("your.email@example.com").fill(process.env.EMAIL!);
    await page.locator("//input[@name='password']").fill(process.env.PASSWORD1!);
    await page.getByRole("button", { name: "Sign in" }).click();

    await page.waitForTimeout(1500);

    await context.storageState({ path: "./userQA_session.json" });
    //await page.pause()
    await browser.close();
};

saveQaSession();