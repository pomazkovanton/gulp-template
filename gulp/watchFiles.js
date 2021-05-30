const { watch } = require('gulp');
const browserSync = require('browser-sync');

const pug2html = require('./pug2html');
const sass2css = require('./sass2css');
const fonts = require('./fonts');
const scripts = require('./scripts');
const svgSprites = require('./svgSprites');
const copyFiles = require('./copyFiles');

const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: './build',
    },
  });

  watch('./src/styles/**/*.scss', sass2css);
  watch('./src/components/**/*.scss', sass2css);

  watch('./src/*.pug', pug2html);
  watch('./src/components/**/*.pug', pug2html);

  watch('./src/js/**/*.js', scripts);
  watch('./src/components/**/*.js', scripts);

  watch('./src/fonts/**.ttf', fonts);

  watch('./src/img/*.+(png|jpg|gif|ico|svg)', copyFiles);

  watch('./src/img/svg/*.svg', svgSprites);
};

module.exports = watchFiles;
