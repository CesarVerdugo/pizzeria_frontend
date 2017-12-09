'use strict';

angular.module('pizzeriaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('empleados-update', {
        url: '/empleados-update',
        template: '<empleados-update></empleados-update>'
      });
  });
