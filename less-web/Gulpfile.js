var gulp = require('gulp');
var less = require('gulp-less');
var merge = require('merge-stream');
var cleanCSS = require('gulp-clean-css');

gulp.task('bootstrap', function(){
	var fonts = gulp.src('./node_modules/bootstrap/dist/fonts/*.*')
		.pipe(gulp.dest('./css/fonts/'));

	var css = gulp.src('./node_modules/bootstrap/dist/css/bootstrap.min.css')
		.pipe(gulp.dest('./css/'));

	var jquery = gulp.src('./node_modules/jquery/dist/jquery.min.js')
		.pipe(gulp.dest('./js/'));

	var bootstrap_js = gulp.src('./node_modules/bootstrap/dist/js/bootstrap.min.js')
		.pipe(gulp.dest('./js/'));
	
	return merge(fonts, css, jquery, bootstrap_js);
});

gulp.task('less', function(){
	gulp.src(['./less/**/*.less', '!./less/vars.less'])
		.pipe(less())
		.pipe(cleanCSS())
		.pipe(gulp.dest('./css/'));
});

gulp.task('default', ['less', 'bootstrap']);