'use strict';

angular.module('pizzeriaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('administrador', {
        url: '/administrador',
        template: '<administrador></administrador>'
      });
  });
