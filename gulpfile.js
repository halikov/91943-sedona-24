'use strict';

const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const debug = require('gulp-debug');
const del = require('del');

gulp.task('styles', function() {
   return gulp.src('css/style.css')
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    // .pipe(csso())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('css'));
});

gulp.task('compress', function() {
  return gulp.src('js/main.js')
    .pipe(uglify())
    .pipe(gulp.dest('js'));
});

gulp.task('build', gulp.series('styles', 'compress'));
