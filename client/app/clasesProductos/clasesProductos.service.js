'use strict';

function clasesProductosService($resource,API) {
	// AngularJS will instantiate a singleton by calling "new" on this function
  return $resource(API+'/api/clasesProductos/:id',{
    id:'@id'
  },{
    update:{
      method:'PUT'
    }
  })
}

clasesProductosService.$inject=['$resource','API']
angular.module('pizzeriaApp')
  .factory('clasesProductosService', clasesProductosService);
