'use strict';

function empleadosService($resource,API) {
	// AngularJS will instantiate a singleton by calling "new" on this function
  return $resource(API+'/api/usuarios/empleados/:id',{
    id:'@id'
  },{
    update:{
      method:'PUT'
    }
  })
}
empleadosService.$inject=['$resource','API']
angular.module('pizzeriaApp')
  .factory('empleadosService', empleadosService);
