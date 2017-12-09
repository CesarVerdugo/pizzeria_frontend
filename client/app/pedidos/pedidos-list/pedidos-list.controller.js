'use strict';

(function(){

class PedidosListComponent {
  constructor(pedidosService) {
    this.pedidosService=pedidosService;
  }

  $onInit(){

    this.pedidosService.query().$promise
    .then(response=>{
      console.log("pedidos ok",response);
      this.listaPedidos=response;
    }).catch(err=>{
      console.log("ERROR",err);
    })
  }
}

angular.module('pizzeriaApp')
  .component('pedidosList', {
    templateUrl: 'app/pedidos/pedidos-list/pedidos-list.html',
    controller: PedidosListComponent,
    controllerAs: 'vm'
  });

})();
