'use strict';

angular.module('pizzeriaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('administradores-update', {
        url: '/administradores-update',
        template: '<administradores-update></administradores-update>'
      });
  });
