import { test, expect } from "@playwright/test";

test("Spicejet dynamic dropdown test", async ({ page }) => {
    await page.goto("https://www.spicejet.com/");
    await expect(page).toHaveTitle("SpiceJet - Flight Booking for Domestic and International, Cheap Air Tickets");
    await page.getByTestId("to-testID-origin").click();

    await page.locator("//div[@data-testid='to-testID-origin']/descendant::input").fill("del");

    await page.getByTestId("to-testID-destination").click();
    await page.locator("//div[@data-testid='to-testID-destination']/descendant::input").fill("ban");
    await page.getByText("Bengaluru", { exact: true }).click();
    //await page.pause();
});