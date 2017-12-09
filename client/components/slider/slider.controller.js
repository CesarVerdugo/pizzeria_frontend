'use strict';

(function(){

class SliderComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('pizzeriaApp')
  .component('slider', {
    templateUrl: 'components/slider/slider.html',
    controller: SliderComponent,
    controllerAs: 'vm'
  });

})();
