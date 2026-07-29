import { test, expect } from "@playwright/test";

test("Find macmini price on Flipkart", async ({ page }) => {
    await page.goto("https://www.flipkart.com/search?q=macmini");

    // Close login popup if it appears
    const closeBtn = page.locator("button:has(svg) path").first();
    if (await closeBtn.isVisible({ timeout: 3000 }).catch(() => false)) {
        await closeBtn.click();
        await page.waitForTimeout(1000);
    }

    await page.waitForSelector("a[title*='Apple']", { timeout: 10000 });

    // Get all product cards that contain an Apple title
    const productCards = page.locator("div:has(> a[title*='Apple'])");
    const cardCount = await productCards.count();
    console.log(`Found ${cardCount} Apple macmini results`);

    const allPrices: number[] = [];
    for (let i = 0; i < cardCount; i++) {
        const card = productCards.nth(i);
        const priceText = await card.locator("div:has-text('₹')").first().innerText();
        const cleanPrice = parseInt(priceText.replace(/\D/g, ""));
        allPrices.push(cleanPrice);
    }

    console.log("All prices:", allPrices);
    expect(allPrices.length).toBeGreaterThan(0);
    console.log("Lowest price:", Math.min(...allPrices));
});
