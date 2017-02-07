var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    concatify = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    imageop = require('gulp-image-optimization'),
    inject = require('gulp-inject'),
    minifyCSS = require('gulp-minify-css');
    minifyhtml = require('gulp-minify-html');

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

// Minifies our HTML files and outputs them to dist/*.html
gulp.task('content', function() {
    return gulp.src(paths.content)
        .pipe(minifyhtml({
            empty: true,
            quotes: true
        }))
        .pipe(gulp.dest('./dist'));
});

//Minifies CSS
gulp.task('styles', function(){
    gulp.src('css/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('./dist/css/'));
});

// Optimizes our image files and outputs them to dist/image/*
//gulp.task('images', function() {
//    return gulp.src(paths.images)
//                .pipe(imageop({
//                    optimizationLevel: 5
//                }))
//                .pipe(gulp.dest('./dist/images'));
//});

gulp.task('images', function(cb) {
    return gulp.src(paths.images)
        .pipe(imageop({
            optimizationLevel: 5,
            progressive: true,
            interlaced: true}))
        .pipe(gulp.dest('./dist/images'));
});


gulp.task('default', ['scripts', 'content', 'styles','images']);