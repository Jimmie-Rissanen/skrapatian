
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
const url = 'https://undertian.com/recept/smakrik-kikartsgryta-pa-grillad-paprika-och-solroskarnor/';

let scrapedIngredients = [];
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    try{
        await page.goto(url, {timeout: 180000});

        let bodyHTML = await page.evaluate(() => document.body.innerHTML);

        let $ = cheerio.load(bodyHTML);

        let ingredients = $('.ingredients')

        ingredients.each((index, element)=> {
            let title = $(element).find('span').text();
            scrapedIngredients.push({ 'title': title})
        })
    }
    }
)
