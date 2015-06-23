// package metadata file for Meteor.js

/* jshint strict:false */
/* global Package:true */

Package.describe({
  name: 'sujitsagar:bootstrap',  // http://atmospherejs.com/twbs/bootstrap
  summary: 'The most popular front-end framework for developing responsive, mobile first projects on the web.',
  version: '1.1.1',
  git: 'https://github.com/sujitsagar/bootstrap.git'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0');
  api.use('jquery', 'client');
  api.addFiles([
    /*'dista/fonts/glyphicons-halflings-regular.eot',
    'dista/fonts/glyphicons-halflings-regular.svg',
    'dista/fonts/glyphicons-halflings-regular.ttf',
    'dista/fonts/glyphicons-halflings-regular.woff',
    'dista/fonts/glyphicons-halflings-regular.woff2',*/
    'dista/css/bootstrap.css',
    'dista/js/bootstrap.js'
  ], 'client');
});
