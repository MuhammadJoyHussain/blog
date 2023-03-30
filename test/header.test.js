const puppeteer = require("puppeteer");

let browser, page;

beforeEach(async () => {
  browser = await puppeteer.launch({ headless: false });
  page = await browser.newPage();
  await page.goto("http://localhost:3000");
});

afterEach(async () => {
  await browser.close();
});

// test("The header has the correct text", async () => {
//   const text = await page.$eval("span.font-semibold", (el) => el.innerHTML);

//   expect(text).toEqual("Let's Blog");
// });

test("Clicking login to go to login page", async () => {
  await page.click(".auth a");

  const url = page.url();

  expect(url).toMatch("http://localhost:3000/login");
});
