angularApp.factory('MenuItems', ['$http', function($http){
	return $http.post('/orders/getMenu', {zone: 'UIC'}).success(function(data) {
	    return data;
	}).error(function(err) {
	    return err;
	});
}])