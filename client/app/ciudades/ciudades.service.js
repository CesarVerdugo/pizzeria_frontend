'use strict';

function ciudadesService($resource,API) {
	// AngularJS will instantiate a singleton by calling "new" on this function
  return $resource(API+'/api/ciudades/:id',{
    id:'@id'
  },{
    update:{
      method:'PUT'
    },

  getCities:{//TRAE LAS CIUDADES AL SELECT EN LISTA
  url: API+'/api/ciudades/find',
  method:'GET',
  isArray:true
  }
});
}
ciudadesService.$inject=['$resource','API']
angular.module('pizzeriaApp')
  .factory('ciudadesService', ciudadesService);
