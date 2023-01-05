var link1 = 'https://contrataciondelestado.es/wps/portal/licitaciones';
const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
(async () => {
	try {
		const Browser = await puppeteer.launch({
			args: ['--no-sandbox', '--disable-setuid-sandbox'] 
		});
		const page=await Browser.newPage();
		await page.setDefaultNavigationTimeout(0);
		await page.goto(link1, {waitUntil: 'domcontentloaded'});
		await page.waitForTimeout(300);		
		await Promise.all([
			page.click(".divLogo2 > a"),
			page.waitForNavigation({ waitUntil: 'networkidle2' }),
		]);
		await Promise.all([
			page.evaluate(() => document.querySelectorAll(".ancho310 > select")[2].value = 'RES'),
			page.evaluate(() => document.querySelectorAll(".ancho400 > input")[2].value = '01-01-2019'),
			page.evaluate(() => document.querySelectorAll(".ancho400 > input")[3].value = '31-03-2019'),
		]);
		await Promise.all([
			page.click('input[value="Buscar"]'),
			page.waitForNavigation({ waitUntil: 'networkidle2' }),
		]);
		var result = await page.evaluate(() => {
			const rows = document.querySelectorAll('tr[class*="rowClass"]');
			return Array.from(rows, row => {
				const columns = row.querySelectorAll('td');
				return Array.from(columns, column => '"' + column.innerText.replaceAll('"', ' ').replaceAll("'", ' ') + '"') + '\n';
			});
		});	
		const totalp = await page.evaluate(() => {
			return document.querySelectorAll('span[id*="form1:textfooterTotalTotalMAQ"]')[0].innerText;
		});
		console.log("PAGINA >>  1 DE >> " + totalp);
		var result3;
		if(result) {
			for(a = 0; a < result.length; a++) {
				getdata(1);
			}
		}
		for(b = 2; b <  totalp + 2; b++) {
			console.log("PAGINA >> " + b + " DE >> " + totalp);
			await Promise.all([
				page.click("input[title='Siguiente'"),
				page.waitForNavigation({ waitUntil: 'networkidle2' }),
			]);	
			var actualp = await page.evaluate(() => {
				return document.querySelectorAll('span[id*="form1:textfooterInfoNumPagMAQ"]')[0].innerText;
			});
			console.log("PAGINA ACTUAL >> "); 
			console.log(actualp);
			var result = await page.evaluate(() => {
				const rows = document.querySelectorAll('tr[class*="rowClass"]');
				return Array.from(rows, row => {
					const columns = row.querySelectorAll('td');
					return Array.from(columns, column => '"' + column.innerText.replaceAll('"', ' ').replaceAll("'", ' ') + '"') + '\n';
				});
			});	
			if(result) {
				for(a = 0; a < result.length; a++) {
					getdata(2);
				}
			}			
		}
		await Browser.close();
	} catch(e) {
		//console.log('main program error:' + e);
	}
	function getdata(id) {
		//console.log('line > ' + result[a]);
		let rutaDelArchivo = './csv/' + result[a].split('","')[4].replace(/[^a-zA-Z0-9]/g, "_") + ".csv";
		if(!fs.existsSync(rutaDelArchivo)) {
			console.log("no existe " + id);
			fs.openSync(rutaDelArchivo, 'a');
		} else {
			console.log("si existe " + id);
		}
		let contents = fs.readFileSync(rutaDelArchivo, 'utf-8');
		result3 = contents.includes(result[a]);
		console.log("result3 > " + result3);
		if(!result3) {
			fs.appendFile(rutaDelArchivo, result[a], (err) => {
				if(err) throw err;
				console.log('OPEN OK');
			});
		}		
	}
	
})();
