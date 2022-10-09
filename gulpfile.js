"use strict";
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();

sass.compiler = require("node-sass");

gulp.task('default', watch);
gulp.task('sass', compileSass);

function compileSass(){
  return gulp.src('src/scss/app.scss')
  .pipe(sass({
    outputStyle: 'compact'
  })).on('error', sass.logError)
  .pipe(gulp.dest('dist/assets/css/'))
  .pipe(browserSync.stream())
}

function watch() {
  gulp.watch('src/scss/**/*.scss', compileSass); 
  gulp.watch('dist/*.html', compileSass);
  gulp.watch('src/js/**/*.js', compileSass)
}
