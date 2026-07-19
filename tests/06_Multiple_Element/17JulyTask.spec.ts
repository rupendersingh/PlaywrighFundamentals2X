import { test, expect } from '@playwright/test';

test("Automate student login", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter?email=addasda@adsd.com&password=dasdadasda&remember=yes#login-success");
    await page.locator('#email').fill("rupender@gmail.com");
    await page.locator('#password').fill("asdf1234");
    await page.waitForTimeout(1500);

    await page.locator('.login-btn').click;
    await expect(page).toHaveURL(/login-success/);
});