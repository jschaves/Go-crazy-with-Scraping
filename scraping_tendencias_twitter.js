const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
var tendencias = [];
var tendencia;
(async () => {
	try {
		const Browser = await puppeteer.launch({
			args: ['--no-sandbox', '--disable-setuid-sandbox', '--incognito']
		});
		const context = await Browser.createIncognitoBrowserContext();
		const page=await Browser.newPage();
		await page.setDefaultNavigationTimeout(0);
		await page.goto('https://twitter.com/explore/tabs/trending', {waitUntil: 'domcontentloaded'});
		await page.waitForTimeout(5000);	
		await page.screenshot({ path: "example.png" });
		tendencia = await page.$$eval('div > span', elements => elements[24].innerText);
		tendencias.push(tendencia);
		tendencia = await page.$$eval('div > span', elements => elements[29].innerText);
		tendencias.push(tendencia);
		tendencia = await page.$$eval('div > span', elements => elements[34].innerText);
		tendencias.push(tendencia);
		console.log(tendencias);
		await Browser.close();
	} catch(e) {
		console.log('main program error:' + e);
	}
})();