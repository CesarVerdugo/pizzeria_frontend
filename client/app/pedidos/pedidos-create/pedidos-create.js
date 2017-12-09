'use strict';

angular.module('pizzeriaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('pedidos-create', {
        url: '/pedidos-create',
        template: '<pedidos-create></pedidos-create>'
      });
  });
