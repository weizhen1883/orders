angularApp.controller('OrderController', ['$scope',
	function($scope) {
		$scope.order = {
			zoon: '',
			pickup_location: '',
			orders: {
				entress: '',
				sides: '',
				rice_noodle: ''
			}
		};

		$scope.location_select = function(zoon, pickup_location) {
			$scope.order.zoon = zoon;
			$scope.order.pickup_location = pickup_location;
			console.log($scope.order);
		};

		$scope.entress_select = function(entress) {
			$scope.order.orders.entress = entress;
			console.log($scope.order);
		};

		$scope.sides_select = function(side1, side2) {
			$scope.order.orders.sides = {side1, side2};
			console.log($scope.order);
		};

	}
]);