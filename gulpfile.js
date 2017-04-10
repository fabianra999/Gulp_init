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
		ts = require('gulp-typescript');


gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: "./"
		}
	});
});

gulp.task('bs-reload', function () {
	browserSync.reload();
});

// images
gulp.task('images', function(){
	gulp.src('src/images/**/*')
		.pipe(cache(imagemin({ optimizationLevel: 9, progressive: true, interlaced: true })))
		.pipe(gulp.dest('dist/images/'))
});

//styles
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

//componentsCss
gulp.task('componentsCss', function(){
	gulp.src(['src/components/styles/**/*.scss'])
		.pipe(plumber({
		errorHandler: function (error) {
			console.log(error.message);
			this.emit('end');
		}}))
		.pipe(concat('componentsMain.css'))
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(autoprefixer({ browsers: ["> 0%"] }))
	//.pipe(autoprefixer(['last 2 versions', 'ie 8', 'ie 9', 'android 2.3', 'android 4', 'opera 12', 'safari 5', 'ios 6', 'Firefox 14']))
		.pipe(gulp.dest('dist/components/styles/'))
		.pipe(rename({suffix: '.min'}))
		.pipe(minifycss())
		.pipe(sourcemaps.write('/'))
		.pipe(gulp.dest('dist/components/styles/'))
		.pipe(browserSync.reload({stream:true}))
});

//typeScript
gulp.task('tipeScript', function () {
	return gulp.src('src/scripts/tipeScript/**/*.ts')
		.pipe(ts({
		noImplicitAny: true,
		out: 'scriptTs.js'
	}))
		.pipe(concat('scriptTs.js'))
		.pipe(babel())
		.pipe(gulp.dest('dist/scripts/tipeScript/'))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(gulp.dest('dist/scripts/tipeScript/'))
		.pipe(browserSync.reload({stream:true}))
});

//scripts
gulp.task('scripts', function(){
	return gulp.src('src/scripts/javaScript/**/*.js')
		.pipe(plumber({
		errorHandler: function (error) {
			console.log(error.message);
			this.emit('end');
		}}))
		.pipe(concat('main.js'))
		.pipe(babel())
		.pipe(gulp.dest('dist/scripts/javaScript/'))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(gulp.dest('dist/scripts/javaScript/'))
		.pipe(browserSync.reload({stream:true}))
});

//components Js
gulp.task('componentsJs', function(){
	return gulp.src('src/components/js/**/*.js')
		.pipe(plumber({
		errorHandler: function (error) {
			console.log(error.message);
			this.emit('end');
		}}))
		.pipe(concat('components.js'))
		.pipe(babel())
		.pipe(gulp.dest('dist/components/js/'))
		.pipe(rename({suffix: '.min'}))
		.pipe(uglify())
		.pipe(gulp.dest('dist/components/js/'))
		.pipe(browserSync.reload({stream:true}))
});

//limpiar dis
gulp.task('clean', del.bind(null, ['.tmp', 'dist']));

//funciones
gulp.task('server', ['browser-sync'], function(){
	gulp.watch("src/styles/**/*.scss", ['styles']);
	gulp.watch("src/components/styles/**/*.scss", ['componentsCss']);
	gulp.watch("src/scripts/tipeScript/**/*.ts", ['tipeScript']);
	gulp.watch("src/scripts/**/*.js", ['scripts']);
	gulp.watch("src/components/js/**/*.js", ['componentsJs']);
	gulp.watch("src/images/**/*", ['images']);
	gulp.watch("*.html", ['bs-reload']);
});

gulp.task('build', ['images', 'styles', 'componentsCss', 'tipeScript', 'scripts', 'componentsJs'], function(){ });

gulp.task('default', function(){
	gulp.watch("src/styles/**/*.scss", ['styles']);
	gulp.watch("src/components/styles/**/*.scss", ['componentsCss']);
	gulp.watch("src/scripts/tipeScript/**/*.ts", ['tipeScript']);
	gulp.watch("src/scripts/**/*.js", ['scripts']);
	gulp.watch("src/components/js/**/*.js", ['componentsJs']);
	gulp.watch("src/images/**/*", ['images']);
	gulp.watch("*.html", ['bs-reload']);
});
