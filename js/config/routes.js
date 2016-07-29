angular.module("tbamonitorweb").config(function ($routeProvider) {
	
	$routeProvider.when('/characters', {
		templateUrl: 'view/characters.html',
		controller: 'characterCtrl',
		// resolve: {
		// 	itens: function (apiService) {
		// 		return apiService.getItens();
		// 	}
		// }
	});
	
	$routeProvider.otherwise({
		redirectTo: '/characters'
	});
});