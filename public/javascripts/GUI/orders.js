var orders = orders || {};
orders.buttons = orders.buttons || {};

orders.entrees = 0;
orders.sides = 0;
orders.staple = 0;

orders.check_order_made = function() {
	if (orders.entrees == 1 && orders.sides == 2 && orders.staple == 1) {
		$('#pay-submit').removeClass('disabled');
		$('#add-to-cart').removeClass('disabled');
	}
};

orders.buttons.select = function() {
	$('.entrees-submit').click(function() {
		orders.entrees++;
		$('#sides-tab').tab('show');
		orders.check_order_made();
		cuisineName = $(this).find(".name").html();
		cuisineImage = $(this).find(".image").html();
		cuisinePrice = $(this).find(".price").html();
		console.log("name: " + cuisineName + " image_url: " + cuisineImage + " price: " + cuisinePrice);
		$('#select-entress-image').attr('src', cuisineImage);
		$('#select-entress-name').html(cuisineName);
		$('#select-entress-price').html(cuisinePrice);
	});

	$('#sides-tab').click(function() {
		orders.sides = 0;
		orders.check_order_made();
	});

	$('.sides-submit').click(function() {
		console.log(orders.entrees);
		orders.sides++;
		cuisineName = $(this).find(".name").html();
		cuisineImage = $(this).find(".image").html();
		cuisinePrice = $(this).find(".price").html();
		console.log("name: " + cuisineName + " image_url: " + cuisineImage + " price: " + cuisinePrice + " sides: " + orders.sides);

		if (orders.sides == 1) {
			$(this).attr('href', '#sides');
			$('#select-side1-image').attr('src', cuisineImage);
			$('#select-side1-name').html(cuisineName);
		} else if (orders.sides == 2) {
			$('#select-side2-image').attr('src', cuisineImage);
			$('#select-side2-name').html(cuisineName);
			$(this).attr('href', '#staple');
			$('#staples-tab').tab('show');
		} else {
			$(this).attr('href', '#staple');
			$('#staples-tab').tab('show');
		}
		orders.check_order_made();
	});

	$('.staple-submit').click(function() {
		orders.staple++;
		cuisineName = $(this).find(".name").html();
		cuisineImage = $(this).find(".image").html();
		cuisinePrice = $(this).find(".price").html();
		console.log("name: " + cuisineName + " image_url: " + cuisineImage + " price: " + cuisinePrice);
		$('#select-staple-image').attr('src', cuisineImage);
		$('#select-staple-name').html(cuisineName);
		orders.check_order_made();
	});
};

$(document).ready(function() {
	orders.buttons.select();
});

$(document).on('click', '.entrees-submit', function() {
	orders.entrees++;
	$('#sides-tab').tab('show');
	orders.check_order_made();
	cuisineName = $(this).find(".name").html();
	cuisineImage = $(this).find(".image").html();
	cuisinePrice = $(this).find(".price").html();
	console.log("name: " + cuisineName + " image_url: " + cuisineImage + " price: " + cuisinePrice);
	$('#select-entress-image').attr('src', cuisineImage);
	$('#select-entress-name').html(cuisineName);
	$('#select-entress-price').html(cuisinePrice);
});