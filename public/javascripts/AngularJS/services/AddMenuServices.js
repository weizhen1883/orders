angularApp.factory('MenuThings', ['$http', function($http){
	return $http.post('/orders/Zone', {zone: 'UIC'}).success(function(data) {
	    return data;
	}).error(function(err) {
	    return err;
	});
}])