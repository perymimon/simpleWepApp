'use strict';
var webpack = require('webpack'),
    path = require('path'),
    config = require('./webpack.config.js');

config.output.filename = 'bundle.min.js';
config.plugins.push( new webpack.optimize.UglifyJsPlugin({minimize:true}) );
delete config.devtool;

module.exports = config;

