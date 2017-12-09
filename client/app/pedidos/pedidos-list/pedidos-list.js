'use strict';

angular.module('pizzeriaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('pedidos-list', {
        url: '/pedidos-list',
        template: '<pedidos-list></pedidos-list>'
      });
  });
