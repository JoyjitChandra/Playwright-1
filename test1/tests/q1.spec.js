// @ts-check
const { test, expect } = require("@playwright/test");

test("check response", async ({ page }) => {
  await page.goto("https://kadence.in/");
  await Promise.all([
    page.waitForResponse(
      (res) =>
        res.status() == 200 &&
        res.url() ==
          "https://kadence.in/wp-admin/admin-ajax.php?action=woodmart_ajax_search&number=20&post_type=product&query=guitar"
    ),
    await page.fill('input[title="Search for products"]', "guitar"),
  ]);
});

test("print value in browser console", async ({ page }) => {
  await page.goto("https://kadence.in/");
  await page.evaluate(() => console.log("hello"));
});

test("check for conditional link login/register", async ({ page }) => {});
