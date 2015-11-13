angularApp.controller('AddMenuController', ['$scope', '$http', 'MenuZones',
function($scope, $http, MenuZones) {
	$scope.addZone = {
		name: '',
		description: ''
	};

	$scope.deleteZone = {
		id: ''
	};

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
			console.log("success");
			console.log(response);
			location.reload();
		}, function errorCallback(response) {
			console.log("error");
			console.log(response);
		});
	};

	$scope.deleteMenuZone = function() {
		for (var i in $scope.deleteZone.id) {
			$http({
				method: 'POST',
				url: '/orders/deleteZone',
				data: {
					id: $scope.deleteZone.id[i]
				}
			}).then(function successCallback(response) {
				console.log("success");
				console.log(response);
				location.reload();
			}, function errorCallback(response) {
				console.log("error");
				console.log(response);
			});
		}
	};

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
			}
		}).then(function successCallback(response) {
			var result = jQuery.parseJSON(response);
			if (result.success) {
				// alert("success");
			} else {
				alert(result.error);
			}
		}, function errorCallback(response) {
			alert("Server got errors");
		});
	};

	MenuZones.success(function(data) { 
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