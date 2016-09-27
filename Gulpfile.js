(function(){
    "use strict";

    let gulp = require('gulp');
    let debug = require('gulp-debug');
    const BASE_DIR = 'site';

    gulp.task('prepare', [], () => {
        return gulp.src([
                BASE_DIR + '/css/**',
                BASE_DIR + '/js/**',
                BASE_DIR + 'mkdocs',
                BASE_DIR + '/fonts/**',
                BASE_DIR + '/img/**',
                BASE_DIR + '/images/**',
                BASE_DIR + '/**/*.js',
                BASE_DIR + '/**/*.css',
                BASE_DIR + '/**/*.dll',
                BASE_DIR + '/**/*.xml',
                BASE_DIR + '/**/*.war',
                BASE_DIR + '/**/*.png'
        ], { base: BASE_DIR })
            .pipe(debug())
            .pipe(gulp.dest('public'));
    });
})();
