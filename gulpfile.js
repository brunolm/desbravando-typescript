const gulp = require('gulp');
const shell = require('gulp-shell');
const rimraf = require('rimraf');

gulp.task('build', shell.task('npm run build'));
gulp.task('build-watch', shell.task('npm run build-watch'));
gulp.task('clean', shell.task('npm run clean'));
gulp.task('rebuild', shell.task('npm run rebuild'));
