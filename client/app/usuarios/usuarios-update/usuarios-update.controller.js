'use strict';

(function(){

class UsuariosUpdateComponent {
  constructor(usuariosService,departamentosService,ciudadesService,tiposDocumentosService,$state,$stateParams) {
    this.usuariosService=usuariosService;
    this.departamentosService=departamentosService;
    this.ciudadesService=ciudadesService;
    this.tiposDocumentosService=tiposDocumentosService;
    this.$state=$state;
    this.$stateParams=$stateParams;

  }

  //inicio onInit
  $onInit(){

    this.usuariosService.get({id:this.$stateParams.idUser}).$promise
      .then(response => {
        console.log( 'Take User', response);
        this.user = response;
      })
      .catch(err => {
        console.log(err, 'Error');
      });

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

  //fin onInit

//funcion para seleccionar una ciudad segun el departamento
  getCities(){
    console.log(this.DepartamentosId.id);
    this.ciudadesService.getCities({idDepartamento:this.DepartamentosId.id}).$promise
    .then(response => {
      this.Seleccionciudad = response;
    })
    .catch(err => console.error(err));
  }

//funcion para actualizar un usuarios
updateUser() {
    this.usuariosService.update(({id:this.user.id}), this.user).$promise

      .then(response => {
        console.log('Usuario Actualizado', response);
        this.$state.go('usuarios-list');
      })
      .catch(err => {
        console.log(err, 'Error');
      });
  }


}

angular.module('pizzeriaApp')
  .component('usuariosUpdate', {
    templateUrl: 'app/usuarios/usuarios-update/usuarios-update.html',
    controller: UsuariosUpdateComponent,
    controllerAs: 'vm'
  });

})();
