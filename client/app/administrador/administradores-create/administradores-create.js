'use strict';

angular.module('pizzeriaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('administradores-create', {
        url: '/administradores-create',
        template: '<administradores-create></administradores-create>'
      });
  });
