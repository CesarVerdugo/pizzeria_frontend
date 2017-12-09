'use strict';

angular.module('pizzeriaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('empleados-create', {
        url: '/empleados-create',
        template: '<empleados-create></empleados-create>'
      });
  });
