var typescript = require('gulp-tsc');
var gulp = require('gulp');
gulp.task('compile',function(){
    return gulp.src(['./ts/**/*.ts']).pipe(typescript({
        target:'es5',          //将typescript转换成es5标准的js文件,也可以是es6,但是这个node版本不支持
        module: 'commonjs',   //模块使用nodejs的标准
    })).pipe(gulp.dest('./es5/'))
});
