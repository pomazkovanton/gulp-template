const { src, dest } = require('gulp');
const webp = require('gulp-webp');

const webpConvert = () => src('src/img/*.+(png|jpg)')
  .pipe(
    webp({
      quality: 75,
    }),
  )
  .pipe(dest('build/img'));

module.exports = webpConvert;
