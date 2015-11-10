angularApp.controller('AddMenuController', ['$scope', '$http', 'MenuThings', function($scope, $http, MenuThings) {
	$scope.addItem = {
		name: '',
		type: '',
		restaurant: '',
		cal: '',
		price: '',
		zone: '',
		imgURL: ''
	};

	$scope.addMenuItem = function() {
		$http({
			method: 'POST',
			url: "/orders/addMenu",
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
}]);