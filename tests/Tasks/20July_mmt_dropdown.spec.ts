import { test, expect } from "@playwright/test";

test("Make My Trip dynamic dropdown test", async ({ page }) => {
    await page.goto("https://www.makemytrip.com/");
    await page.waitForTimeout(2000);
    await page.locator('.commonModal__close').click();
    await expect(page).toHaveTitle("MakeMyTrip - #1 Travel Website 50% OFF on Hotels, Flights & Holiday");
    await page.locator("[data-cy='oneWayTrip']").check();

    await page.locator("#fromCity").click();
    await page.getByPlaceholder('From').fill("del");
    await page.getByText("New Delhi, India", { exact: true }).click();

    await page.locator("#toCity").click();
    await page.getByPlaceholder('To').fill("del");
    await page.getByText("Bengaluru, India", { exact: true }).click();

    await page.pause();
});