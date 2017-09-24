'use strict';

(function(){

class TiposDocumentosListComponent {
  constructor(tiposDocumentosService) {
    this.tiposDocumentosService=tiposDocumentosService;
  }
  $onInit(){
    this.tiposDocumentosService.query().$promise
    .then(response=>{
      console.log("tipodocumentos ok",response);
      this.listaDocumentos=response;
    }).catch(err=>{
      console.log("ERROR",err);
    })
  }



}
TiposDocumentosListComponent.$inject=['tiposDocumentosService']
angular.module('pizzeriaApp')
  .component('tiposDocumentosList', {
    templateUrl: 'app/tiposDocumentos/tiposDocumentos-list/tiposDocumentos-list.html',
    controller: TiposDocumentosListComponent,
    controllerAs: 'vm'
  });

})();
