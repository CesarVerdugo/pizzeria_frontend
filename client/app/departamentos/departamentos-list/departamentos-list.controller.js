'use strict';

(function(){

class DepartamentosListComponent {
  constructor(departamentosService) {
    this.departamentosService=departamentosService;
  }

$onInit(){
this.departamentosService.query().$promise
.then(response=>{
  console.log("departamentos ok",response);
  this.listaDepartamentos=response;
}).catch(err=>{
  console.log("ERROR",err);
})

}

}

DepartamentosListComponent.$inject=['departamentosService']
angular.module('pizzeriaApp')
  .component('departamentosList', {
    templateUrl: 'app/departamentos/departamentos-list/departamentos-list.html',
    controller: DepartamentosListComponent,
    controllerAs: 'vm'
  });

})();
