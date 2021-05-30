const {parallel, series} = require('gulp');


const pug2html = require('./gulp/pug2html')
const sass2css = require('./gulp/sass2css')
const scripts = require('./gulp/scripts')

const imageMinify = require('./gulp/imageMinify')
const webpConvert = require('./gulp/webpConvert')
const svgSprites = require('./gulp/svgSprites')
const fonts = require('./gulp/fonts')

const clean = require('./gulp/clean')
const watchFiles = require('./gulp/watchFiles')
const copyFiles = require('./gulp/copyFiles')

exports.sass2css = sass2css;
exports.pug2html = pug2html;
exports.watchFiles = watchFiles;
exports.imageMinify = imageMinify;
exports.webpConvert = webpConvert;
exports.fonts = fonts;
exports.clean = clean;
exports.scripts = scripts;
exports.svgSprites = svgSprites;
exports.copyFiles = copyFiles;



exports.build = series(clean, parallel(pug2html, scripts, fonts, series(imageMinify, webpConvert), svgSprites), sass2css);
exports.dev = series(clean, parallel(pug2html, scripts, fonts, series(copyFiles, webpConvert), svgSprites), sass2css, watchFiles);
