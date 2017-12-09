'use strict';

angular.module('pizzeriaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('empleado', {
        url: '/empleado',
        template: '<empleado></empleado>'
      });
  });
