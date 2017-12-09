'use strict';

angular.module('pizzeriaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('slider', {
        url: '/slider',
        template: '<slider></slider>'
      });
  });
