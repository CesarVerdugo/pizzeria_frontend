'use strict';

(function(){

class UsuariosCreateComponent {
  constructor(usuariosService,departamentosService,ciudadesService,tiposDocumentosService,$state) {
    this.usuariosService=usuariosService;
    this.departamentosService=departamentosService;
    this.ciudadesService=ciudadesService;
    this.tiposDocumentosService=tiposDocumentosService;
    this.$state=$state;
  }

  $onInit(){
    this.tiposDocumentosService.query().$promise
    .then(response=>{
      console.log("tipodocumentos ok",response);
      this.DocumentoSeleccionado=response;
    }).catch(err=>{
      console.log("ERROR",err);
    });

    this.departamentosService.query().$promise
    .then(response=>{
      console.log("departamentos ok",response);
      this.departamentoSeleccionado=response;
    }).catch(err=>{
      console.log("ERROR",err);
    });

    this.ciudadesService.query().$promise
    .then(response=>{
      console.log("ciudades ok",response);
      this.ciudadSeleccionada=response;
    }).catch(err=>{
      console.log("ERROR",err);
    });

  }

  getCities(){
    console.log(this.departamentosId);
    this.ciudadesService.getCities({departamentosId:this.departamentosId}).$promise
    .then(response => {
      console.log('Ciudades', response);
      this.Seleccionciudad = response;
    })
    .catch(err => console.error(err));
  }

crearUsuario(){
this.usuario.activo=1;
this.usuario.rolesList = [{id:"ADMIN"}];
console.log(this.usuario.tiposDocumentosId.id);
console.log(this.usuario);
this.usuariosService.save(this.usuario).$promise
.then(response=>{
  console.log("usuario creado");
  this.$state.go('main');
}).catch(err=>{
  console.log("ERROR",err);
})

}






}
UsuariosCreateComponent.$inject=['usuariosService','departamentosService','ciudadesService','tiposDocumentosService','$state']
angular.module('pizzeriaApp')
  .component('usuariosCreate', {
    templateUrl: 'app/usuarios/usuarios-create/usuarios-create.html',
    controller: UsuariosCreateComponent,
    controllerAs: 'vm'
  });

})();
