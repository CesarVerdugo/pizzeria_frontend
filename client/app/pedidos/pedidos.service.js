'use strict';

function pedidosService($resource,API) {
	// AngularJS will instantiate a singleton by calling "new" on this function
  return $resource(API+'/api/pedidos/:id',{
    id:'@id'
  },{
    update:{
      method:'PUT'


    }
  })
}

pedidosService.$inject=['$resource','API']
angular.module('pizzeriaApp')
  .factory('pedidosService', pedidosService);
