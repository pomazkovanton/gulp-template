const { src, dest } = require('gulp');
const notify = require('gulp-notify');
const sourcemaps = require('gulp-sourcemaps');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('../webpack.config.js');
const uglify = require('gulp-uglify-es').default;
import browserSync = require('browser-sync');

const scripts = () => src('./src/js/main.js')
  .pipe(webpackStream(webpackConfig), webpack)
  .pipe(sourcemaps.init())
  .pipe(uglify().on('error', notify.onError()))
  .pipe(sourcemaps.write('.'))
  .pipe(dest('./build/js'))
  .pipe(browserSync.stream());

module.exports = scripts;
