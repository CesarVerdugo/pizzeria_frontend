'use strict';

angular.module('pizzeriaApp', ['pizzeriaApp.constants', 'ngCookies', 'ngResource', 'ngSanitize',
    'ui.router', 'ui.bootstrap', 'satellizer'
  ])
  .constant('API','http://localhost:8080/Pizzeria')

  .config(function(API, $authProvider){
      $authProvider.loginUrl = API + '/api/auth/login';
      $authProvider.tokenName = 'token';
      $authProvider.tokenPrefix = 'pizzeriaApp';
    })

  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);


  });
