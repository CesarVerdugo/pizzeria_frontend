'use strict';

angular.module('pizzeriaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('ciudades-list', {
        url: '/ciudades-list',
        template: '<ciudades-list></ciudades-list>'
      });
  });
