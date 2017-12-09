'use strict';

angular.module('pizzeriaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('claseProductos-list', {
        url: '/claseProductos-list',
        template: '<clase-productos-list></clase-productos-list>'
      });
  });
