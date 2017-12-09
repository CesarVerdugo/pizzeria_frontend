'use strict';

(function(){

class AdministradoresListComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('pizzeriaApp')
  .component('administradoresList', {
    templateUrl: 'app/administrador/administradores-list/administradores-list.html',
    controller: AdministradoresListComponent,
    controllerAs: 'administradoresListCtrl'
  });

})();
