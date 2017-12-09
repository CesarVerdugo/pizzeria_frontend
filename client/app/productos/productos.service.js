'use strict';

function productosService($resource,API) {
	// AngularJS will instantiate a singleton by calling "new" on this function
  return $resource(API+'/api/productos/:id',{
    id:'@id'
  },{
    update:{
      method:'PUT'
    },
    getProductos:{//TRAE Los productos AL SELECT EN LISTA
    url: API+'/api/productos/find',
    method:'GET',
    isArray:true
    }
  })
}

productosService.$inject=['$resource','API']
angular.module('pizzeriaApp')
  .factory('productosService', productosService);
