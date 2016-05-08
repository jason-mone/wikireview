var gulp = require('gulp');
var browserSync = require('browser-sync');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var cssshrink = require('gulp-cssshrink');
var autoprefixer = require('gulp-autoprefixer');
var cp = require('child_process');
var jade  = require('gulp-jade');
var shorthand = require('gulp-shorthand');
var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};
var ghPages = require('gulp-gh-pages');
const imagemin = require('gulp-imagemin');
gulp.task('imagemin', () => {
	return gulp.src('assets/img/*')
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}]
		}))
		.pipe(gulp.dest('assets/img/'));
});
// deploy to gh-pages
gulp.task('deploy', function() {
  return gulp.src(['_site/*/**/', '_site/*/'])
    .pipe(ghPages());
});
// cssshrink
gulp.task('cssshrink', function() {
    gulp.src('assets/css/*.css')
        .pipe(cssshrink())
        .pipe(gulp.dest('_site/assets/css/'));
});
//uglify
gulp.task('uglify', function(){
return gulp.src(['_site/assets/js/*.js', '_site/bower_components/webcomponentsjs/*.js'])
.pipe(uglify())
.pipe(gulp.dest(['_site/assets/js/', '_site/bower_components/webcomponentsjs/']))
});
//jade
gulp.task('jade', function(){
  return gulp.src(['_jade/*.jade', '_jade/*/*.jade'] )
  .pipe(jade())
  .pipe(gulp.dest(''));
});

gulp.task('jadeignore', function(){
  return gulp.src('_jade/*/*.html')
  .pipe(gulp.dest(''));
});
// Build the Jekyll Site
gulp.task('jekyll-build', function (done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn( 'jekyll' , ['build'], {stdio: 'inherit'})
        .on('close', done);
});

//Rebuild Jekyll & do page reload

gulp.task('jekyll-rebuild', ['jekyll-build'], function() {
    browserSync.reload();
});

// Wait for jekyll-build, then launch the Server
gulp.task('browser-sync', ['sass', 'jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        }
    });
});

// Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)

gulp.task('sass', function () {
    return gulp.src('assets/css/sass/main.sass')
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(shorthand())
        .pipe(sass({ includePaths: ['css'], outputStyle:'compressed', onError: browserSync.notify }))
        .pipe(gulp.dest('_site/assets/css/'))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('assets/css/'));
});
/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch('assets/css/**', ['sass']);
    gulp.watch(['_jade/**','_jade/*/*.html'], ['jade', 'jadeignore']);
    gulp.watch(['*.html', '_layouts/*', '_posts/*', '_config.yml', 'assets/js/*.js', 'assets/img/*', 'sitemap.xml','_data/*'], ['jekyll-rebuild']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('serve', ['watch']);
gulp.task('default', ['sass', 'jade', 'jadeignore','cssshrink', 'jekyll-rebuild', 'uglify']);
