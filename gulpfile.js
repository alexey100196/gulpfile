const gulp       = require('gulp'),
  concat        = require('gulp-concat'),
  autoprefixer  = require('gulp-autoprefixer'),
  cleanCSS      = require('gulp-clean-css'),
  sass          = require('gulp-sass'); 

//
gulp.task( 'scripts', function(){ } );
// 

gulp.task('sass', function(){
  console.log('sass done')
  gulp.src('./src/sass/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cleanCSS({
      level: 2
    }))
    .pipe(gulp.dest('./build/css'));
});
// 
gulp.task('watch', ['sass', 'scripts'], function () {
  gulp.watch('./src/sass/**/*.sass', ['sass']); // Наблюдение за sass файлами в папке sass
});





