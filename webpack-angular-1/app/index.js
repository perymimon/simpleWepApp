"use strict";
require('./index.scss');
module.exports = angular.module('app',[
    require('angular-route'),
    require('data/comments.data')
])

.config(function ($routeProvider,$locationProvider) {
    $routeProvider.when('/',require('./pages/main/main.js'));

    // $locationProvider.html5Mode(true);
});

