'use strict';

(function(){

class ForbiddenComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('pizzeriaApp')
  .component('forbidden', {
    templateUrl: 'app/forbidden/forbidden.html',
    controller: ForbiddenComponent,
    controllerAs: 'forbiddenCtrl'
  });

})();
