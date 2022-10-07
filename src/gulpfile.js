"use strict"
const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))

sass.compiler = require('node-sass')

gulp.task('watch', watch)
gulp.task('build', build)

async function compileSassCompressed() {
    return gulp
        .src('scss/app.scss')
        .pipe(sass({
            outputStyle: 'compress',
            filename: 'qwe.min.css'
        }).on('error', sass.logError))
        .pipe(gulp.dest('../dist/assets/css'))
}

async function compileSassCompacted() {
    return gulp
        .src('scss/app.scss')
        .pipe(sass({
            outputStyle: 'compact',
            filename: 'asd.css'
        }).on('error', sass.logError))
        .pipe(gulp.dest('../dist/assets/css'))
}
async function watch() {
await gulp.watch('scss/app.scss', compileSassCompacted)
}

async function build() {
    await gulp.task('scss/app.scss', compileSassCompressed)
}