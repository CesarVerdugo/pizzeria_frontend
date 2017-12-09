'use strict';

angular.module('pizzeriaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('claseProductos-create', {
        url: '/claseProductos-create',
        template: '<clase-productos-create></clase-productos-create>'
      });
  });
