'use strict';

angular.module('pizzeriaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('forbidden', {
        url: '/forbidden',
        template: '<forbidden></forbidden>'
      });
  });
