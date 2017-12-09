'use strict';

function authService($auth,$state) {
	// AngularJS will instantiate a singleton by calling "new" on this function
	var Auth = {
 		login:login,
 		logout:logout,
 		isAdmin:isAdmin,
		isUser:isUser,
		isAuthenticated:isAuthenticated,
		userlog:userlog,
		alluser:alluser,
		idUsuario:idUsuario,
		isEmpleado:isEmpleado,
		allPIZZA:allPIZZA
 	};

 	function login(user,collback){
 		$auth.login(user)

 		.then(response => {
 			console.log('Login ok',response);
			console.log("es admin "+Auth.isAdmin());
			console.log("es empleado "+Auth.isEmpleado());
			console.log("id de usuario "+ Auth.idUsuario());
			Auth.isAdmin();
			if (Auth.isAdmin()) {
				console.log("es admin al login",);
				$state.go('administrador');
			}else if(Auth.isEmpleado()) {
				$state.go('empleado');
				console.log("es empleado al login",);
			}else {
				$state.go('main');

			}

 		})
 		.catch(err =>{
 			console.log('Error de login',err);
 			$state.go('main');
 		});
 	}

	function idUsuario(){
					if(Auth.isAuthenticated()){
						return $auth.getPayload().sub;
					} else{
						return null;
					}
				}


				function allPIZZA() {
					if((Auth.isAdmin()) || (Auth.isEmpleado())){
						return true;
					}else{
						return false;
					}
				}


				function alluser() {
					if((Auth.isAdmin()) || (Auth.isUser()) ||(Auth.isEmpleado())){
						return true;
					}else{
						return false;
					}
				}
				function logout(){
						if($auth.isAuthenticated()){
							$auth.logout()
							.then(respose=>{
								$state.go('main');
							})
						}

					}

				function userlog() {
					if($auth.isAuthenticated()){
						return $auth.getPayload().user;
}

				}

					function isAdmin(){
						if(Auth.isAuthenticated()){
							//console.log("roles",$auth.getPayload().roles);
								if($auth.getPayload().roles.indexOf("ADMIN") !== -1){
									return true;
								}else{
									return false;
									console.log("no es admin");
								}
						}else{
							return false;
							console.log("no esta");
						}
					}

					function isUser(){
						if(Auth.isAuthenticated()){

								if($auth.getPayload().roles.indexOf("USER") !== -1){
									return true;
								}else{
									return false;
								}
						}else{
							return false;
						}
					}


					function isEmpleado(){
						if(Auth.isAuthenticated()){

								if($auth.getPayload().roles.indexOf("EMPLEADO") !== -1){
									return true;
								}else{
									return false;
								}
						}else{
							return false;
						}
					}

					function isAuthenticated(){
							if($auth.isAuthenticated()){
								return true;
							}else{
								return false;
							}
						}



  return Auth;

}

authService.$inject  = ['$auth','$state'];
angular.module('pizzeriaApp')
  .factory('authService', authService);
