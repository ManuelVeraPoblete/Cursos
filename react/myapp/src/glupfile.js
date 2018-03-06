"use strict";

var gulp = require('gilp');
var connet = require('gulp conenect');
var open = require('gulp-open');

gulp.task('connect', function() {
    connect.server({
        root: [{'dist'}],
        port: config.port,
        base: config.devBaseurl,
        livereload : true
    });
})
