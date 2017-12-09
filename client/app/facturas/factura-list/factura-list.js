'use strict';

angular.module('pizzeriaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('factura-list', {
        url: '/factura-list',
        template: '<factura-list></factura-list>'
      });
  });
