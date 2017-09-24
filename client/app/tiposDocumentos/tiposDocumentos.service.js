'use strict';

function tiposDocumentosService($resource,API) {
	// AngularJS will instantiate a singleton by calling "new" on this function
  return $resource(API+'/api/tipodocumentos/:id',{
    id:'@id'
  },{
    update:{
      method:'PUT'
    }


  });
  }

tiposDocumentosService.$inject=['$resource','API']
angular.module('pizzeriaApp')
  .factory('tiposDocumentosService', tiposDocumentosService);
