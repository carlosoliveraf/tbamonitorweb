angular.module("tbamonitorweb").controller("characterCtrl", function ($scope, $http) {
	
		$scope.newCharacter = false;
		$scope.charactersList = false;
		$scope.charactersStats = false;

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


		$scope.findCharacters = function (character) {
		$http.get('http://127.0.0.1:5000/characters/').then(function (response) {
			$scope.characters = response.data;
		});
		};

		$scope.findCharacters();

		$scope.saveCharacter = function(character){
			console.log("post");
			
			console.log(character);
			var res = $http.post('http://127.0.0.1:5000/characters/', character);


			res.success(function(data, status, headers, config) {
			$scope.message = data;
			});
			res.error(function(data, status, headers, config) {
			alert( "failure message: " + JSON.stringify({data: data}));
			});		
    		$scope.characters.push(character);
    		$scope.newCharacter = false;
			delete $scope.character;

		};
		
		$scope.eraseCharacter = function (character) {
			var id = character._id;
			console.log(id);
			var res = $http.delete('http://127.0.0.1:5000/characters/'+id);
			res.success(function(data, status, headers, config) {
			$scope.message = data;
			var posicao = $scope.characters.indexOf(character);
			$scope.characters.splice(posicao, 1);


			console.log($scope.characters);
			});
			res.error(function(data, status, headers, config) {
			alert( "failure message: " + JSON.stringify({data: data}));
			});
		// var id = character.id;
		// $http.delete('http://127.0.0.1:5000/characters/'+id).then(function (response) {
		// 	$scope.characters = response.data;
		// });
		};

		$scope.setOrder = function (field) {
		$scope.field = field;
		$scope.direction = !$scope.direction;
		};

	
		$scope.showNewCharacterInput = function(){
			$scope.newCharacter = !$scope.newCharacter;
			$scope.charactersList = false;
			$scope.charactersStats = false;
			delete $scope.newcharacter;
			delete $scope.character;

		}

		$scope.showCharactersList = function(){
			$scope.charactersList = !$scope.charactersList;
			$scope.newCharacter = false;
			$scope.charactersStats = false;
			delete $scope.character;
			delete $scope.newcharacter;



		}

		$scope.showCharactersStats = function(){
			$scope.charactersStats = !$scope.charactersStats;
			$scope.newCharacter = false;
			$scope.charactersList = false;
			delete $scope.character;
			delete $scope.newcharacter;




		}

		$scope.clearFields = function(newcharacter){
			delete $scope.newcharacter;

		}




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