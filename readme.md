<h1>Descripción.</h1>
El proyecto sé vasa en las siguientes tecnologías:
* Gulp  * sass  * javaScript  * TipeScript  * img  * components  * autoprefixer  * minify  * browser-sync  * reload

Optimizado para móviles con scrips que proporcionan información del navegador y media querie en sass (src/styles/mobile/m-screen).

Estructura y sintaxis de css - html - js leer readme-methodology.md en src/

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


Instalación Bower.
1.	Instalar bower ($ bower i).
2.  Buscar bower componentes ($ bower search parallax) parallax o nueva libreria.
3.  Instalar componentes bower ($ bower i --save https://github.com/wagerfield/parallax.git) don --save guarda la libreria en bower.json mas la rideccion.
4.	opción 1.   Gulp Bower.
	-	($ gulp bowerCss) ($ gulp bowerjs) Y ($ gulp bower). procesa librerias y conecta con template.
	-	($ gulp bower-cr) y ($ gulp bowerJs-cr).  procesa archivos y exporta a dist/components.
		*	Recomiendo ($ gulp bowerJs-cr) incertar en template y llamar las librerias css y sass src/components/styles/bower.scss y procesar con ($ gulp build).
5.	opción 2.
	-	Scss Inportar cada uno de los archivos desde src/mix/styles/bower.scss	
	-	Js Imporatar libredias desde bower_components.


Instalacion modulo npm para Gulp
 - npm install gulp-clean --save npm install gulp-clean --save

View.
*	index.php ya enlasa sus componentes primarios (head,  header, script) en el directorio (view/components).
*	crear nuevas vistas en el directorio layout (view/layout).


Nota.
En la raíz del proyecto hay un directorio llamado components en el cual se pueden almacenar librerías que no se deseen compiladas.
Al descargar comentar en .gitignore el directorio dist.
Los módulos descargados por el package.json son los últimos en los respectivos repositorios  ("string": "*",) y estan ignorados en .gitignore.
Si se presentan problemas al instalar npm o correr gulp verificar si hay módulos en conflicto por versión (usualmente sass).




Arquitectura de proyecto.
    - Organización de directorios y descripción de los mismos.
    - Puede obtener más información de los directorios y archivos en gulpfile.js

	..............................................................................
		components ------> librerias y fuentes que no vas a ser procesadas por gulp. 
		dist ------> Directorio de destino establecido por Gulp.
		src ------> Archivos base para Gulp.
		images ------> imagenes a procesar Gulp.
		mix ------> librerias de terceros para procesar por Fulp 
		scripts ------> js a compilar Gulp.
		styles ------> scss a compilar Gulp.
		view ------> Vistas php.
			modules ------> Modulos y widgets genericos.
			layouts ------> Vistas (home - contacto Etc)
	..............................................................................
	--> components
	------> fonts 
	--> dist 
	--> src
	------> images 
	------> mix  
	---------> js
	---------> styles
	------> scripts 
	---------> javaScript
	---------> tipeSript
	------> styles
	---------> base
	---------> baselayouts
	---------> layouts
	---------> mobile
	---------> modules
	---------> state
	---------> theme
	---------> sreen.scss
	--> view 
	------> modules 
	------> layouts 
	..............................................................................
