'use strict';

(function(){

class FacturasUpdateComponent {
  constructor($mdSidenav, $sce, UserMedia) {
    this.message = 'Hello';
    this.$mdSidenav=$mdSidenav;
    this.$sce=$sce;
    this.UserMedia=UserMedia;
    this.$q=$q;
  }








}

angular.module('pizzeriaApp')
  .component('facturasUpdate', {
    templateUrl: 'app/facturas/facturas-update/facturas-update.html',
    controller: FacturasUpdateComponent,
    controllerAs: 'vm'
  });

})();
