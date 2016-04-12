/**
 * Created by soul on 2016/3/14.
 */
const gulp=require("gulp");
const sass=require("gulp-sass");
const webpack=require("gulp-webpack");
const livereload=require("gulp-livereload");
const gulpif = require('gulp-if');
const sprity=require("sprity");


gulp.task("default",["sass:watch","es6:watch"]);

gulp.task("sass:watch",function(){
    livereload.listen();
    gulp.watch("dev/**/*.scss",["sass:compile"]);
    gulp.watch("index.html",["html:reload"]);
    gulp.watch("dev/slice/*.png",["spriter"])
});

gulp.task("html:reload",function(){
    gulp.src("index.html").pipe(livereload())
});


gulp.task("spriter",function(cb){
    sprity.src({
        src:"./dev/slice/*.png",
        style:"./slice.scss",
        processor:"sass",
        "style-type":"scss"
    }).pipe(gulpif("*.png",gulp.dest("./build/images"),gulp.dest("./dev/sass/sprite-sass")));

});

gulp.task("sass:compile",function(){
    gulp.src("./dev/output.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./build/css'))
        .pipe(livereload());

});

gulp.task("es6:watch",function(){
    gulp.watch(["dev/**/*.vue","dev/**/*.js"],["es6:compile"]);

});

gulp.task("es6:compile",function(){
    gulp.src("dev/output.js")
        .pipe(webpack(require("./webpack.config.js")))
        .pipe(gulp.dest("./build/js/"))
        .pipe(livereload())
});