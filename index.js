 const puppeteer = require('puppeteer');

 const urlList = ['https://undertian.com/recept/smakrik-kikartsgryta-pa-grillad-paprika-och-solroskarnor/',
              'https://undertian.com/recept/pasta-med-ugnsgratinerad-fetaost-tomat-och-vita-bonor/',
              'https://undertian.com/recept/burgare-med-vita-bonor-och-tomat/',
              'https://undertian.com/recept/havrerisotto-med-pumpa-och-salvia/'
              ];

    const url = 'https://undertian.com/recept/havrerisotto-med-pumpa-och-salvia/';

 async function scraper(url){
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitForSelector('.ingredients-group ul li')
    const data = await page.evaluate(() =>{
        const listItems = document.querySelectorAll('.ingredients-group ul li');
        const data = {};
        for(let i = 0; i < listItems.length; i++){
            let [number, unit, ...description] = listItems[i].innerText.split(' ');
            description = description.join(' ');
            if(description === ''){
                data.misc = [];
                data.misc.push(number,unit);
                continue;
            }
            data[description] = {number, unit};  
        }
        return data;
    })

    console.log(data)
    await browser.close();
 }

 
scraper(url)