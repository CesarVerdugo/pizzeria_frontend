'use strict';

angular.module('pizzeriaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('empleados-list', {
        url: '/empleados-list',
        template: '<empleados-list></empleados-list>'
      });
  });
