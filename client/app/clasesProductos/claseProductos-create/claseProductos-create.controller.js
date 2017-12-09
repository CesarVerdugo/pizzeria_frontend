'use strict';

(function(){

class ClaseProductosCreateComponent {
  constructor(clasesProductosService,$state) {
    this.clasesProductosService=clasesProductosService;
    this.$state=$state;
  }

  crearClaseProducto(){

  this.clasesProductosService.save(this.claseP).$promise
  .then(response=>{
    console.log("clase producto  creado");
    this.$state.go('claseProductos-list');
  }).catch(err=>{
    console.log("ERROR",err);
  })

  }


}

angular.module('pizzeriaApp')
  .component('claseProductosCreate', {
    templateUrl: 'app/clasesProductos/claseProductos-create/claseProductos-create.html',
    controller: ClaseProductosCreateComponent,
    controllerAs: 'vm'
  });

})();
