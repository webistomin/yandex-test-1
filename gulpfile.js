const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');
const imagemin = require('gulp-imagemin');
const del = require('del');
const gulpSequence = require('gulp-sequence');
const sass = require('gulp-sass');
const stripCssComments = require('gulp-strip-css-comments');
const browserSync = require('browser-sync').create();

gulp.task('html', () => {
  return gulp.src('./src/**/*.html')
    .pipe(gulp.dest('./build'));
});

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: "./build"
    }
  });
});

gulp.task('css', () => {
  return gulp.src('./src/sass/main.sass')
    .pipe(sass())
    .pipe(stripCssComments())
    .pipe(autoprefixer({
      cascade: false,
      grid: false,
    }))
    .pipe(rename({
      basename: 'style',
    }))
    .pipe(gulp.dest('./build/'))
});

gulp.task('js', () => {
  return gulp.src('./src/js/*.js')
    .pipe(gulp.dest('./build/'));
});

gulp.task('images', () => {
  return gulp.src('./src/img/*')
    .pipe(imagemin([
      imagemin.svgo({
        plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
        ]
      })
    ]))
    .pipe(gulp.dest('./build/img'));
});

gulp.task('watch', () => {
  gulp.watch('src/**/*.html', ['html']);
  gulp.watch('src/sass/**/*.sass', ['css']);
  gulp.watch('src/js/**/*.js', ['js']);
  gulp.watch('src/img/*', ['images']);
});

gulp.task('clean', () => {
  return del(['build/**/*']);
});

gulp.task('default', gulpSequence(
  'clean',
  ['html', 'css', 'js', 'images'],
  'browser-sync',
  'watch'
));
