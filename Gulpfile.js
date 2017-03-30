(function(){
  "use strict";

  let gulp = require('gulp');
  let debug = require('gulp-debug');

  const BASE_DIR = 'site';
  const TARGET_DIR = 'node_modules/authenticated-docs';

  gulp.task('assets', [], () => {
    return gulp.src([
      BASE_DIR + '/**/*',
      '!**/*.html'
    ], { base: BASE_DIR })
      .pipe(debug())
      .pipe(gulp.dest(TARGET_DIR + '/public'));
});

gulp.task('html', [], () => {
  return gulp.src([
      BASE_DIR + '/**/*.html'
  ], { base: BASE_DIR })
    .pipe(debug())
    .pipe(gulp.dest(TARGET_DIR + '/app/views/site'));
});

gulp.task('prepare', ['assets', 'html']);
})();
