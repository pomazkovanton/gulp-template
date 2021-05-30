const { src, dest } = require('gulp');
const sass = require('gulp-sass');
const notify = require('gulp-notify');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const shorthand = require('gulp-shorthand');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync');

const sass2css = () => src('./src/styles/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({
    outputStyle: 'expanded',
  }).on('error', notify.onError()))
  .pipe(autoprefixer({
    cascade: false,
  }))
  .pipe(shorthand())
  .pipe(cleanCSS({
    debug: true,
    compatibility: '*',
  }, (details) => {
    console.log(`${details.name}: Original size: ${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}`);
  }))
  .pipe(sourcemaps.write('.'))
  .pipe(rename({
    suffix: '.min',
  }))
  .pipe(dest('./build/css/'))
  .pipe(browserSync.stream());

module.exports = sass2css;
