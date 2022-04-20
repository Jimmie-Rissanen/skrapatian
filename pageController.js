const pageScraper = require('./pageScraper');
async function scrapeAll(browserInstance){
    let browser;
    try{
        brwoser = await browserInstance;
        await pageScraper.scraper(browser);
    } catch(err){
        console.log(`Browser error: ${err}`);
    }
}

module.exports = (browserInstance) => scrapeAll(browserInstance)