'use strict';

(function(){

class FacturaCreateComponent {
  constructor(facturasService,pedidosService,empleadosService,usuariosService,$state,authService) {
    this.pedidosService=pedidosService;
    this.empleadosService=empleadosService;
    this.usuariosService=usuariosService;
    this.facturasService=facturasService;
    this.$state=$state;
    this.authService=authService;
    this.factura={
      idEmpleado:{
        id:this.authService.idUsuario()
      }
    }
  }

//inicio onInit
$onInit(){
this.pedidosService.query().$promise
.then(response=>{
  console.log("pedidos ok",response);
  this.listaPedidos=response;
}).catch(err=>{
  console.log("ERROR",err);
});

this.empleadosService.query().$promise
.then(response=>{
  console.log("empleados ok",response);
  this.listaEmpleados=response;
}).catch(err=>{
  console.log("ERROR",err);
});

this.usuariosService.query().$promise
.then(response=>{
  console.log("usuarios ok",response);
  this.listaUsuarios=response;
}).catch(err=>{
  console.log("ERROR",err);
});



}
//fin onInit

crearFactura(){

//  this.factura.pedidosId.id=2;
//  this.factura.empleadoId.id=10;
  this.facturasService.save(this.factura).$promise
  .then(response=>{
    console.log("factura ok",response);


    this.$state.go('main');
  }).catch(err=>{
    console.log("ERROR",err);
  });

}



}

angular.module('pizzeriaApp')
  .component('facturaCreate', {
    templateUrl: 'app/facturas/factura-create/factura-create.html',
    controller: FacturaCreateComponent,
    controllerAs: 'vm'
  });

})();
