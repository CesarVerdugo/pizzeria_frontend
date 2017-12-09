'use strict';

(function(){

class AdministradorComponent {









 constructor(WebcamService) {
    this.message = 'Hello';
    this.webcam=WebcamService.webcam;
  }


  snapShot() {

     this.webcam.makeSnapshot()
     this.p = this.webcam.snapshotData;
     console.log("p", this.p);
     this.file = this.dataURLtoFile(this.p, 'foto.png');

   }

   dataURLtoFile(dataurl, filename) {
     this.arr = dataurl.split(','), this.mime = this.arr[0].match(/:(.*?);/)[1],
       this.bstr = atob(this.arr[1]), this.n = this.bstr.length, this.u8arr = new Uint8Array(this.n);
     while (this.n--) {
       this.u8arr[this.n] = this.bstr.charCodeAt(this.n);
     }
     return new File([this.u8arr], filename, {
       type: this.mime
     });
   }
}

angular.module('pizzeriaApp')
  .component('administrador', {
    templateUrl: 'app/dashboard/administrador/administrador.html',
    controller: AdministradorComponent,
    controllerAs: 'vm'
  });

})();
