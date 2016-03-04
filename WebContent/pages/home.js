app.controller("HomeController", [
		'$http', '$scope',

		function($http, $scope) {
			console.log('Teste1')
			
			this.teste = function() {
				console.log('Teste2');
				$http.get('../ws/info/hello', {})
				.success(function(data) {
					var result = angular.toJson(data);
					console.log('success');
					console.log(result);
					window.alert(result);
				})
				.error(function(erro){
					console.log('error');
					console.log(erro);
				});
			}
			
} ]);
