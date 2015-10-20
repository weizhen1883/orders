angularApp.controller("SignUpController", ["$scope", "Auth",
  function($scope, Auth) {

    $scope.user = {
      full_name: '',
      phone: '',
      email: '',
      password: '',
      confirm_password: ''
    };

    $scope.createUser = function() {
      if ($scope.user.password === $scope.user.confirm_password) {
        Auth.$createUser({
          email: $scope.user.email,
          password: $scope.user.password
        }).then(function(userData) {
          console.log("User created with uid: " + userData.uid);
          var ref = new Firebase('https://55-bento.firebaseio.com/users');

          ref.child(userData.uid).set({
            full_name: $scope.user.full_name,
            phone: $scope.user.phone,
            email: $scope.user.email,
            password: $scope.user.password
          });

          $(".login-action-hidden").addClass("hidden");
          $(".login-action").removeClass("hidden");

          $('.section:visible').fadeOut( 500, function() {
            $("#head").fadeIn( 500 );
          });

          $("#mainmenu_head").addClass( 'active' );

        }).catch(function(error) {
          console.log(error);
        });
      }
    };

    
  }
]);