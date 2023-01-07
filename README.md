# Go-crazy-with-Scraping
Go crazy with Scraping

Para los que quieren saber más de nuestras administraciones.

instalar node npm:

<a href="https://nodejs.org/es/download/" target="_blank">NODE</a>

instalat puppeteer:

<b>` > npm i puppeteer `</b>

# scraping-contrataciondelestado-es2.js

<b>` > node scraping-contrataciondelestado-es2.js `</b>

<b>URL: https://contrataciondelestado.es/wps/portal/licitaciones </b>

Ejemplo de scrapin de las Contrataciones del Estado Español

Node módulos Puppeteer + fs + path

Seleccionar estado y fechas a scrapear<br>
			page.evaluate(() => document.querySelectorAll('input')[3].value = ''),
			page.evaluate(() => document.querySelectorAll('input')[4].value = ''),
			page.evaluate(() => document.querySelectorAll('input')[5].value = ''),
			page.evaluate(() => document.querySelectorAll('input')[6].value = ''),
			page.evaluate(() => document.querySelectorAll('input')[7].value = '01-01-2020'),
			page.evaluate(() => document.querySelectorAll('input')[8].value = '31-01-2020'),
Resultado archivos json

# scraping-contrataciondelestado-es.js

<b>` > node scraping-contrataciondelestado-es.js `</b>

<b>URL: https://contrataciondelestado.es/wps/portal/licitaciones </b>

Ejemplo de scrapin de las Contrataciones del Estado Español

Node módulos Puppeteer + fs + path

Seleccionar estado y fechas a scrapear<br>
page.evaluate(() => document.querySelectorAll(".ancho310 > select")[2].value = 'RES'),<br>
page.evaluate(() => document.querySelectorAll(".ancho400 > input")[2].value = '01-01-2019'),<br>
page.evaluate(() => document.querySelectorAll(".ancho400 > input")[3].value = '31-03-2019'),<br>
Resultado archivos CSV con el nombre de la empresa formateado

# concesiones_gobierno_es.js 

<b>` > node concesiones_gobierno_es.js `</b>

<b>URL: https://www.pap.hacienda.gob.es/bdnstrans/GE/es/concesiones/convocatoria/xxxx </b>

Ejemplo de scrapin de las concesiones del Estado Español

Lista en CSV todas las concesiones de España

Node módulos Puppeteer + fs + path

Resultado archivos TXT datos.txt formato CSV



