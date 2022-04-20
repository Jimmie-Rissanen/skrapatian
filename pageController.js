const pageScraper = require('./pageScraper');
const fs = require('fs');
async function scrapeAll(browserInstance){
    let browser;
    try{
        browser = await browserInstance;
       
        let data = await pageScraper.scraper(browser);
        const ingredients = data[0].split('\n');
        const description = data [1].split('\n');
        const url = data[2]; 
        console.log(ingredients, description, url)
        await browser.close();
        fs.writeFile('data.json', JSON.stringify(ingredients, description), 'utf8', (err) => {
            if(err){
                return console.log(err)
            }
            console.log('Data scraped and written.');
        });
    } catch(err){
        console.log(`Browser error: ${err}`);
    }
}

module.exports = (browserInstance) => scrapeAll(browserInstance)