'use strict';

(function(){

class EmpleadosUpdateComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('pizzeriaApp')
  .component('empleadosUpdate', {
    templateUrl: 'app/empleados/empleados-update/empleados-update.html',
    controller: EmpleadosUpdateComponent,
    controllerAs: 'empleadosUpdateCtrl'
  });

})();
