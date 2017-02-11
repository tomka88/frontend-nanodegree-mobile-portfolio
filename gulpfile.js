var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concatify = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    imageop = require('gulp-image-optimization'),
    inject = require('gulp-inject'),
    minifyCSS = require('gulp-minify-css'),
    minifyhtml = require('gulp-minify-html'),
    responsive = require('gulp-responsive'),
    critical = require('critical');

var paths = {
 scripts: ['scripts/*.js'],
 content: ['index.html', 'ptoject-2048.html', 'project-mobile.html', 'project-webperf.html'], 
 styles: ['./css/.css'],
 images: ['./images/*'],
};

// Concats & minifies js files and outputs them to dist/js/app.js 
gulp.task('scripts', function() {
    return gulp.src(paths.scripts)
        .pipe(sourcemaps.init())
            .pipe(uglify())
            .pipe(concatify('perfmatters.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/js/'));
});

//Minifies and concats the pizza project's js files
gulp.task('pizza-scripts', function() {
    return gulp.src(['./views/js/*.js'])
        .pipe(sourcemaps.init())
            .pipe(uglify())
            .pipe(concatify('main.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/views/js/'));
});

// Minifies our HTML files and outputs them to dist/*.html
gulp.task('content', function() {
    return gulp.src(paths.content)
        .pipe(minifyhtml({
            empty: true,
            quotes: true
        }))
        .pipe(gulp.dest('./dist'));
});

// Minifies Pizza project's HTML files and outputs them to dist/views/*.html
gulp.task('pizza-content', function() {
    return gulp.src(['./views/*.html'])
        .pipe(minifyhtml({
            empty: true,
            quotes: true
        }))
        .pipe(gulp.dest('./dist/views/'));
});


//Minifies CSS
gulp.task('styles', function(){
    gulp.src('css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('./dist/css/'));
});

// gulp.task('critical', function(cb){
//     return gulp.src(['./*.html'])
//         .pipe(critical({
//             base: './dist/',
//             inline: true,
//             css: ['dist/css/style.css'],
//             minify: true,
//             width: 320,
//             height: 480
//         }))
//         .pipe(gulp.dest('./dist'));
// });

//Minifies pizza CSS
gulp.task('pizza-styles', function(){
    gulp.src(['./views/css/*.css'])
        .pipe(minifyCSS())
        .pipe(gulp.dest('./dist/views/css/'));
});


gulp.task('images', function(cb) {
    return gulp.src(paths.images)
        .pipe(imageop({
            optimizationLevel: 10,
            progressive: true,
            interlaced: true}))
        .pipe(gulp.dest('./dist/images'));
});

gulp.task('pizza-images', function(cb) {
    return gulp.src(['./views/images/*'])
        .pipe(imageop({
            optimizationLevel: 10,
            progressive: true,
            interlaced: true}))
        .pipe(gulp.dest('./dist/views/images/'));
});

gulp.task('pizza-resize', function(cb) {
    return gulp.src(['./views/images/*.jpg'])
        .pipe(responsive({
            '*.jpg': {
                width: 100,
                quality: 50,
                rename: 'pizzeria_100w.jpg',
                compressionLevel: 6
            }
        }))
        .pipe(gulp.dest('./dist/views/images/'));
});


gulp.task('default', ['scripts', 'content', 'styles' ,'images', 'pizza-scripts', 'pizza-content', 'pizza-styles', 'pizza-images', 'pizza-resize']);