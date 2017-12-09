'use strict';

(function(){

class FacturaListComponent {
  constructor(facturasService) {
    this.facturasService=facturasService;
  }

$onInit(){

this.facturasService.query().$promise
.then(response=>{
  console.log("facturas ok",response);
  this.listaFacturas=response;
}).catch(err=>{
  console.log("ERROR",err);
})

}


}

angular.module('pizzeriaApp')
  .component('facturaList', {
    templateUrl: 'app/facturas/factura-list/factura-list.html',
    controller: FacturaListComponent,
    controllerAs: 'vm'
  });

})();
