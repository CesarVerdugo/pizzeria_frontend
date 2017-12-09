'use strict';

function administradorService($resource,API) {
	// AngularJS will instantiate a singleton by calling "new" on this function
  return $resource(API+'/api/usuarios/administrador/:id',{
    id:'@id'
  },{
    update:{
      method:'PUT'
    }
  })
}
administradorService.$inject=['$resource','API']
angular.module('pizzeriaApp')
  .factory('administradorService', administradorService);
