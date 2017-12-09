'use strict';

angular.module('pizzeriaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('facturas-update', {
        url: '/facturas-update',
        template: '<facturas-update></facturas-update>'
      });
  });
