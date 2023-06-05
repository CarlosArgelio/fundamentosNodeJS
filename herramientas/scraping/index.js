const puppeteer = require('puppeteer');

(async () => {
    //Codigo
    console.log('Lanzamos navegador');
    const browser = await puppeteer.launch( {headles: false });

    const page = await browser.newPage();
    await page.goto('https://es.wikipedia.org/wiki/NOde.js')
    console.log('Cerramos navegador...');
    // browser.close();
    console.log('Navegador cerrado');
})();