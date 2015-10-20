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
			    $('.login-action-hidden').fadeOut(500, function() {
			    	$('.login-action-hidden').addClass("hidden");
			    	$('.login-action').fadeIn(500).removeClass('hidden');
			    });
			  }
			});
		};

		$scope.signOut = function() {
			ref.unauth();
			$('.login-action').fadeOut(500, function() {
		    	$('.login-action').addClass("hidden");
		    	$('.login-action-hidden').fadeIn(500).removeClass('hidden');
		    });
		};
		
	}
]);