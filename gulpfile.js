const gulp = require("gulp");
const mjml = require("gulp-mjml");
const webserver = require("gulp-webserver");

gulp.task("webserver", function() {
    gulp.src("./").pipe(
        webserver({
            livereload: true,
            directoryListing: true,
            open: true
        })
    );
});

gulp.task("c-mjml", function() {
    gulp.watch("./*.mjml", function() {
        return gulp
            .src("./*.mjml")
            .pipe(mjml())
            .pipe(gulp.dest("./html"))
            .on("error", err => {
                console.log("err");
                console.log(err);
            });
    });
});
