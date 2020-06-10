//转译JS任务
//转译Less任务
//默认任务

const gulp = require("gulp");
const gutil = require("gulp-util");

const {
  PluginError
} = gutil;

gulp.task("webpack", () => {
  const webpack = require("webpack-stream");
  const config = require("./webpack.config.js");
  delete config.output.path;
  return gulp.src("./js/**/*.js")
    .pipe(webpack(config))
    .on("error", err => {
      gutil.log(err);
    })
    .pipe(gulp.dest("../compile/js"));
});

gulp.task("less", () => {
  const less = require("gulp-less");
  return gulp.src("./less/*.less")
    .pipe(less({
      compress: false
    }))
    .on("error", err => {
      throw new PluginError("less", err);
    })
    .pipe(gulp.dest("../compile/css/"));
});

gulp.task("default", gulp.parallel("webpack", "less"));

gulp.task("watch", () => {
  gulp.watch("less/**/*.less", ["less"]);
  gulp.watch("js/**/*.js", ["webpack"]);
});