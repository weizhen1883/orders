angularApp.factory('MenuItems', ['$http', function($http){
	return $http.post('/getMenu', {zone: 'UIC'}).success(function(data) {
	    return data;
	}).error(function(err) {
	    return err;
	});
}])