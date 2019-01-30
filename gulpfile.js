const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
var sass = require('gulp-sass');
// sass.compiler = require('node-sass')
// const watch = require('gulp-watch');


function styles() {
  return gulp.src('./src/css/**/*.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cleanCSS({
      level: 2
    }))
    .pipe(gulp.dest('./build/css'));
};

function scripts() {

}

function watch() {
  gulp.watch('./src/css/**/*.css', styles);
}

gulp.task('sass', function () {
  console.log('sass done')
  gulp.src('./src/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'));
});
gulp.task('sass:watch', function () {
  gulp.watch('./src/sass/**/*.sass', ['sass']);
});

gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('watch', watch);
// gulp.task('sass', sass);

