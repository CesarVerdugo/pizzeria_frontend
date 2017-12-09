'use strict';

angular.module('pizzeriaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('upload-file-productos', {
        url: '/upload-file-productos',
        parent:'productos-create',
        template: '<upload-file-productos></upload-file-productos>'
      });
  });
