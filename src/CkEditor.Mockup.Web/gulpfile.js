const gulp = require('gulp');
const clean = require('gulp-clean');
// const concat = require('gulp-concat');
// const cleanCss = require('gulp-clean-css');
// const uncss = require('gulp-uncss');

const jqueryFiles = [
    './node_modules/jquery/dist/jquery.js'
];

const bootstrapCssFiles = [
    './node_modules/bootstrap/dist/css/bootstrap.css',
    './node_modules/bootstrap/dist/css/bootstrap-grid.css'
];

const bootstrapJsFiles = [
    './node_modules/bootstrap/dist/js/bootstrap.js'
];

const ckEditorRemove = [
    'wwwroot/js/ckeditor4/samples',
    'wwwroot/js/ckeditor4/assets',
    'wwwroot/js/ckeditor4/vendor'
];

const viewsFilesJs = [
    'Content/js/Views/home.js'
];

gulp.task('copyViewsJs', function(){
    return gulp.src(viewsFilesJs)
               .pipe(gulp.dest('wwwroot/js/Views'));
});

gulp.task('copyBootstrapJs', function(){
    return gulp.src(bootstrapJsFiles)
               .pipe(gulp.dest('wwwroot/js/'));
});

gulp.task('copyBootstrapCss', function(){
    return gulp.src(bootstrapCssFiles)
               .pipe(gulp.dest('wwwroot/css/'));
});

gulp.task('copyJquery', function(){
    return gulp.src(jqueryFiles)
               .pipe(gulp.dest('wwwroot/js/'));
});

gulp.task('copyCKEditor', function(){
    //gulp.src('wwwroot/js/ckeditor4', {read: false})
    //           .pipe(clean());

    return gulp.src('./node_modules/ckeditor4/**/*')
               .pipe(gulp.dest('wwwroot/js/ckeditor4'));
});

gulp.task('removeFolders', function () {
    return gulp.src(ckEditorRemove, {read: false})
               .pipe(clean());
});

gulp.task('configCKEditor', function(){
    return gulp.src('Content/js/ckeditor4/**/*')
               .pipe(gulp.dest('wwwroot/js/ckeditor4'));
});

gulp.task('copyJsViews', function(){
    return gulp.src('./Content/js/Views/**/*.js')
               .pipe(gulp.dest('wwwroot/js/Views'));
});

gulp.task('default', gulp.series('copyJquery', 
                                 'copyBootstrapJs', 'copyBootstrapCss',
                                 'copyJsViews',
                                 'copyCKEditor', 'configCKEditor', 
                                 'removeFolders'));