const gulp = require('gulp')
const server = require('gulp-server-livereload')

gulp.task('build', function(cb) {
    console.log('Construyendo el sitio');
    setTimeout(cb, 1200);
    cb();
});

gulp.task('serve', function() {
    gulp.src('www')
        .pipe(server({
            livereaload: true,
            open: true
        }));
})