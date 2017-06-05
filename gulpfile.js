var gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	rename = require('gulp-rename'),
	autoprefixer = require('gulp-autoprefixer'),
	babel = require('gulp-babel'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	imagemin = require('gulp-imagemin'),
	cache = require('gulp-cache'),
	minifycss = require('gulp-minify-css'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync'),
	sourcemaps = require('gulp-sourcemaps'),
	gulp = require('gulp'),
	ts = require('gulp-typescript'),
	flatten = require('gulp-flatten'),
	gulpFilter = require('gulp-filter'),
	mainBowerFiles = require('main-bower-files'),
	wiredep = require('wiredep').stream;

/***************************************** 
	browser-sync 
	- Levanta servidor local.
	- Tarea $ gulp browser-sync.
******************************************/
gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: "./"
		}
	});
});

/***************************************** 
	Reload 
	- Refresca el navegador automaticamente al ver cambios.
	- Tarea $ gulp bs-reload.
******************************************/
gulp.task('bs-reload', function () {
	browserSync.reload();
});


/***************************************** 
	Images 
	- optimizar imágenes (peso).
	- Tarea $ gulp images.
	- Directorio a precesar src/images.
	- Directorio procesado dist/images.
******************************************/
gulp.task('images', function(){
	gulp.src('src/images/**/*')
		.pipe(cache(imagemin({ optimizationLevel: 9, progressive: true, interlaced: true })))
		.pipe(gulp.dest('dist/images/'))
});

/***************************************** 
	Styles
	- procesa archivos SASS.
	- Tarea $ gulp styles.
	- Archivo a precesar src/styles/*.scss.
	- Archivo a procesado dist/styles/*.scss.
	- Autoprefixer.
	- Archivo comprimido.
	- Mapa Archivo SCSS.
******************************************/
gulp.task('styles', function(){
	gulp.src(['src/styles/**/*.scss'])
		.pipe(plumber({
		errorHandler: function (error) {
			console.log(error.message);
			this.emit('end');
		}}))
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(autoprefixer({ browsers: ["> 0%"] }))
	//.pipe(autoprefixer(['last 2 versions', 'ie 8', 'ie 9', 'android 2.3', 'android 4', 'opera 12', 'safari 5', 'ios 6', 'Firefox 14']))
		.pipe(gulp.dest('dist/styles/'))
		.pipe(rename({suffix: '.min'}))
		.pipe(minifycss())
		.pipe(sourcemaps.write('/'))
		.pipe(gulp.dest('dist/styles/'))
		.pipe(browserSync.reload({stream:true}))
});

/***************************************** 
	Mix styles
	- procesa archivos SASS.
	- Tarea $ gulp mixCss.
	- Importa archivos bower css - scss.
	- Librerías externas 
	- Archivo a precesar src/mix/styles/*.scss.
	- Archivo a procesado dist/mix/styles/*.scss.
	- Autoprefixer.
	- Archivo comprimido.
	- Mapa Archivo SCSS.
******************************************/
gulp.task('mixCss', function(){
	gulp.src(['src/mix/styles/**/*.scss'])
		.pipe(plumber({
		errorHandler: function (error) {
			console.log(error.message);
			this.emit('end');
		}}))
		.pipe(concat('mixMain.css'))
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(autoprefixer({ browsers: ["> 0%"] }))
	//.pipe(autoprefixer(['last 2 versions', 'ie 8', 'ie 9', 'android 2.3', 'android 4', 'opera 12', 'safari 5', 'ios 6', 'Firefox 14']))
		.pipe(rename({suffix: '.min'}))
		.pipe(minifycss())
		.pipe(sourcemaps.write('/'))
		.pipe(gulp.dest('dist/mix/styles/'))
		.pipe(browserSync.reload({stream:true}))
});

