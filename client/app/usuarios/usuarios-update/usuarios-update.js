'use strict';

angular.module('pizzeriaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('usuarios-update', {
        url: '/usuarios-update/:idUser',
        template: '<usuarios-update></usuarios-update>'
      });
  });
