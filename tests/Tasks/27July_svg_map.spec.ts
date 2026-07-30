import { test, expect } from "@playwright/test";

test("Find macmini price on Flipkart", async ({ page }) => {
    await page.goto("https://simplemaps.com/svg/country/in#admin1");
    const state = "Sikkim";
    const mapdata = {
        "INAN": "Andaman and Nicobar",
        "INAP": "Andhra Pradesh",
        "INAR": "Arunachal Pradesh",
        "INAS": "Assam",
        "INBR": "Bihar",
        "INCH": "Chandigarh",
        "INCT": "Chhattisgarh",
        "INDH": "Dādra and Nagar Haveli and Damān and Diu",
        "INDL": "Delhi",
        "INGA": "Goa",
        "INGJ": "Gujarat",
        "INHP": "Himachal Pradesh",
        "INHR": "Haryana",
        "INJH": "Jharkhand",
        "INJK": "Jammu and Kashmir",
        "INKA": "Karnataka",
        "INKL": "Kerala",
        "INLA": "Ladakh",
        "INLD": "Lakshadweep",
        "INMH": "Maharashtra",
        "INML": "Meghalaya",
        "INMN": "Manipur",
        "INMP": "Madhya Pradesh",
        "INMZ": "Mizoram",
        "INNL": "Nagaland",
        "INOR": "Orissa",
        "INPB": "Punjab",
        "INPY": "Puducherry",
        "INRJ": "Rajasthan",
        "INSK": "Sikkim",
        "INTG": "Telangana",
        "INTN": "Tamil Nadu",
        "INTR": "Tripura",
        "INUP": "Uttar Pradesh",
        "INUT": "Uttaranchal",
        "INWB": "West Bengal"
    }

    const states = await page.locator("//div[@id='admin1_map_inner']//*[name()='svg']//*[name()='path' and contains(@class,'sm_state')]").all();
    for (const area of states) {
        const classState = await area.getAttribute("class");
        console.log(classState);
        if (classState?.includes("INSK")) {
            area.click();
        }
    }
});
