'use strict';

(function(){

class EmpleadosCreateComponent {
  constructor(empleadosService,departamentosService,ciudadesService,tiposDocumentosService,$state) {
    this.empleadosService=empleadosService;
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

crearEmpleado(){
this.empleado.activo=1;
//this.empleado.rolList[0].id="EMPLEADO";
//this.empleado.rolList=[{id:"EMPLEADO"}];
this.empleadosService.save(this.empleado).$promise
.then(response=>{
  console.log("empleado creado");
  this.$state.go('usuarios-list');
}).catch(err=>{
  console.log("ERROR",err);
})

}

}

angular.module('pizzeriaApp')
  .component('empleadosCreate', {
    templateUrl: 'app/empleados/empleados-create/empleados-create.html',
    controller: EmpleadosCreateComponent,
    controllerAs: 'vm'
  });

})();
