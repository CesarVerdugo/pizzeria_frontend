'use strict';

function departamentosService($resource,API) {
	// AngularJS will instantiate a singleton by calling "new" on this function
return $resource(API+'/api/departamentos/:id',{
  id:'@id'
},{
  update:{
    method:'PUT'
  }
})
}
departamentosService.$inject=['$resource','API']
angular.module('pizzeriaApp')
  .factory('departamentosService', departamentosService);
