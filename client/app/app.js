'use strict';

angular.module('pizzeriaApp', ['pizzeriaApp.constants', 'ngCookies', 'ngResource', 'ngSanitize',
    'ui.router', 'ui.bootstrap', 'satellizer','ngFileUpload','ngImgCrop',
        'ngFileSaver','webcam','ngMap','ngMaterial',
  ])
  .constant('API','http://localhost:8080/Pizzas')

  .config(function(API, $authProvider,$urlRouterProvider, $locationProvider){
      $authProvider.loginUrl = API + '/api/auth/login';
      $authProvider.tokenName = 'token';
      $authProvider.tokenPrefix = 'pizzeriaApp';

      $urlRouterProvider.otherwise('/');

      $locationProvider.html5Mode(true);
    });
