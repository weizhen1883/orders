var orders = orders || {};
orders.buttons = orders.buttons || {};

orders.entrees = 0;
orders.sides = 0;
orders.staple = 0;

orders.cal = orders.cal || {};
orders.cal.entreesCal = 0;
orders.cal.side1Cal = 0;
orders.cal.side2Cal = 0;
orders.cal.stapleCal = 0;

orders.check_order_made = function() {
	if (orders.entrees == 1 && orders.sides == 2 && orders.staple == 1) {
		$('#pay-submit').removeClass('disabled');
		$('#add-to-cart').removeClass('disabled');
	}
};

orders.buttons.select = function() {
	$('#sides-tab').click(function() {
		orders.sides = 0;
		orders.check_order_made();
	});
};

orders.totalCal = function() {
	console.log(orders.cal.entreesCal);
	return parseInt(orders.cal.entreesCal) + parseInt(orders.cal.side1Cal) + parseInt(orders.cal.side2Cal) + parseInt(orders.cal.stapleCal);
}

$(document).ready(function() {
	orders.buttons.select();
});

$(document).on('click', '.entrees-submit', function() {
	$('#sides-tab').tab('show');
	cuisineName = $(this).find(".name").html();
	cuisineImage = $(this).find(".image").html();
	cuisinePrice = $(this).find(".price").html();
	cuisineCal = $(this).find(".cal").html();
	orders.cal.entreesCal = cuisineCal;
	//console.log("name: " + cuisineName + " image_url: " + cuisineImage + " price: " + cuisinePrice);
	$('#select-entress-image').attr('src', cuisineImage);
	$('#select-entress-name').html(cuisineName);
	$('#select-entress-price').html(cuisinePrice);
	$('#entrees-cal').html(cuisineCal + " Cal");
	$('#total-cal').html("Total: " + orders.totalCal() + " Cal");
	$('.entrees-order').removeClass('hidden');
	$('.order-cal').removeClass('hidden');

	orders.entrees++;
	orders.check_order_made();
});

$(document).on('click', '.sides-submit', function() {
	//console.log(orders.entrees);
	cuisineName = $(this).find(".name").html();
	cuisineImage = $(this).find(".image").html();
	cuisinePrice = $(this).find(".price").html();
	cuisineCal = $(this).find(".cal").html();
	//console.log("name: " + cuisineName + " image_url: " + cuisineImage + " price: " + cuisinePrice + " sides: " + orders.sides);
	console.log(orders.sides);
	if (orders.sides < 1) {
		orders.cal.side1Cal = cuisineCal;
		$('#select-side1-image').attr('src', cuisineImage);
		$('#select-side1-name').html(cuisineName);
		$('.sides-submit').attr('href', '#staple');

		$('#side1-cal').html("+ " + cuisineCal + " Cal");
		$('#side1-cal').removeClass('hidden');
		$('#total-cal').html("Total: " + orders.totalCal() + " Cal");
		$('.sides-order').removeClass('hidden');
		$('.side1-order').removeClass('hidden');
		//console.log("side1");
	} else if (orders.sides < 2) {
		orders.cal.side2Cal = cuisineCal;
		$('#select-side2-image').attr('src', cuisineImage);
		$('#select-side2-name').html(cuisineName);
		$('.sides-submit').attr('href', '#sides');
		$('#staples-tab').tab('show');

		$('#side2-cal').html("+ " + cuisineCal + " Cal");
		$('#side2-cal').removeClass('hidden');
		$('#total-cal').html("Total: " + orders.totalCal() + " Cal");
		$('.side2-order').removeClass('hidden');
		//console.log("side2");
	}
	
	orders.sides++;
	orders.check_order_made();
});

$(document).on('click', '.staple-submit', function() {
	orders.staple++;
	cuisineName = $(this).find(".name").html();
	cuisineImage = $(this).find(".image").html();
	cuisinePrice = $(this).find(".price").html();
	//console.log("name: " + cuisineName + " image_url: " + cuisineImage + " price: " + cuisinePrice);
	$('#select-staple-image').attr('src', cuisineImage);
	$('#select-staple-name').html(cuisineName);

	$('#staple-cal').html("+ " + cuisineCal + " Cal");
	$('#staple-cal').removeClass('hidden');
	$('#total-cal').html("Total: " + orders.totalCal() + " Cal");
	$('.staple-order').removeClass('hidden');
	orders.check_order_made();
});









