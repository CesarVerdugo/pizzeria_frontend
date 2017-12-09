'use strict';

angular.module('pizzeriaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('administradores-list', {
        url: '/administradores-list',
        template: '<administradores-list></administradores-list>'
      });
  });
