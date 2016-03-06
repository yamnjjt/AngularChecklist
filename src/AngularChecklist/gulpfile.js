var gulp = require('gulp');
var del = require('del');
var ts = require('gulp-typescript');

var tsProject = ts.createProject('./scripts/tsconfig.json');

var paths = {
    npmSrc: "./node_modules/",
    libTarget: "./wwwroot/libs/",
    tsSrc: "./scripts/",
    appTarget: "./wwwroot/app/"
};


var libsToMove = [
   paths.npmSrc + '/angular2/bundles/angular2-polyfills.js',
   paths.npmSrc + '/systemjs/dist/system.src.js',
   paths.npmSrc + '/systemjs/dist/system-polyfills.js',
   paths.npmSrc + '/rxjs/bundles/Rx.js',
   paths.npmSrc + '/angular2/bundles/angular2.dev.js',
   paths.npmSrc + '/angular2/bundles/router.dev.js',
   paths.npmSrc + '/es6-shim/es6-shim.min.js',
   paths.npmSrc + '/angular2/es6/dev/src/testing/shims_for_IE.js'
];

var appsToMove = [
    paths.tsSrc + '*.html',
    paths.tsSrc + '*.css'
];

gulp.task('clean', function () {
    return del([paths.libTarget, paths.appTarget]);
});

// node packages
gulp.task('moveToLibs', ['clean'], function () {
    return gulp.src(libsToMove).pipe(gulp.dest(paths.libTarget));
});

// htmls
gulp.task('moveToApps', ['clean'], function () {
    return gulp.src(appsToMove).pipe(gulp.dest(paths.appTarget));
});

// compile ts and deploy to wwwroot
gulp.task('tscompile', ['build'],function () {

    var tsResult = tsProject.src()
        .pipe(ts(tsProject));
    
    return tsResult.js.pipe(gulp.dest(paths.appTarget));
});

gulp.task('build', ['moveToLibs', 'moveToApps']);
