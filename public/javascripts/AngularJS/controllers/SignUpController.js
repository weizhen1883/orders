angularApp.controller("SignUpController", ["$scope",
  function($scope) {

    $scope.user = {
      full_name: '',
      phone: '',
      email: '',
      password: '',
      confirm_password: ''
    };

    $scope.createUser = function() {
      if ($scope.user.password === $scope.user.confirm_password) {
        $.ajax({
          type: 'POST',
          url: "/users/signup",
          data: {
            email: $scope.user.email,
            password: $scope.user.password,
            fullname: $scope.user.full_name,
            phone: $scope.user.phone,
          },
          success: function(data) {
            var result = jQuery.parseJSON(data);
            if (result.success) {
              $.cookie('token', result.cookie);
              $.cookie('name', $scope.user.full_name);
              $(".login-action-hidden").addClass("hidden");
              $(".login-action").removeClass("hidden");
              $('.section:visible').fadeOut(500, function() {
                $("#head").fadeIn(500);
              });
              $("#mainmenu_head").addClass('active');
              $("#displayName").html("Welcome " +  $scope.user.full_name + "!");
            } else {
              alert(result.error);
            }
          },
          error: function(xhr, status, error) {
            alert("Server got errors");
          }
        });
      } else {
        alert("Password is not match")
      }
    };


  }
]);