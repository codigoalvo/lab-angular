app.controller("HomeController", [
		'$http', '$scope',
		function($http, $scope) {
			console.log('HomeController init')
			var homeCtrl = this;


			this.teste = function() {
				console.log('teste function');
				$http.get('../ws/info/hello', {})
				.success(function(data) {
					homeCtrl.response = angular.toJson(data);
					$scope.result = homeCtrl.response;
					console.log('success');
					console.log(homeCtrl.response);
					window.alert(homeCtrl.response);
				})
				.error(function(erro){
					console.log('error');
					console.log(erro);
				});
			}


} ]);
