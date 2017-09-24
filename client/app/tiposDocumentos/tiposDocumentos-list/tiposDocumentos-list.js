'use strict';

angular.module('pizzeriaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('tiposDocumentos-list', {
        url: '/tiposDocumentos-list',
        template: '<tipos-documentos-list></tipos-documentos-list>'
      });
  });
