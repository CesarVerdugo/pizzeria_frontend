'use strict';

(function(){

class ProductosUpdateComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('pizzeriaApp')
  .component('productosUpdate', {
    templateUrl: 'app/productos/productos-update/productos-update.html',
    controller: ProductosUpdateComponent,
    controllerAs: 'productosUpdateCtrl'
  });

})();
