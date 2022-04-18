
const puppeteer = require('puppeteer');
const url = 'https://undertian.com/recept/smakrik-kikartsgryta-pa-grillad-paprika-och-solroskarnor/';

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const ingredients = await page.evaluate(() => {
        return document.querySelector('.ingredients-group').innerText.split('\n');
    });
    console.log(ingredients);
    await browser.close();
})();
