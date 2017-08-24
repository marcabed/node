var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nestes = require('postcss-nested');

gulp.task('default', function() {
	console.log("hurray");
});

gulp.task('html', function(){
	console.log("hurray");
});

gulp.task('styles', function() {
	return gulp.src('./app/assets/styles/style.css')
	.pipe(postcss([cssvars, nested, autoprefixer]))
	.pipe(gulp.dest('./app/temp/styles'));


});

gulp.task('watch',function() {

	watch('./app/index.html', function() {
		gulp.start('html');


	});

	watch('./app/assets/styles/**/*.css', function() {
		gulp.start('html');

	});


});