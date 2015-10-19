angularApp.controller('SignInController', ['$scope',
	function($scope) {
		var ref = new Firebase("https://55-bento.firebaseio.com");

		$scope.user = {
			email: '',
			password: ''
		};

		$scope.signIn = function() {
			ref.authWithPassword({
			  email : $scope.user.email,
			  password : $scope.user.password
			}, function(error, authData) {
			  if (error) {
			    console.log("Login Failed!", error);
			  } else {
			    $(".login-action-hidden").addClass("hidden");
			    $(".login-action").removeClass("hidden");

			  }
			});
		};

		$scope.signOut = function() {
			ref.unauth();
			$(".login-action-hidden").removeClass("hidden");
			$(".login-action").addClass("hidden");
		};

		$scope.register = function() {
			console.log('User clicked register', $scope.user);
		};
	}
]);