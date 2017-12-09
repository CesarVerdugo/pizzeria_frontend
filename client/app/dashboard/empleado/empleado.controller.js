'use strict';

(function(){

class EmpleadoComponent {
  constructor() {
    this.message = 'Hello';
  this.mesas=[{
    numero:"mesa 1",
    estado:"disponible"

  },
  {
    numero:"mesa 2",
    estado:"disponible"

  },
  {
    numero:"mesa 3",
    estado:"disponible"

  },
  {
    numero:"mesa 4",
    estado:"disponible"

  }]
  }
  $onInit(){
    console.log(this.mesas);
  }
}

angular.module('pizzeriaApp')
  .component('empleado', {
    templateUrl: 'app/dashboard/empleado/empleado.html',
    controller: EmpleadoComponent,
    controllerAs: 'vm'
  });

})();
