const { src, dest, series, watch } = require('gulp');
const fileinclude = require('gulp-file-include');
const strip = require('gulp-strip-comments');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const minify = require('gulp-minifier');

// Gulp SASS
const sass = require('gulp-sass');

sass.compiler = require('node-sass');
var node_path = '../../../';
function scss(cb) {
  src(['src/assets/scss/*.scss'])
    // .pipe(sourcemaps.init())     // If you want to generate source map.
    .pipe(sass().on('error', sass.logError))
    // .pipe(sourcemaps.write('./'))
    .pipe(dest('public/static/css'));

  // EDITORS
  src(['src/assets/scss/editors/*.scss'])
    // .pipe(sourcemaps.init())                                           // If you want generate source map.
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))   // remove {outputStyle: 'compressed'} from saas() if do not want to minify css
    // .pipe(sourcemaps.write('./'))                                      // If you want generate source map.
    .pipe(dest('public/static/css/editors'));

  src(['src/assets/scss/libs/*.scss'])
    // .pipe(sourcemaps.init())                                           // If you want generate source map.
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))   // remove {outputStyle: 'compressed'} from saas() if do not want to minify css
    // .pipe(sourcemaps.write('./'))                                      // If you want generate source map.
    .pipe(dest('public/static/css/libs'));

  // SKINS
  src(['src/assets/scss/skins/*.scss'])
    // .pipe(sourcemaps.init())               // If you want generate source map.
    .pipe(sass().on('error', sass.logError))  // uses {outputStyle: 'compressed'} in saas() for minify css
    // .pipe(sourcemaps.write('./'))          // If you want generate source map.
    .pipe(dest('public/static/css/skins'));

  cb();
}


function js_scripts(cb) {
  src(['src/assets/js/*.js', '!js/bundles.js'])
    // .pipe(uglify())                        // If you minify the code.
    .pipe(dest('public/static/js'));

  src(['src/assets/js/charts/*.js'])
    // .pipe(uglify())                        // If you minify the code.
    .pipe(dest('public/static/js/charts'));

  src(['src/assets/js/apps/*.js'])
    // .pipe(uglify())                        // If you minify the code.
    .pipe(dest('public/static/js/apps'));

  cb();
}

function js_bundle(cb) {
  src('src/assets/js/bundles.js')
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file',
      context: { build: 'public', nodeRoot: node_path }
    }))
    .pipe(strip())
    .pipe(minify({ minify: true, minifyJS: { sourceMap: false } }))     // Disable, if you dont want to minify bundle file.
    .pipe(dest('public/static/js'));

  src(['src/assets/js/libs/**', '!src/assets/js/libs/editors/skins/**'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file',
      context: { build: 'public', nodeRoot: node_path }
    }))
    .pipe(strip())
    .pipe(minify({ minify: true, minifyJS: { sourceMap: false } }))     // Disable, if you dont want to minify bundle file.
    .pipe(dest('public/static/js/libs'));

  src('src/assets/js/libs/editors/skins/**').pipe(dest('public/static/js/libs/editors/skins'));

  cb();
}

exports.build = series(scss, js_scripts, js_bundle);

exports.develop = function () {
  watch(['src/assets/scss/*.scss', 'src/assets/scss/**'], scss)
  watch(['src/assets/js/*.js', 'src/assets/js/charts/*.js', 'src/assets/js/apps/*.js', '!src/assets/js/bundles.js'], js_scripts)
  watch(['src/assets/js/libs/**', 'src/assets/js/bundles.js'], js_bundle)
};