# Go-crazy-with-Scraping
Go crazy with Scraping
# scraping-contrataciondelestado-es.js
Ejemplo de scrapin de las Contrataciones del Estado Español

Node módulos Puppeteer + fs + path

Seleccionar estado y fechas a scrapear<br>
page.evaluate(() => document.querySelectorAll(".ancho310 > select")[2].value = 'RES'),<br>
page.evaluate(() => document.querySelectorAll(".ancho400 > input")[2].value = '01-01-2019'),<br>
page.evaluate(() => document.querySelectorAll(".ancho400 > input")[3].value = '31-03-2019'),<br>
Resultado archivos CSV con el nombre de la empresa formateado


