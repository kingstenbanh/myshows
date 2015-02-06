'use strict';

angular
  .module('app', [
    'ngCookies',
    'ngResource',
    'ngMessages',
    'ngRoute',
    'mgcrea.ngStrap'
  ])
  .config(_config);

_config.$inject = ['$locationProvider', '$routeProvider'];

function _config($locationProvider, $routeProvider) {
  $locationProvider.html5Mode(true);

  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'MainController'
    })
    .when('/shows/:id', {
      templateUrl: 'views/detail.html',
      controller: 'DetailController'
    })
    .when('/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginController'
    })
    .when('/signup', {
      templateUrl: 'views/signup.html',
      controller: 'SignupController'
    })
    .when('/add', {
      templateUrl: 'views/add.html',
      controller: 'AddController'
    })
    .otherwise({
      redirectTo: '/'
    });
}
