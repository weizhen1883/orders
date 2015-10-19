angularApp.controller('SignUpController', ['$scope',
	function($scope) {
		var ref = new Firebase("https://55-bento.firebaseio.com");

		$scope.creatUser = {
			full_name: '',
			phone: '',
			email: '',
			password: ''
		};

		$scope.signUp = function() {
			ref.createUser({
			  email    : "bobtony@firebase.com",
			  password : "correcthorsebatterystaple"
			}, function(error, userData) {
			  if (error) {
			    console.log("Error creating user:", error);
			  } else {
			    console.log("Successfully created user account with uid:", userData.uid);
			  }
			});
		};
	}
]);