import { test, expect } from "@playwright/test";

test("Spicejet dynamic dropdown test", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/widgets/hover-menu");
    //await expect(page).toHaveTitle("Hover-only menus");
    await page.getByTestId("nav-add-ons").hover();
    await page.getByTestId("nav-add-ons").click();

    await page.getByTestId("test-id-Wifi").click();
    const menuitems: String[] = await page.locator('[data-testid="nav-add-ons"] .submenu .submenu-item').allInnerTexts();

    for (let item of menuitems) {
        console.log(item.substring(2));
    }
});