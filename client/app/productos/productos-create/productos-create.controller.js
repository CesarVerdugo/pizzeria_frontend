'use strict';

(function(){

class ProductosCreateComponent {
  constructor(productosService,clasesProductosService, Upload,API) {
    this.productosService=productosService;
    this.clasesProductosService=clasesProductosService;
    this.Upload = Upload;
    this.API=API;
  }
$onInit(){
  this.clasesProductosService.query().$promise
  .then(response=>{
    console.log("clase de producto ok",response);
    this.ListaClaseProductos=response;
  }).catch(err=>{
    console.log("ERROR",err);
  })
}





crearProducto(){



this.productosService.save(this.producto).$promise
.then(response=>{

  this.Upload.upload({
      url: this.API + '/api/productos/upload',
      method:'POST',
      data: {
        file: this.file,
        idProducto:response.id
       }
  }).then(resp =>  {
      console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
      console.log('OK');
  }, function(resp) {
      console.log('Error status: ' + resp.status);
  }, function(evt) {
      var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
      console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
  });
  console.log("producto creado con exito",response);

}).catch(err=>{
  console.log("ERROR",err);
})

}



}

angular.module('pizzeriaApp')
  .component('productosCreate', {
    templateUrl: 'app/productos/productos-create/productos-create.html',
    controller: ProductosCreateComponent,
    controllerAs: 'vm'
  });

})();
