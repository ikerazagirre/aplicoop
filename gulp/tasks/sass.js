var sass = require('gulp-sass'),  
    cleanCSS = require('gulp-clean-css'),
    sourcemaps = require('gulp-sourcemaps');


module.exports = function (gulp) {

    gulp.task('sass', function () {
        return gulp.src('./styles/main.scss')
            .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError))            
            .pipe(cleanCSS({compatibility: 'ie9'}))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('./styles'));
    });

};