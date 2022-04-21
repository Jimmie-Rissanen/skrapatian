const puppeteer = require('puppeteer');
const fs = require('fs');

const url = 'https://undertian.com/recept/veganska-kottbullar-med-pasta-tomatsas/';

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

    fs.writeFile(`./shoppingList/data${Math.floor(Math.random()*100)}.json`, JSON.stringify(data), (err) => {
        if(err){
            console.log(err);
        }
        console.log('All good')
    })
    await browser.close();
 }

 
scraper(url)