angular.module("tbamonitorweb").controller("characterCtrl", function ($scope, $http) {
	
		$scope.vocations = [ 'Elite Knight', 'Royal Paladin', 'Master Sorcerer', 'Elder Druid'];

		// $scope.characters = [ 
		// 	{
		// 		name: "Maggie Viz",
		// 		level: 206,
		// 		stamina: 42,
		// 		vocation: "Master Sorcerer"
		// 	},
		// 	{
		// 		name: "Olivera Rullezz",
		// 		level: 225,
		// 		stamina: 40,
		// 		vocation: "Royal Paladin"

		// 	}
		// ];


		var findCharacters = function () {
		$http.get('http://127.0.0.1:5000/characters/').then(function (response) {
			$scope.characters = response.data;
		});
		};

		findCharacters();
		
	


	// $scope.itens = itens.data;

	// $scope.pedidos = [];
	// $scope.total = 0;
	// $scope.addItem = function (item) {
	// 	$scope.itens.push(item);
	// 	delete $scope.item;
	// };

	// $scope.fazerPedido = function (pedido) {
	// 	pedido.date = new Date();
	// 	pedido.subtotal = pedido.quantidade * pedido.item.price;
	// 	pedido.imposto = impostoService.calcular(pedido.subtotal);
	// 	$scope.pedidos.push(pedido);
	// 	delete $scope.pedido;
	// 	$scope.total = calcularTotal($scope.pedidos);
	// 	$scope.pedidoForm.$setPristine();
	// };

	// var calcularTotal = function (pedidos) {
	// 	var total = 0;
	// 	pedidos.forEach(function (pedido) {
	// 		total += pedido.subtotal;
	// 	});
	// 	return total + impostoService.calcular(total);
	// };

	// $scope.cancelarPedido = function (pedido) {
	// 	var posicao = $scope.pedidos.indexOf(pedido);
	// 	$scope.pedidos.splice(posicao, 1);
	// 	$scope.total = calcularTotal($scope.pedidos);
	// };

	// $scope.setOrdem = function (campo) {
	// 	$scope.campo = campo;
	// 	$scope.direcao = !$scope.direcao;
	// };
});