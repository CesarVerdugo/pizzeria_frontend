'use strict';

class NavbarController {
  //start-non-standard
  constructor(authService){
  this.menu = [{
    'title': 'Home',
    'state': 'main'
  },
];

  this.isCollapsed = true;
  //end-non-standard
  this.authService=authService;

}}
NavbarController.$inject=['authService']
angular.module('pizzeriaApp')
  .component('navbar',{
  templateUrl: 'components/navbar/navbar.html',
  controller: NavbarController,
  controllerAs: 'vm'} );
