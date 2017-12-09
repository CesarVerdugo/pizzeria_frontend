'use strict';

(function(){

class ProductosListComponent {
  constructor(productosService,$stateParams) {
    this.productosService=productosService;
    this.pizza=false;
    this.click = false;
    this.$stateParams = $stateParams;
    this.estilos=[
      "nuevo",
      "viejo",
      "normal"
    ];

    this.juego=[
      "n",
      "u",
      "m",
      "e",
      "r",
      "o"
    ];
    this.completo=[];
    this.mal=0;
    this.si=false;
    this.aciertos=0;
  }


probar(){
  for (var i = 0; i < this.juego.length; i++) {
    if (this.palabra==this.juego[i]) {
      this.letra=this.juego[i];
      //this.completo.push(this.juego[i]);
      this.completo[i]=this.juego[i];
      console.log(this.completo);
      this.si=true;
    }

  }

  if(this.si==false){
    this.mal=this.mal+20;
    console.log("fallidos = ",this.mal);
  }else{this.aciertos=this.aciertos+1;
  console.log("aciertos ", this.aciertos);}
}

listo(){
  for (var i = 0; i < this.completo.length; i++) {
  console.log("listo",this.completo[i]);

  }
}

termino(){
  if(this.aciertos==6){
    this.mensaje=="ganaste";
  }
}


  cambiar(){
this.numero=1;
}

cambiar1(){
  this.numero=0;
}

cambiar2(){
  this.numero=2;
}

$onInit(){
  console.log(this.$stateParams.idProducto);
this.productosService.getProductos({clasesProductosId:this.$stateParams.idProducto}).$promise
.then(response=>{
  console.log("productos ok",response);
  this.listaProductos=response;
}).catch(err=>{
  console.log("ERROR",err);
})

}





tipoProducto(){
for (var i = 0; i < this.listaProductos.length; i++) {
  if(this.listaProductos[i].clasesProductosId.id==1){

this.pizza=true;
console.log("listo=",this.pizza);
  }
}

}



}

angular.module('pizzeriaApp')
  .component('productosList', {
    templateUrl: 'app/productos/productos-list/productos-list.html',
    controller: ProductosListComponent,
    controllerAs: 'vm'
  });

})();
