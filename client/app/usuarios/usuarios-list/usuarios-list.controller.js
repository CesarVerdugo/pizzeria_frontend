'use strict';

(function(){

class UsuariosListComponent {
  constructor(usuariosService) {
    this.usuariosService=usuariosService;
  }
$onInit(){
this.usuariosService.query().$promise
.then(response=>{
  console.log("Usuarios ok",response);
  this.listaUsuarios=response;
}).catch(err=>{
  console.log("ERROR",err);
})

}

cambioEstado(item) {
  this.usuariosService.update(item).$promise
  .then(response => {
    console.log("Cambio Estado OK...", response);
  }).catch(err => {
    console.log("ERROR Estado...", err);
  })
}


}
UsuariosListComponent.$inject=['usuariosService']
angular.module('pizzeriaApp')
  .component('usuariosList', {
    templateUrl: 'app/usuarios/usuarios-list/usuarios-list.html',
    controller: UsuariosListComponent,
    controllerAs: 'vm'
  });

})();
