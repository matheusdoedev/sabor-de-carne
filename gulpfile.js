const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');

const filesCSS = [
  'src/css/settings.css',
  'node_modules/bootstrap/dist/css/bootstrap-grid.min.css',
  'src/css/tools.css',
  'src/css/generic.css',
  'src/css/elements.css',
  'src/css/objects.css',
  'src/css/components.css',
  'src/css/origamid-menu.css',
  'src/css/simple-anime.css',
];

const filesHTML = [
  'src/index.html',
  'src/churrascaria.html',
  'src/menu.html',
  'src/sobre.html',
  'src/contato.html',
];

gulp.task('styles', () =>
  gulp
    .src(filesCSS)
    .pipe(autoprefixer())
    .pipe(concat('main.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'))
);

gulp.task('pages', () =>
  gulp
    .src(filesHTML)
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true,
      })
    )
    .pipe(gulp.dest('dist'))
);
