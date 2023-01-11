const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
(async () => {
	try {
		const Browser = await puppeteer.launch({
			args: ['--no-sandbox', '--disable-setuid-sandbox', '--incognito']
		});
		const context = await Browser.createIncognitoBrowserContext();
		const page=await Browser.newPage();
		await page.setDefaultNavigationTimeout(0);
		let search = 'Shakira';
		await page.goto('https://twitter.com/search?q=' + search + '&src=trend_click&vertical=trends', {waitUntil: 'domcontentloaded'});
		await page.waitForTimeout(5000);	
		await page.screenshot({ path: "example.png" });
		var result_ = await page.evaluate(() => {
			var rows = document.querySelectorAll('article');
			return Array.from(rows, row => {
			let img_ = row.querySelectorAll('img');
    			let src_ = Array.from(img_, column => column.src);
			let text_ = row.querySelectorAll('div');
    			let text1 = Array.from(text_, column => column.innerText);
			let text__ = row.querySelectorAll('span');
    			let text2 = Array.from(text__, column => column.innerText);
			let link_ = row.querySelectorAll('a');
    			let link__ = Array.from(link_, column => column.href);
				let result = src_.concat(text1).concat(text2).concat(link__).filter(Boolean);
				Array.prototype.unicos = function () {
					return this.filter((valor, indice) => {
						return this.indexOf(valor) === indice;
					});
				}
				return result.unicos()
			});
		});
		console.log(result_);
		await Browser.close();
	} catch(e) {
		console.log('main program error:' + e);
	}
})();
