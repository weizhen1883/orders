var fiftyfive = fiftyfive || {};
fiftyfive.indexpage = fiftyfive.indexpage || {};
fiftyfive.indexpage.login = false;

fiftyfive.indexpage.login_navbar = function() {
	var id = location.search.split('id=')[1] ? location.search.split('id=')[1].split("&")[0] : "non-login";
	//console.log("id: " + id);
	if (id == "non-login") {
		$(".login-action").addClass("hidden");
		$(".login-action-hidden").removeClass("hidden");
	} else {
		var ref = new Firebase('https://55-bento.firebaseio.com/users/' + id);
		$(".login-action").removeClass("hidden");
		$(".login-action-hidden").addClass("hidden");
		ref.child("full_name").on("value", function(snapshot) {
		  var name = snapshot.val();
		  $("#user-button").html("Hello, " + name);
		  //console.log(name);
		}, function (errorObject) {
		  console.log("The read failed: " + errorObject.code);
		});
	};
}

$(document).ready(function() {
	fiftyfive.indexpage.login_navbar();
});