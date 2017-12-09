'use strict';

(function(){

class UploadFileProductosComponent {
  constructor($q, $state, Upload, API) {
    this.$q = $q;
    this.$state = $state;
    this.Upload = Upload;
    this.API = API;
  }


          create(from) {
              this.Upload.upload({
                  url: this.API + '/api/upload/productos',
                  data: { file: this.file }
              }).then(function(resp) {
                  console.log('Success ' + resp.config.data.file.name + 'uploaded. Response: ' + resp.data);
                  console.log('OK');
              }, function(resp) {
                  console.log('Error status: ' + resp.status);
              }, function(evt) {
                  var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
                  console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
              });
          }
}

angular.module('pizzeriaApp')
  .component('uploadFileProductos', {
    templateUrl: 'app/upload-file/upload-file-productos/upload-file-productos.html',
    controller: UploadFileProductosComponent,
    controllerAs: 'vm'
  });

})();
