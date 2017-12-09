'use strict';

angular.module('pizzeriaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('productos-create', {
        url: '/productos-create',
        template: '<productos-create></productos-create>'
      });
  });
