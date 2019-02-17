'use strict';

const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const debug = require('gulp-debug');
const del = require('del');

gulp.task('clean', function() {
  // удаляет содержимое подпапки /out, чтоб перезаписать новый
  return del('css/out', 'js/out');
});

gulp.task('styles', function() {
   return gulp.src('css/style.css')
   // sourcemaps в продакшене (в готовом проекте) вроде не нужен
   //  только во время разработки
    // инициализирует sourcemaps
    // .pipe(sourcemaps.init())
    // автопрефиксер проставляет префиксы движков браузеров
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    // сжимает css код
    .pipe(csso())
    // записывает sourcemaps '.' в отдельный файл, () в файл стилей
    // .pipe(sourcemaps.write('.'))
    // создает подпапку и записывает выходной файл в нее
    .pipe(gulp.dest('css/out'));
});

gulp.task('compress', function() {
  return gulp.src('js/main.js')
    // сжимает js  код
    .pipe(uglify())
    .pipe(gulp.dest('js/out'));
});

gulp.task('build',
  gulp.series('clean',
  gulp.parallel('styles', 'compress'))
);