/***************************************** 
	TypeScript
	- procesa archivos ts.
	- Tarea $ gulp tipeScript.
	- Compila archivos TypeScript a JS.
	- Minifica archivos TypeScript.
	- Une archivos TypeScript.
	- Archivo a precesar src/scripts/tipeScript/*.ts.
	- Archivo a procesado dist/scripts/tipeScript/*.js.
	- Mapa Archivo js.
******************************************/
gulp.task('tipeScript', function () {
	return gulp.src('src/scripts/tipeScript/**/*.ts')
		.pipe(ts({
		noImplicitAny: true,
		out: 'scriptTs.js'
	}))
		.pipe(concat('scriptTs.js'))
		.pipe(babel({
            presets: ['es2015']
         }))
		.pipe(gulp.dest('dist/scripts/tipeScript/'))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(gulp.dest('dist/scripts/tipeScript/'))
		.pipe(browserSync.reload({stream:true}))
});

/***************************************** 
	Scripts
	- procesa archivos ts.
	- Tarea $ gulp scripts.
	- Compila archivos JS.
	- Minifica archivos Js.
	- Une archivos Js.
	- Archivo a precesar src/scripts/javaScript/*.js.
	- Archivo a procesado dist/scripts/javaScript/*.js.
	- Mapa Archivo js.
******************************************/
gulp.task('scripts', function(){
	return gulp.src('src/scripts/javaScript/**/*.js')
		.pipe(plumber({
		errorHandler: function (error) {
			console.log(error.message);
			this.emit('end');
		}}))
		.pipe(concat('main.js'))
		.pipe(babel({
            presets: ['es2015']
        }))
		.pipe(gulp.dest('dist/scripts/javaScript/'))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(gulp.dest('dist/scripts/javaScript/'))
		.pipe(browserSync.reload({stream:true}))
});

/***************************************** 
	mix Js
	- procesa archivos ts.
	- Tarea $ gulp componentsJs.
	- Compila archivos JS.
	- Minifica archivos Js.
	- Une archivos Js.
	- Librerías externas (scripts de terceros). 
	- Archivo a precesar src/mix/js/*.js.
	- Archivo a procesado dist/mix/js/*.js.
	- Mapa Archivo js.
******************************************/
gulp.task('componentsJs', function(){
	return gulp.src('src/mix/js/**/*.js')
		.pipe(plumber({
		errorHandler: function (error) {
			console.log(error.message);
			this.emit('end');
		}}))
		.pipe(concat('mix.js'))
		.pipe(babel({
            presets: ['es2015']
        }))
		.pipe(gulp.dest('dist/mix/js/'))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(gulp.dest('dist/mix/js/'))
		.pipe(browserSync.reload({stream:true}))
});

/***************************************** 
	limpiar dis
	- Eliminar todo directorio y archivo de dist/
	- Tarea $ gulp clean.
******************************************/
//gulp.task('clean', del.bind(null, ['.tmp', 'dist']));

/***************************************** 
	server
	- Ejecuta las tareas: server, styles, mixCss, tipeScript, scripts, componentsJs, images, bs-reload
	- Tarea $ gulp server.
	- Levanta servidor local.
	- Queda atento a cambios de todas las tareas.
******************************************/
gulp.task('server', ['browser-sync'], function(){
	gulp.watch("src/styles/**/*.scss", ['styles']);
	gulp.watch("src/components/styles/**/*.scss", ['mixCss']);
	gulp.watch("src/scripts/tipeScript/**/*.ts", ['tipeScript']);
	gulp.watch("src/scripts/**/*.js", ['scripts']);
	gulp.watch("src/components/js/**/*.js", ['componentsJs']);
	gulp.watch("src/images/**/*", ['images']);
	gulp.watch("*.html", ['bs-reload']);
});

/***************************************** 
	build
	- Ejecuta las tareas: server, styles, mixCss, tipeScript, scripts, componentsJs, images, bs-reload.
	- Reconstruir los archivos generados por las tareas.
	- Tarea $ gulp build.
******************************************/
gulp.task('build', ['images', 'styles', 'mixCss', 'tipeScript', 'scripts', 'componentsJs'], function(){ });



//=======================================================================//
//******************************** bower ********************************//
//=======================================================================//

