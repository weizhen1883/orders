angularApp.controller('SignInController', ['$scope',
	function($scope) {


		$scope.user = {
			email: '',
			password: ''
		};

		$scope.signIn = function() {
			$.ajax({
				type: 'POST',
				url: "/users/signin",
				data: {
					email: $scope.user.email,
					password: $scope.user.password,
				},
				success: function(data) {
					var result = jQuery.parseJSON(data);
					if (result.success) {
						alert("success");
						$('.login-action-hidden').fadeOut(500, function() {
							$('.login-action-hidden').addClass("hidden");
							$('.login-action').fadeIn(500).removeClass('hidden');
						});
						$("#displayName").html("Welcome " + result.fullName + "!");
					} else {
						alert(result.error);
					}
				},
				error: function(xhr, status, error) {
					alert("Server got errors");
				}
			});
		};

		$scope.signOut = function() {
			$.ajax({
				type: 'POST',
				url: "/users/signout",
				success: function(data) {
					var result = jQuery.parseJSON(data);
					if (result.success) {
						alert("success");
						$('.login-action').fadeOut(500, function() {
							$('.login-action').addClass("hidden");
							$('.login-action-hidden').fadeIn(500).removeClass('hidden');
						});
					} else {
						alert(result.error);
					}
				},
				error: function(data) {
					alert("Server got errors");
				}
			});

		};

	}
]);