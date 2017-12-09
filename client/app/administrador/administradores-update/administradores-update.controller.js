'use strict';

(function(){

class AdministradoresUpdateComponent {
  constructor(administradorService,departamentosService,ciudadesService,tiposDocumentosService,$state,$stateParams) {
    this.administradorService=administradorService;
    this.departamentosService=departamentosService;
    this.ciudadesService=ciudadesService;
    this.tiposDocumentosService=tiposDocumentosService;
    this.$state=$state;
    this.$stateParams=$stateParams;
  }
//inicio onInit
  $onInit(){
    this.administradorService.get({id:this.$stateParams.idAdmin}).$promise
        .then(response => {
          console.log( 'editar Administrador ', response);
          this.Administrador = response;
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
// fin onInit
updateAdmin() {
    this.administradorService.update(({id:this.administrador.id}), this.administrador).$promise

      .then(response => {
        console.log('Usuario Actualizado', response);
        this.$state.go('usuarios-list');
      })
      .catch(err => {
        console.log(err, 'Error');
      });
  }
  getCities(){
    console.log(this.DepartamentosIdd.id);
    this.ciudadesService.getCities({idDepartamento:this.DepartamentosIdd.id}).$promise
    .then(response => {
      this.Seleccionciudad = response;
    })
    .catch(err => console.error(err));
  }


}

angular.module('pizzeriaApp')
  .component('administradoresUpdate', {
    templateUrl: 'app/administrador/administradores-update/administradores-update.html',
    controller: AdministradoresUpdateComponent,
    controllerAs: 'administradoresUpdateCtrl'
  });

})();
