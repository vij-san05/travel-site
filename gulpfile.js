var gulp_var= require('gulp');
var watch=require('gulp-watch');
var postcss=require('gulp-postcss');
var autoprefixer= require('autoprefixer');
var cssVar =require('postcss-simple-vars');
var nested=require('postcss-nested');
var cssImport=require('postcss-import');

gulp_var.task('default',function(){
	console.log("defalt task");
});

gulp_var.task('html',function(){

	console.log("did some changes in the HTML files");
});

gulp_var.task('styles_task',function(){

	return gulp_var.src('app/assets/styles/styles.css')
			.pipe(postcss([cssImport,cssVar,nested, autoprefixer]))
			.pipe(gulp_var.dest('app/temp/styles'));
});

gulp_var.task('watch',function(){
	watch('app/index.html',function(){
		gulp_var.start('html');
	});

	watch('app/assets/styles/**/*.css',function(){
		gulp_var.start('styles_task');
	});
});