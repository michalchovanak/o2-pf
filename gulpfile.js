var gulp = require("gulp");
var less = require("gulp-less");

gulp.task("less", function (cb) {
    gulp.src("style.less")
        .pipe(less())
        .pipe(
            gulp.dest(function (f) {
                return f.base;
            })
        );
    cb();
});

gulp.task(
    "default",
    gulp.series("less", function (cb) {
        gulp.watch("assets/css/*.less", gulp.series("less"));
        cb();
    })
);
