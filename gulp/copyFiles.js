const {src, dest} = require('gulp');

const copyFiles = () => {
  return src('./src/img/*.+(png|jpg|gif|ico|svg)')
        .pipe(dest('build/img'))
}

module.exports = copyFiles;
