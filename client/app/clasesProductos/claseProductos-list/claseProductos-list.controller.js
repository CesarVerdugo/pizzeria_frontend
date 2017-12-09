'use strict';

(function(){

class ClaseProductosListComponent {
  constructor(clasesProductosService) {
    this.clasesProductosService=clasesProductosService;
  }

$onInit(){

this.clasesProductosService.query().$promise
.then(response=>{
  console.log("Clases Productos ok",response);
  this.ListaClaseProductos=response;
}).catch(err=>{
  console.log("ERROR",err);
})

}

}

angular.module('pizzeriaApp')
  .component('claseProductosList', {
    templateUrl: 'app/clasesProductos/claseProductos-list/claseProductos-list.html',
    controller: ClaseProductosListComponent,
    controllerAs: 'vm'
  });

})();
