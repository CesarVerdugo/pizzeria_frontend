'use strict';

(function() {

  class MainController {

    constructor(authService,productosService,clasesProductosService,$state) {

      this.authService=authService;
      this.productosService=productosService;
      this.clasesProductosService=clasesProductosService;
      this.googleMapsUrl="https://maps.googleapis.com/maps/api/js?key=AIzaSyA_ycHCkS3xiAWK1h1P4Gr62h6UVmTFZwI";
      this.markerId = 0;
      this.$state = $state;
      this.map = {
      	center: {
      		latitude: 40.454018,
      		longitude: -3.509205
      	},
      	zoom: 12,
      	options : {
      		scrollwheel: false
      	},
      	control: {}
      };
      this.x = document.getElementById("demo");
      this.ya;
      this.ocultarMenu=false;

      this.carrito=[];
      this.total=0;

    }

    $onInit() {
      /*this.$state.go('main.productos-list');

    /*  this.NgMap.getMap().then(function(map) {
        var numTiles = 1 << map.getZoom();
    var projection = new MercatorProjection();
    this.chicago = map.getCenter();
    this.map = map;
      });
      console.log(this.chicago);
*/



  this.productosService.getProductos({clasesProductosId:7}).$promise
  .then(response => {
    this.TipoProductoSelec = response;
    console.log("productos que debe mostrar",this.TipoProductoSelec);
  })
  .catch(err => console.error(err));



      this.productosService.query().$promise
      .then(response=>{
        console.log("productos ok",response);
        this.agregarProductos=response;
      })
      .catch(err=>{
        console.log("ERROR",err);
      });

      this.clasesProductosService.query().$promise
      .then(response=>{
        console.log("clase de productos ok",response);
        this.listaClaseP=response;
      })
      .catch(err=>{
        console.log("ERROR",err);
      });


    /*  function create(latitude, longitude) {
          var markerId = 0;
		      var marker = {
			         options: {
				             animation: 1,
				             labelAnchor: "28 -5",
				             labelClass: 'markerlabel'
      		      },
            		latitude: latitude,
            		longitude: longitude,
            		id: ++markerId
      	   };
      	return marker;
       }

       function invokeSuccessCallback(successCallback, marker) {
       		if (typeof successCallback === 'function') {
       			successCallback(marker);
       		}
       	}

      function createByCurrentLocation(successCallback) {
	       if (navigator.geolocation) {
		         navigator.geolocation.getCurrentPosition(function (position) {
			            var marker = create(position.coords.latitude, position.coords.longitude);
			               invokeSuccessCallback(successCallback, marker);
                   });
	      } else {
		        alert('Unable to locate current position');
	      }
      }

      createByCurrentLocation(function (marker) {
	       marker.options.labelContent = 'You´re here';
	        this.map.markers.push(marker);
	         refresh(marker);
      });*/
    }

    //FIN ON onInit

agregarCarrito(item){
  this.item=item;


    this.suma(item);


     this.carrito.push(item);


/*  console.log("tamaño",this.carrito);


 this.carrito.push(item);
    console.log("deberia estar en el carrito");
    console.log(item);
  this.suma(item);*/
    console.log("item seleccionado",this.item.id);

}
suma(item){
  this.item=item;

    this.total= this.total+this.item.precio;

}

quitarProducto(item){
this.carrito.splice(item);
  this.restar(item,1);
}
restar(item){

  this.total=this.total-this.item.precio;
}

getProductos(selectedId){
  this.ocultarMenu=true;
  console.log(selectedId);
  this.productosService.getProductos({clasesProductosId:selectedId}).$promise
  .then(response => {
    this.TipoProductoSelec = response;
    console.log("productos que debe mostrar",this.TipoProductoSelec);
  })
  .catch(err => console.error(err));

}

    showPosition(position) {
      console.log("showPosition" );
      console.log(position.coords.latitude);
      console.log(position.coords.longitude );
      this.ya=position.coords.latitude;
      this.Longitud=position.coords.longitude;
      //  this.x.innerHTML = "Latitude: " + position.coords.latitude +
      //  "<br>Longitude: " + position.coords.longitude;
      console.log(this.ya);
    }
 getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
        this.x.innerHTML = "Geolocation is not supported by this browser.";
    }
}


  }

  MainController.$inject=['authService','productosService','clasesProductosService'];
  angular.module('pizzeriaApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController,
      controllerAs:'vm'
    });
})();
