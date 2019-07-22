const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const headerfooter = require('gulp-headerfooter');
const browserSync = require('browser-sync').create();
const browserify = require('gulp-browserify');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const plumber = require( 'gulp-plumber' );
const beep = require( 'beepbeep' );
const notify = require( 'gulp-notify' ); // Sends message notification to you.


const errorHandler = r => {
	notify.onError( '\n\n❌  ===> ERROR: <%= error.message %>\n' )( r );
	beep();
};

gulp.task('assets', function() {
  return gulp.src('./app/assets/**/*').pipe(gulp.dest('./docs/assets/'));
});

gulp.task('scripts', function() {
  return gulp.src('./app/js/*.js').pipe(gulp.dest('./docs/js/'));
});

gulp.task('sass', function() {
  return gulp
    .src('./app/scss/main.scss')
		.pipe( plumber( () => {	notify.onError( '\n\n❌  ===> SASS ERROR %>\n' ) }))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./docs/css'))
    .pipe(browserSync.stream());
});

gulp.task('css', function() {
  return gulp.src('./app/css/*.css').pipe(gulp.dest('./docs/css/'));
});

gulp.task('html', function() {
  return gulp
    .src('./app/content/*.html')
    .pipe(headerfooter.header('./app/partials/header.html'))
    .pipe(headerfooter.footer('./app/partials/footer.html'))
    .pipe(gulp.dest('./docs/'));
});

gulp.task('serve', gulp.series('sass', 'css', 'html', 'scripts', 'assets', function() {
  browserSync.init({
    server: './docs',
    open: true // set to false to disable browser autostart
  });
  gulp.watch('app/scss/**/*', gulp.series('sass'));
  gulp.watch('app/css/**/*', gulp.series('css'));
  gulp.watch('app/content/*.html',  gulp.series('html'));
  gulp.watch('app/partials/*.html', gulp.series('html'));
  gulp.watch('app/js/*.js',  gulp.series('scripts'));
  gulp.watch('app/assets/**/*', gulp.series('assets'));
  gulp.watch('docs/*.html').on('change', browserSync.reload);
  gulp.watch('docs/js/*.js').on('change', browserSync.reload);
}));

gulp.task('build', gulp.series('sass', 'html' ,'scripts', 'assets', 'css'));
gulp.task('default', gulp.series('serve'));