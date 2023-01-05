# Go-crazy-with-Scraping
Go crazy with Scraping
# scraping-contrataciondelestado-es.js
Usa Node con Puppeteer + fs + path

Seleccionar estado y fechas a scrapear
			page.evaluate(() => document.querySelectorAll(".ancho310 > select")[2].value = 'RES'),
			page.evaluate(() => document.querySelectorAll(".ancho400 > input")[2].value = '01-01-2019'),
			page.evaluate(() => document.querySelectorAll(".ancho400 > input")[3].value = '31-03-2019'),
Resultado archivos CSV con el nombre de la empresa formateado
