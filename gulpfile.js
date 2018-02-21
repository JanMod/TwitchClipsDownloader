var gulp = require('gulp');
var inject = require('gulp-inject');

gulp.task('index', function () {
    var target = gulp.src('www/index.html');
    var sources = gulp.src(['www/**/*.css', 'www/**/*.js'], {read:false});

    return target.pipe(inject(sources))
        .pipe(gulp.dest('./'));
})

/*
-- TOP LEVEL FUNCTIONS --
gulp.task - Define tasks
gulpsrc - Point tofiles to use
gulp.dest - Points to folder to output
gulpt.watch - Watch files and folders for changes
*/

// Logs Message
gulp.task('message', function () {
    return console.log('Gulp is running...');
});

