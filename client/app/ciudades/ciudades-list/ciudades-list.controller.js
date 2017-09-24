'use strict';

(function(){

class CiudadesListComponent {
  constructor(ciudadesService) {
    this.ciudadesService=ciudadesService;
  }


  $onInit(){
  this.ciudadesService.query().$promise
  .then(response=>{
    console.log("ciudades ok",response);
    this.listaCiudades=response;
  }).catch(err=>{
    console.log("ERROR",err);
  })

  }
}
CiudadesListComponent.$inject=['ciudadesService']
angular.module('pizzeriaApp')
  .component('ciudadesList', {
    templateUrl: 'app/ciudades/ciudades-list/ciudades-list.html',
    controller: CiudadesListComponent,
    controllerAs: 'vm'
  });

})();
