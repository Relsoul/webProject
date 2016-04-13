/**
 * Created by soul on 2016/3/14.
 */
const gulp=require("gulp");
const sass=require("gulp-sass");
const webpack=require("gulp-webpack");

gulp.task("default",["sass:watch","es6:watch"]);

gulp.task("sass:watch",function(){
    gulp.watch("./sass/*.scss",["sass:compile"])
});

gulp.task("sass:compile",function(){
    gulp.src("./sass/main.scss")
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
});

gulp.task("es6:watch",function(){
    gulp.watch("./dev/*.js",["es6:compile"])
});

gulp.task("es6:compile",function(){
    gulp.src("./dev/*.js")
        .pipe(webpack(require("./webpack.config.js")))
        .pipe(gulp.dest("./js/"))
});