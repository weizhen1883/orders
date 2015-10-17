angularApp.controller('NavController', ['$scope', '$location', function($scope, $location) {
	$scope.nav_iteams = [
		{
			name: "Home",
			url: "home"
		},
		{
			name: "About",
			url: "about"
		},
		{
			name: "Contact",
			url: "contact"
		}
	];
	$scope.navActive = function (page) {
        var currentRoute = $location.path().substring(1) || "home";
        return page === currentRoute ? 'active' : '';
    };  

	$scope.dropdown_menu = {
		title: "Dropdown",
		dropdown_items: [
			{
				name: "Action",
				url: "#action"
			},
			{
				name: "Another action",
				url:"#anotheraction"
			}
		]
	};
}]);