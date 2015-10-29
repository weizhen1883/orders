var orders = orders || {};
orders.buttons = orders.buttons || {};

orders.sides = 0;

orders.buttons.select = function() {
	$('#entrees-tab').click(function() {
		orders.sides = 0;
	});

	$('.entrees-submit').click(function() {
		$('#sides-tab').tab('show');
	});

	$('.sides-submit').click(function() {
		orders.sides++;
		if (orders.sides < 2) {
			$(this).attr('href', '#sides');
		} else {
			$(this).attr('href', '#staple');
			$('#staples-tab').tab('show');
		}
	});
};

$(document).ready(function() {
	orders.buttons.select();
});