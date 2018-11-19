var gulp = require('gulp');

gulp.task('generate-service-worker', function(callback) {
  var path = require('path');
  var swPrecache = require('sw-precache');
  var rootDir = 'public';

  swPrecache.write(path.join(rootDir, 'service-worker2.js'), {
    staticFileGlobs: [
      rootDir + '/controller/*.{js,html,css,png,jpg,gif}',
      rootDir + '/css/*.{js,html,css,png,jpg,gif}',
      rootDir + '/img/*.{js,html,css,png,jpg,gif}',
      rootDir + '/js/*.{js,html,css,png,jpg,gif}',
      rootDir + '/vendor/**/*.*',
      rootDir + '/views/**/*.{js,html,css,png,jpg,gif}',
      rootDir + '/manifest.json',
      rootDir + '/*.js',
      rootDir + '/auth/login',
      rootDir + '/auth/register',
      rootDir + '/auth/new_password',
      rootDir + '/auth/reset_password',
      rootDir + '/home',
      rootDir + '/home/statistics',
      rootDir + '/home/sentMessages'
    ],
    stripPrefix: rootDir,
    navigateFallback: '/auth/login'
  }, callback);
});