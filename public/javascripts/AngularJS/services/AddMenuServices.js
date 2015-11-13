angularApp.factory('MenuZones', ['$http', function($http){
	return $http.post('/orders/getZone', {}).success(function(data) {
	    return data;
	}).error(function(err) {
	    return err;
	});
}]);