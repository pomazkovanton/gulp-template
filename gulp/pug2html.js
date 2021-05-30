const { src, dest } = require('gulp');
const pug = require('gulp-pug');
const browserSync = require('browser-sync');

const pug2html = () => src('./src/*.pug')
  .pipe(pug({
    pretty: true,
  }))
  .pipe(dest('./build'))
  .pipe(browserSync.stream());

module.exports = pug2html;
