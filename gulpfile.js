const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('transpile', () => {
  return gulp
    .src('src/utf2char.js')
    .pipe(
      babel({
        presets: ['es2015']
      })
    )
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['transpile']);
