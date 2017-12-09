'use strict';

function facturasService($resource,API) {
	// AngularJS will instantiate a singleton by calling "new" on this function
  return $resource(API+'/api/facturas/:id',{
    id:'@id'
  },{
    update:{
      method:'PUT'
    }
  })
}
facturasService.$inject=['$resource','API']
angular.module('pizzeriaApp')
  .factory('facturasService', facturasService);
