import gulp from "gulp";
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import {htmlValidator} from 'gulp-w3c-html-validator';
import nunjucks from 'gulp-nunjucks';
import gulpHtmlBemValidator from 'gulp-html-bem-validator';
import beautify from 'gulp-beautify';
import svgmin from 'gulp-svgmin';

const {
   src,
   dest,
   series,
   parallel
} = gulp;
const sass = gulpSass(dartSass);

export function validate() {
   return src('./build/*.html')
      .pipe(gulpHtmlBemValidator())
      .pipe(htmlValidator.analyzer())
      .pipe(htmlValidator.reporter());

};

export function css() {
   return src('./source/sass/style.scss')
      .pipe(sourcemaps.init())
      .pipe(sass({
         outputStyle: 'compressed'
      }))
      .pipe(sourcemaps.write())
      .pipe(dest('./build/css'));
}

export function njk() {
   return src('./source/*.html')
      .pipe(nunjucks.compile())
      .pipe(dest('./build/'));
}
export function beauty() {
   return src('./source/*.html')
      .pipe(beautify.html({
         indent_size: 2
      }));
}

export function svg() {
   return src('./source/img/svg/*.svg')
   .pipe(svgmin())
   .pipe(dest('./build/img/svg/'));
}

export function watch() {
   gulp.watch('./source/**/*.html', njk);
   gulp.watch('./source/sass/**/*.scss', css);
}

export function validatehtml() {
   return src('./build/*.html')
      .pipe(htmlValidator.analyzer())
      .pipe(htmlValidator.reporter());
}
