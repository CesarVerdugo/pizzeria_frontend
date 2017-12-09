'use strict';

angular.module('pizzeriaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('factura-create', {
        url: '/factura-create:idEmpleado',
        template: '<factura-create></factura-create>'
      });
  });
