angularApp.controller('AddMenuController', ['$scope', '$http', 'MenuThings', function($scope, $http, MenuThings) {
	$scope.addZone = {
		name: '',
		description: ''
	};

	$scope.deleteZone = {
		id: ''
	}

	$scope.addItem = {
		name: '',
		type: '',
		restaurant: '',
		cal: '',
		price: '',
		zone: '',
		imgURL: ''
	};

	$scope.addMenuZone = function() {
		$http({
			method: 'POST',
			url:'/orders/addZone',
			data: {
				name: $scope.addZone.name,
				description: $scope.addZone.description
			}
		}).then(function successCallback(response) {
			console.log(response);
		}, function errorCallback(response) {
			console.log(response);
		});
	};

	$scope.deleteMenuZone = function() {
		// $http({
		// 	method: 'POST',
		// 	url: '/orders/deleteZone',
		// 	data: {
		// 		id: $scope.deleteZone.id
		// 	}
		// }).then(function successCallback(response) {
		// 	console.log(response);
		// }, function errorCallback(response) {
		// 	console.log(response);
		// });
	}

	$scope.addMenuItem = function() {
		$http({
			method: 'POST',
			url: '/orders/addMenu',
			data: {
				name: $scope.addItem.name,
				type: $scope.addItem.type,
				restaurant: $scope.addItem.restaurant,
				cal: $scope.addItem.cal,
				price: $scope.addItem.price,
				zone: $scope.addItem.zone,
				imgURL: $scope.addItem.imgURL
			},
			success: function(data) {
				var result = jQuery.parseJSON(data);
				if (result.success) {
					// alert("success");
				} else {
					alert(result.error);
				}
			},
			error: function(xhr, status, error) {
				alert("Server got errors");
			}
		});
	};

	MenuThings.success(function(data) { 
		if (data.success){
			console.log("success: ");
			console.log(data);
			$scope.zones = data.zones;
		}else{
			console.log("error: ");
			console.log(data);
			$scope.zones = data.zones;
			//alert(data.error);
		}
	});
}]);