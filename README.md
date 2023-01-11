# Go-crazy-with-Scraping
Go crazy with Scraping, aprende a recopilar datos con NODE y puppeteer

instalar node npm:

<a href="https://nodejs.org/es/download/" target="_blank">NODE</a>

instalat puppeteer:

<b>` > npm i puppeteer `</b>


<h1>1. Para los que quieren saber más de nuestras administraciones.</h1>
Ejemplo de scraping de las Contrataciones y concesiones del Estado Español.

<h2>scraping-contrataciondelestado-es2.js</h2>

<b>` > node scraping-contrataciondelestado-es2.js `</b>

<b>URL: https://contrataciondelestado.es/wps/portal/licitaciones </b>

Node módulos Puppeteer + fs + path

Seleccionar estado y fechas a scrapear

page.evaluate(() => document.querySelectorAll('input')[3].value = ''),

page.evaluate(() => document.querySelectorAll('input')[4].value = ''),

page.evaluate(() => document.querySelectorAll('input')[5].value = ''),

page.evaluate(() => document.querySelectorAll('input')[6].value = ''),

page.evaluate(() => document.querySelectorAll('input')[7].value = '01-01-2020'),

page.evaluate(() => document.querySelectorAll('input')[8].value = '31-01-2020'),
			
Resultado archivos json

<h2>scraping-contrataciondelestado-es.js</h2>

<b>` > node scraping-contrataciondelestado-es.js `</b>

<b>URL: https://contrataciondelestado.es/wps/portal/licitaciones </b>

Node módulos Puppeteer + fs + path

Seleccionar estado y fechas a scrapear

page.evaluate(() => document.querySelectorAll(".ancho310 > select")[2].value = 'RES'),

page.evaluate(() => document.querySelectorAll(".ancho400 > input")[2].value = '01-01-2019'),

page.evaluate(() => document.querySelectorAll(".ancho400 > input")[3].value = '31-03-2019'),

Resultado archivos CSV con el nombre de la empresa formateado

<h2>concesiones_gobierno_es.js</h2>

<b>` > node concesiones_gobierno_es.js `</b>

<b>URL: https://www.pap.hacienda.gob.es/bdnstrans/GE/es/concesiones/convocatoria/xxxx </b>

Node módulos Puppeteer + fs + path

Lista en CSV todas las concesiones de España

Node módulos Puppeteer + fs + path

Resultado archivos TXT datos.txt formato CSV

<h1>2. Rascando Twitter.</h1>
<h2>scraping_tendencias_twitter.js</h2>

<b>` > node scraping_tendencias_twitter.js `</b>

<b>URL: https://twitter.com/explore/tabs/trending </b>

Ejempo de como recopilar datos de Twitter.

Recopilar las últimas tendencias

Resultado array con las últimas tendencias 

<h2>scraping_query_trends_twitter.js</h2>

<b>` > node scraping_query_trends_twitter.js `</b>

<b>URL: https://twitter.com/search?q=' + search + '&src=trend_click&vertical=trends </b>

Ejempo de como recopilar datos de una búsqueda en Twitter.

Recopila links, ruta de imágenes y texto de los u últimos twitter de esa búsqueda. 

Resultado array con las esos datos
