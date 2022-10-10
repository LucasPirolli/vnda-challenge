"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));

sass.compiler = require("node-sass");

gulp.task("default", watch);
gulp.task("compact", compileSassCompact);
gulp.task("compressed", compileSassCompressed);

function compileSassCompact() {
  return gulp
    .src("src/scss/app.scss")
    .pipe(
      sass({
        outputStyle: "compact",
      })
    )
    .on("error", sass.logError)
    .pipe(gulp.dest("dist/assets/css/"));
}

function compileSassCompressed() {
  return gulp
    .src("src/scss/app.scss")
    .pipe(
      sass({
        outputStyle: "compressed",
      })
    )
    .on("error", sass.logError)
    .pipe(gulp.dest("dist/assets/css/"));
}

function watch() {
  gulp.watch("src/scss/**/*.scss", compileSassCompact);
  gulp.watch("dist/*.html", compileSassCompact);
  gulp.watch("src/js/**/*.js", compileSassCompact);
  gulp.watch("src/scss/**/*.scss", compileSassCompressed);
  gulp.watch("dist/*.html", compileSassCompressed);
  gulp.watch("src/js/**/*.js", compileSassCompressed);
}
