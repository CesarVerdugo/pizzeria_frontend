'use strict';

angular.module('pizzeriaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('productos-update', {
        url: '/productos-update',
        template: '<productos-update></productos-update>'
      });
  });
