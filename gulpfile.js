var gulp = require('gulp');
var argv = require('yargs').argv;
var ext_replace = require('gulp-ext-replace');

gulp.task('default', function() {
	gulp.watch(argv.x,['rename'])
});

gulp.task('rename', function() {
	gulp.src(argv.x)
	.pipe(ext_replace(argv.y))
	.pipe(gulp.dest(function(file) {return file.base+argv.z}));
	return;
});