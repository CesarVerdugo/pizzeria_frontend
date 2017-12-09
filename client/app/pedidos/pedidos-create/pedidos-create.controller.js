'use strict';

(function(){

class PedidosCreateComponent {
  constructor(pedidosService,usuariosService,productosService,clasesProductosService,authService,facturasService) {
    this.pedidosService=pedidosService;
    this.usuariosService=usuariosService;
    this.productosService=productosService;
    this.clasesProductosService=clasesProductosService;
    this.facturasService=facturasService;
    this.authService=authService;
    this.listaProd=[];
    this.factura={
      idEmpleado:{
        id:this.authService.idUsuario()
      }
    }
    this.pedido={
      facturasId:{
        id:null
      }
    }
  }
//inicio onInit
$onInit(){

this.usuariosService.query().$promise
.then(response=>{
  console.log("usuarios ok",response);
  this.ListaUsuarios=response;
}).catch(err=>{
  console.log("ERROR",err);
});


this.productosService.query().$promise
.then(response=>{
  console.log("productos ok",response);
  this.listaProductos=response;
}).catch(err=>{
  console.log("ERROR",err);
});


this.clasesProductosService.query().$promise
.then(response=>{
  console.log("clases productos ok",response);
  this.listaClaseProductos=response;
}).catch(err=>{
  console.log("ERROR",err);
});


this.facturasService.query().$promise
.then(response=>{
  console.log("clases facturas ok",response);
  this.listaFacturas=response;
}).catch(err=>{
  console.log("ERROR",err);
});

}
//fin onInit



getProductos(){
  console.log(this.clasesProductosId);
  this.productosService.getProductos({idClaseProducto:this.clasesProductosId.id}).$promise
  .then(response => {
    console.log('productos', response);
    this.SeleccionProducto = response;
    console.log("producto ", this.SeleccionProducto.id);

  })
  .catch(err => console.error(err));
}

mostrarPedido(){
  for (var i = 0; i < this.SeleccionProducto.length; i++) {
    if (this.SeleccionProducto[i].id==this.productosId) {
      this.nuevoProducto=this.SeleccionProducto[i];
      console.log("nuevo producto = ",this.nuevoProducto);
    }
  }
}

valorTotal(){

  console.log(this.pedido.cantidad);

  console.log( "quiero saber = ",this.nuevoProducto.precio);
  this.valorT=this.nuevoProducto.precio * this.cantidad;


}

/*buscar(){
  for (var i = 0; i < this.listaProductos.length; i++) {
  if (this.buscarP==this.listaProductos[i].nombre) {
    this.encontro=this.listaProductos[i];
    console.log("encontro =",this.encontro);
  }
  }
}
*/

addProducto(){

this.pedido={
  cantidad:this.cantidad,
  productosId:{
  id: this.productosId,
  nombre:this.nuevoProducto.nombre,
  precio:this.nuevoProducto.precio
}};

this.listaProd.push(this.pedido);
console.log(this.listaProd);
}

removerProducto(pedido){
this.fila= this.listaProd.indexOf(pedido);
this.listaProd.splice(this.fila,1);
}







crearPedido(){
  this.facturasService.save(this.factura).$promise
  .then(response=>{
    console.log("factura realizada",response);
this.facturaR = response;
    for (var i = 0; i < this.listaProd.length; i++) {
      this.listaProd[i].facturasId=this.facturaR;
      this.pedido=this.listaProd[i];
      console.log("pedido",this.pedido);
      this.pedidosService.save(this.pedido).$promise
      .then(data=>{
        console.log("pedido realizado",data);

      }).catch(err=>{
        console.log("ERROR",err);
      });
    }
  }).catch(err=>{
    console.log("ERROR",err);
  });


}

/*
crearFactura(){
  for (var i = 0; i < this.listaProd.length; i++) {
    this.factura=this.listaProd[i];
    this.factura.empleadoId=10;

  }

}

*/


}

angular.module('pizzeriaApp')
  .component('pedidosCreate', {
    templateUrl: 'app/pedidos/pedidos-create/pedidos-create.html',
    controller: PedidosCreateComponent,
    controllerAs: 'vm'
  });

})();
