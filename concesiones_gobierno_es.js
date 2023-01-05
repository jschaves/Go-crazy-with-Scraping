const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const rutaDelArchivo = path.join('datos.txt');

(async () => {
	try {
		const Browser = await puppeteer.launch({
			args: ['--no-sandbox', '--disable-setuid-sandbox'] 
		});
		const page=await Browser.newPage();
		await page.setDefaultNavigationTimeout(0);
		
		for(var a = 554098; a < 1000000; a++) {
			await page.goto('https://www.pap.hacienda.gob.es/bdnstrans/GE/es/concesiones/convocatoria/' + a, {waitUntil: 'domcontentloaded'});
			await page.waitForTimeout(100);
			var result_ = await page.evaluate(() => {
				var rows = document.querySelectorAll('table tr.ui-widget-content');
				return Array.from(rows, row => {
					var columns = row.querySelectorAll('td');
					return Array.from(columns, column => '"' + column.innerText.replaceAll('"', ' ').replaceAll("'", ' ') + '"') + '\n';
				});
			});
			let nl = result_.join('');
			console.log(nl);
			let nueva_linea = nl;
			if(nueva_linea) {
				fs.appendFile(rutaDelArchivo, nueva_linea, (err) => {
					console.log(a);
				});
			}
			await page.waitForTimeout(150);
		}
		await Browser.close();
	} catch(e) {
		console.log('main program error:' + e);
	}
})();