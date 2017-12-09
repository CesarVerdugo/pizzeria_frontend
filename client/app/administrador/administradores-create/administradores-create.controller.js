'use strict';

(function(){

class AdministradoresCreateComponent {
  constructor(administradorService,departamentosService,ciudadesService,tiposDocumentosService,$state) {
    this.administradorService=administradorService;
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
    this.ciudadesService.getCities({idDepartamento:this.DepartamentosId.id}).$promise
    .then(response => {
      console.log('Ciudades', response);
      this.Seleccionciudad = response;
    })
    .catch(err => console.error(err));
  }

  crearAdministrador(){
  this.administrador.activo=1;
  this.administradorService.save(this.administrador).$promise
  .then(response=>{
    console.log("administrador creado");
    this.$state.go('main');
  }).catch(err=>{
    console.log("ERROR",err);
  })

  }


}

angular.module('pizzeriaApp')
  .component('administradoresCreate', {
    templateUrl: 'app/administrador/administradores-create/administradores-create.html',
    controller: AdministradoresCreateComponent,
    controllerAs: 'vm'
  });

})();
