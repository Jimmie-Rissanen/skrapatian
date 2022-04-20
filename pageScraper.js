const scraperObject = {
    url:'https://undertian.com/recept/smakrik-kikartsgryta-pa-grillad-paprika-och-solroskarnor/',
    async scraper(browser){
        let page = await browser.newPage();
        console.log(`Opening ${this.url}`);
        await page.goto(this.url);
    }
}

module.exports = scraperObject;