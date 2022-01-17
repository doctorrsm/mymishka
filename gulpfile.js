import gulp from "gulp";
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import {htmlValidator} from 'gulp-w3c-html-validator';
import nunjucks from 'gulp-nunjucks';
import gulpHtmlBemValidator from 'gulp-html-bem-validator';
import beautify from 'gulp-beautify';
import svgo from 'gulp-svgmin';
import svgstore from 'gulp-svgstore';
import squoosh from 'gulp-libsquoosh';
import rename from 'gulp-rename';

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

export function img() {
  return src('./source/img/**/*.{jpg,png}')
      .pipe(squoosh({
        //webp: {},
        //avif: {},
      }))
     .pipe(dest('./build/img'));
}

export function webp() {
  return src('./source/img/**/*.{jpg,png}')
      .pipe(squoosh({
        webp: {},
        avif: {},
      }))
     .pipe(dest('./build/img'));
}
export function svg() {
   return src('./source/img/svg/*.svg')
   .pipe(svgo())
   .pipe(svgstore({
    inlineSvg: true
  }))
  .pipe(rename('sprite.svg'))
   .pipe(dest('./build/img/svg/'));
}

export function svgcopy() {
  return src('./source/img/svg/*.svg')
  .pipe(svgo())
  .pipe(dest('./build/img/svg/'));
}

export function watch() {
   gulp.watch('./source/**/*.html', njk);
   gulp.watch('./source/sass/**/*.scss', css);
   gulp.watch('./source/**/*.svg', svg);
   gulp.watch('./source/**/*.svg', svgcopy);
   gulp.watch('./source/**/*.{jpg,png}', img);
   gulp.watch('./source/**/*.{jpg,png}', webp);
}

export function validatehtml() {
   return src('./build/*.html')
      .pipe(htmlValidator.analyzer())
      .pipe(htmlValidator.reporter());
}