/***************************************** 
	Bower - Incorporación manual.
	- Busca: js, css y font para generar uno solo Archivo.
	- Tarea $ gulp bower-cr.
	- Tarea por Ajustar.
******************************************/
var dest_path =  'www';// Define paths variables
gulp.task('bower-cr', function() {
	var jsFilter = gulpFilter('***/**/*.js', {restore: true}),
		cssFilter = gulpFilter('*****/****/***/**/*.css', {restore: true}),
		fontFilter = gulpFilter(['***/**/*.eot', '***/**/*.woff', '***/**/*.svg', '***/**/*.ttf'], {restore: true});

	return gulp.src(mainBowerFiles())

	// grab vendor js files from bower_components, minify and push in /public
		.pipe(jsFilter)
		.pipe(gulp.dest(dest_path + '/js/'))
		.pipe(uglify())
		.pipe(rename({suffix: ".min"}))
		.pipe(gulp.dest(dest_path +'/js/'))
		.pipe(jsFilter.restore)

	// grab vendor css files from bower_components, minify and push in /public
		.pipe(cssFilter)
		.pipe(gulp.dest(dest_path + '/css'))
		.pipe(minifycss())
		.pipe(rename({suffix: ".min"}))
		.pipe(gulp.dest(dest_path + '/css'))
		.pipe(cssFilter.restore)

	// grab vendor font files from bower_components and push in /public
		.pipe(fontFilter)
		.pipe(flatten())
		.pipe(gulp.dest(dest_path + '/fonts'));
});

/***************************************** 
	Bower Js - Incorporación manual.
	- Busca: js, css y font para generar uno solo Archivo.
	- Tarea $ gulp bower-cr.
	- Tarea por Ajustar.
******************************************/
gulp.task('bowerJs-cr', function() {
	
	var dest_path = 'dist/components';// Define paths variables
	var jsFilter = gulpFilter('***/**/*.js', {restore: true});

	return gulp.src(mainBowerFiles())

	// grab vendor js files from bower_components, minify and push in /public
		.pipe(jsFilter)
		//.pipe(gulp.dest(dest_path + '/js/'))
		//.pipe(uglify())
		.pipe(rename({suffix: ".min"}))
		.pipe(uglify())
		.pipe(gulp.dest(dest_path +'/js/'))
		.pipe(jsFilter.restore)

});

/***************************************** 
	Bower Css - Indexacion automatica a Markup.
	- Busca: css para indexar a html-php por medio de etiquetas inteligentes.
	- Tarea $ gulp bowerCss.
******************************************/
gulp.task('bowerCss', function () {
	gulp.src('./view/components/head.php')
		.pipe(wiredep({
		optional: 'configuration',
		goes: 'here'
	}))
		.pipe(gulp.dest('./view/components/'));
});

/***************************************** 
	Bower Js - Indexacion automatica a Markup.
	- Busca: Js para indexar a html-php por medio de etiquetas inteligentes.
	- Tarea $ gulp bowerjs.
******************************************/
gulp.task('bowerjs', function () {
	gulp.src('./view/components/scripts.php')
		.pipe(wiredep({
		optional: 'configuration',
		goes: 'here'
	}))
		.pipe(gulp.dest('./view/components/'));
});

/***************************************** 
	Bower (Bower Js - Bower Css)
	- Ejecuta las tareas: bowerjs, bowerCss.
	- Tarea $ gulp bowerIndexes.
******************************************/
gulp.task('bowerIndexes', ['bowerjs', 'bowerCss'], function(){ });

/***************************************** 
	Defaul Tarea
	- Ejecuta las tareas: styles, mixCss, tipeScript, scripts, componentsJs, images.
	- Tarea $ gulp.
	- Queda atento a cambios de todas las tareas.
******************************************/
gulp.task('default', function(){
	gulp.watch("src/styles/**/*.scss", ['styles']);
	gulp.watch("src/components/styles/**/*.scss", ['mixCss']);
	gulp.watch("src/scripts/tipeScript/**/*.ts", ['tipeScript']);
	gulp.watch("src/scripts/**/*.js", ['scripts']);
	gulp.watch("src/components/js/**/*.js", ['componentsJs']);
	gulp.watch("src/images/***/**/*", ['images']);
	gulp.watch("*.html", ['bs-reload']);
});
