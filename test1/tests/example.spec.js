// @ts-check
const { test, expect } = require("@playwright/test");

test("has title", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  //print in browser console [run a JavaScript function in the context of the web page and bring results back to the Playwright environment]
  await page.evaluate(() => console.log("hello"));
  //checking the response
  await Promise.all([
    page.waitForResponse((res) => res.status() == 200),
    await page.getByRole("link", { name: "Get started" }).click(),
  ]);

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" })
  ).toBeVisible();
});
