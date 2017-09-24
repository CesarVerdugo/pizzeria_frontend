'use strict';

function usuariosService($resource,API) {
	// AngularJS will instantiate a singleton by calling "new" on this function
return $resource(API+'/api/usuarios/:id',{
  id:'@id'
},{
  update:{
    method:'PUT'
  }
})
}
usuariosService.$inject=['$resource','API']
angular.module('pizzeriaApp')
  .factory('usuariosService', usuariosService);
