var gulp = require('gulp');
var sass = require('gulp-sass');
// 编译sass
// 在命令行输入 gulp sass 启动此任务
gulp.task('sass', function () {
    return gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});
// 在命令行使用 gulp auto 启动此任务
gulp.task('auto', function () {
    gulp.watch('sass/**/*.scss', ['sass']);
});
// 使用 gulp.task('default') 定义默认任务
// 在命令行使用 gulp 启动 sass 任务和 auto 任务
gulp.task('default', ['sass', 'auto']);