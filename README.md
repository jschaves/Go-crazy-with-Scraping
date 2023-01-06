# Go-crazy-with-Scraping
Go crazy with Scraping

Para los que quieren saber más de nuestras administraciones.

instalar node:

<a href="https://nodejs.org/es/download/" target="_blank">Google</a>

# scraping-contrataciondelestado-es.js

node scraping-contrataciondelestado-es.js

Ejemplo de scrapin de las Contrataciones del Estado Español

Node módulos Puppeteer + fs + path

Seleccionar estado y fechas a scrapear<br>
page.evaluate(() => document.querySelectorAll(".ancho310 > select")[2].value = 'RES'),<br>
page.evaluate(() => document.querySelectorAll(".ancho400 > input")[2].value = '01-01-2019'),<br>
page.evaluate(() => document.querySelectorAll(".ancho400 > input")[3].value = '31-03-2019'),<br>
Resultado archivos CSV con el nombre de la empresa formateado

# concesiones_gobierno_es.js 

node concesiones_gobierno_es.js

Ejemplo de scrapin de las concesiones del Estado Español

Lista en CSV todas las concesiones de España

Node módulos Puppeteer + fs + path

Resultado archivos TXT datos.txt formato CSV



