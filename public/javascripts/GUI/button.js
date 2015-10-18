var button = button || {};
button.routeSelect = button.routeSelect || {};

button.routeSelect.select1 = false;
button.routeSelect.select2 = false;

button.routeSelect.selectButton = function() {
	$("#route-1-selection").click(function() {
		if (button.routeSelect.select1) {
			button.routeSelect.select1 = false;
			$(".route-1-selection").addClass("hidden");
			$(this).html("Open");
		} else {
			button.routeSelect.select1 = true;
			$(".route-1-selection").removeClass("hidden");
			$(this).html("Close");
		}
	});

	$("#route-2-selection").click(function() {
		if (button.routeSelect.select2) {
			button.routeSelect.select2 = false;
			$(".route-2-selection").addClass("hidden");
			$(this).html("Open");
		} else {
			button.routeSelect.select2 = true;
			$(".route-2-selection").removeClass("hidden");
			$(this).html("Close");
		}
	});

};

$(document).ready(function() {
	button.routeSelect.selectButton();
});