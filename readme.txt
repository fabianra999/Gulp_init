Descripción.
El proyecto sé vasa en las siguientes tecnologías:
* Gulp  * sass  * javaScript  * TipeScript  * img  * components  * autoprefixer  * minify  * browser-sync  * reload

Optimizado para móviles con scrips que proporcionan información del navegador y media querie en sass (src/styles/mobile/m-screen).

Componentes.
* html5shi v3.7.3  * respond v1.4.2  * normalize v3.0.3  * bootstrap v3.3.7  * jquery v1.12.4


Init.  
1.	Ajustar informacion del package.json.
2.	Instalar modulos.
	-	$ npm i
3.		crear dist.
	-	$ gulp build
4.	Opciones 
	-	gulp watch ( $ gulp ).
	-	Levanta server y watch ( $ gulp server ).
	-	Reconstruir dist ( $ gulp build).



Instalación completa.
1.	Instalar node.js.
2.	Instalar npm si no se instala con node.js.
3.	Instalar gulp global mente. (-g)
4.  Instalar modulos.
	-	Uso gloval ($ npm install --save gulp-install )
	-	Uso local ($ npm install --save-dev gulp-install )



View.
*	index.php ya enlasa sus componentes primarios (head,  header, script) en el directorio (view/components).
*	crear nuevas vistas en el directorio layout (view/layout).


Nota.
Los módulos descargados por el package.json son los últimos en los respectivos repositorios  ("string": "*",).
Si se presentan problemas al instalar npm o correr gulp verificar si hay módulos en conflicto por versión (usualmente sass).
Al descargar comentar en .gitignore el directorio dist.