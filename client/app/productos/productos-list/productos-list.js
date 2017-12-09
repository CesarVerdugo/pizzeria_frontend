'use strict';

angular.module('pizzeriaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('productos-list', {
        url: '/productos-list/:idProducto',
        parent:'main',
        template: '<productos-list></productos-list>',
      });
  });
