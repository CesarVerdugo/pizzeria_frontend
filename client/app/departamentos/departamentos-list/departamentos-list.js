'use strict';

angular.module('pizzeriaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('departamentos-list', {
        url: '/departamentos-list',
        template: '<departamentos-list></departamentos-list>'
      });
  });
