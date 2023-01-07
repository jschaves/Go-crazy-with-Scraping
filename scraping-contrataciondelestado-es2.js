const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
	try {
		var suma = 0;
		const Browser = await puppeteer.launch({
			args: ['--no-sandbox', '--disable-setuid-sandbox'] 
		});
		const page=await Browser.newPage();
		await page.goto('https://contrataciondelestado.es/wps/portal/licitaciones', {waitUntil: 'domcontentloaded'});
		console.log(page.url());
		await Promise.all([
			page.click('img[src="/wps/PA_PortletsPlace/imagenes/iconoFormularioBusqueda.png"]'),
			page.waitForNavigation({ waitUntil: 'networkidle2' }),
		]);
		console.log(page.url());
		await Promise.all([
			page.evaluate(() => document.querySelectorAll('input')[3].value = ''),
			page.evaluate(() => document.querySelectorAll('input')[4].value = ''),
			page.evaluate(() => document.querySelectorAll('input')[5].value = ''),
			page.evaluate(() => document.querySelectorAll('input')[6].value = ''),
			page.evaluate(() => document.querySelectorAll('input')[7].value = '01-01-2020'),
			page.evaluate(() => document.querySelectorAll('input')[8].value = '31-01-2020'),
			page.click('input[value="Buscar"]'),
			page.waitForNavigation({ waitUntil: 'networkidle2' }),
		]);
		console.log(page.url());
		const result = await page.evaluate(() => {
			const rows = document.querySelectorAll('#myTablaBusquedaCustom tr');
			return Array.from(rows, row => {
				const columns = row.querySelectorAll('td');
				return Array.from(columns, column => column.innerText);
			});
		});
		console.log(result);
		fs.writeFileSync(suma + '.json', JSON.stringify(result));
		suma++;
		const totalpages = await page.evaluate(() => {
			return document.querySelectorAll('span')[36].innerHTML;
		});
		for(a = 0; a <= totalpages; a++) {
			await Promise.all([
				page.click('input[value="Siguiente"]'),
				page.waitForNavigation({ waitUntil: 'networkidle2' })
			]);
			console.log(page.url());
			var result_ = await page.evaluate(() => {
				var rows = document.querySelectorAll('#myTablaBusquedaCustom tr');
				return Array.from(rows, row => {
					var columns = row.querySelectorAll('td');
					return Array.from(columns, column => column.innerText);
				});
			});
			console.log(result_);
			fs.writeFileSync(suma + '.json', JSON.stringify(result_));
			suma++;			
		}
		await Browser.close();
	} catch(e) {
		console.log('main program error:' + e);
	}
})();