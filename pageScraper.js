const scraperObject = {
    url:'https://undertian.com/recept/smakrik-kikartsgryta-pa-grillad-paprika-och-solroskarnor/',
    async scraper(browser){
        let page = await browser.newPage();
        console.log(`Opening ${this.url}`);
        await page.goto(this.url);
        // Wait for dom to load
        await page.waitForSelector('.ingredients-group')
        let [ingredients, description, url] = await page.evaluate(() =>{
            const items = document.querySelectorAll('.ingredients-group');
            ingredients = items[0].innerText;
            description = items[1].innerText;
            url = window.location.href;
            return [ingredients, description, url];
        })
        return [ingredients, description, url];
    }    
}
module.exports = scraperObject;