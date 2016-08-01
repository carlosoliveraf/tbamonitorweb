angular.module("tbamonitorweb").config(function ($routeProvider,$locationProvider) {
	


   $routeProvider.when('/', {
      templateUrl: '../view/home.html',
      controller: 'homeCtrl',
   });


	$routeProvider.when('/characters', {
		templateUrl: '../view/characters.html',
		controller: 'characterCtrl',
		
		
	});

	$routeProvider.when('/huntingplaces', {
		templateUrl: '../view/huntingplaces.html',
		controller: 'huntingplacesCtrl',
		// resolve: {
		// 	itens: function (apiService) {
		// 		return apiService.getItens();
		// 	}
		// }
	});
	
	$routeProvider.otherwise({
		redirectTo: '/'
	});
});