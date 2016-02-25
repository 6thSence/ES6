const gulp = require('gulp');
const babel = require('gulp-babel');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();

gulp.task('compile', () => {
    gulp.src('in/input.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(rename('output.js'))
        .pipe(gulp.dest('out'));
});

gulp.task('browser-sync', () => {
    browserSync.init({
        server: {
            baseDir: "./out/"
        }
    });
});

gulp.task('watch', () => {
    gulp.watch('in/input.js', ['compile']);
    gulp.watch('out/**/*', browserSync.reload);
});

gulp.task('default', ['compile', 'browser-sync', 'watch']);