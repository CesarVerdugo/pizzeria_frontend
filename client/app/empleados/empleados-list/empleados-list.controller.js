'use strict';

(function(){

class EmpleadosListComponent {
  constructor(empleadosService) {
    this.empleadosService=empleadosService;
  }

$onInit(){

this.empleadosService.query().$promise
.then(response=>{
  console.log("empleados ok", response);
  this.listaEmpleados=response;
}).catch(err=>{
  console.log("ERRROR",err);
})


}



}

angular.module('pizzeriaApp')
  .component('empleadosList', {
    templateUrl: 'app/empleados/empleados-list/empleados-list.html',
    controller: EmpleadosListComponent,
    controllerAs: 'vm'
  });

})();
