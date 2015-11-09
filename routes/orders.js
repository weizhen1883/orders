var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

// create a schema
var zoneSchema = new Schema({
	id: {
		type: ObjectId,
	},
	name: {
		type: String,
		required: true,
		unique: true
	},
	subZone: {
		type: String,
		// required: true
	},
	description: {
		type: String,
		required: true
	}
});

var menuSchema = new Schema({
	id: {
		type: ObjectId,
	},
	zone: {
		type: String,
		required: true
	},
	type: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true,
		unique: true
	},
	imgUrl: {
		type: String,
		required: true
	},
	restaurant: {
		type: String,
		required: true
	},
	calorie: {
		type: Number,
		required: true
	},
	price: {
		type: Number,
		required: true
	}
});

var Zone = mongoose.model('Zone', zoneSchema);

var Menu = mongoose.model('Menu', menuSchema);

/* GET home page. */
router.get('/', function(req, res) {
	res.render('orders', {
		title: 'FiftyFive'
	});
});

router.post('/getMenu', function(req, res) {
	if (!req.body.zone) {
		return res.end(JSON.stringify({
			success: false,
			error: 'Missing argument zone.'
		}));
	}
	var zoneName = req.body.zone;
	Zone.find({
		name: zoneName
	}, function(err, zones) {
		// console.log(zones);
		if (zones.length == 0) {
			return res.end(JSON.stringify({
				success: false,
				error: "The given zone name can not be found in db"
			}));
		} else {
			var zone = zones[0];
			Menu.find({
				zone: zone._id,
			}, function(err, found_result) {
				var menus = [];
				for (var i in found_result) {
					var menu = {
						type: found_result[i].type,
						name: found_result[i].name,
						imgUrl: found_result[i].imgUrl,
						restaurant: found_result[i].restaurant,
						cal: found_result[i].cal,
						price: found_result[i].price
					};
					menus.push(menu);
				}
				return res.end(JSON.stringify({
					menus: menus
				}));
			});
		}
	});
});

router.post('/addMenu', function(req, res) {
	if (!req.body.zone) {
		return res.end(JSON.stringify({
			success: false,
			error: 'Missing argument zone.'
		}));
	}
	if (!req.body.type) {
		return res.end(JSON.stringify({
			success: false,
			error: 'Missing argument menu type.'
		}));
	}
	if (!req.body.name) {
		return res.end(JSON.stringify({
			success: false,
			error: 'Missing argument menu name.'
		}));
	}
	if (!req.body.imgUrl) {
		return res.end(JSON.stringify({
			success: false,
			error: 'Missing argument image url.'
		}));
	}
	if (!req.body.cal) {
		return res.end(JSON.stringify({
			success: false,
			error: 'Missing argument calorie.'
		}));
	}
	if (!req.body.price) {
		return res.end(JSON.stringify({
			success: false,
			error: 'Missing argument menu price.'
		}));
	}
	if (!req.body.restaurant) {
		return res.end(JSON.stringify({
			success: false,
			error: 'Missing argument menu restaurant.'
		}));
	}
	var zoneName = req.body.zone;
	var type = req.body.type;
	var name = req.body.name;
	var imgUrl = req.body.imgUrl;
	var calorie = req.body.cal;
	var price = req.body.price;
	var restaurant = req.body.restaurant;

	Zone.find({
		name: zoneName
	}, function(err, zones) {
		if (zones.length == 0) {
			return res.end(JSON.stringify({
				success: false,
				error: "The given zone name can not be found in db"
			}));
		} else {
			var zone = zones[0];
			Menu.find({
				name: name
			}, function(err, found_menus) {
				if (err) throw err;
				if (found_menus.length !== 0) {
					return res.end(JSON.stringify({
						success: false,
						error: 'menu already exists'
					}));
				} else {
					var newMenu = new Menu({
						zone: zone._id,
						name: name,
						type: type,
						imgUrl: imgUrl,
						calorie: calorie,
						price: price,
						restaurant: restaurant
					});
					newMenu.save(function(err, result) {
						if (err) return res.end(JSON.stringify({
							success: false,
							error: err
						}));
						console.log('Menu created with id ' + result._id + ' and name ' + result.name);
						return res.end(JSON.stringify({
							success: true
						}));
					});
				}
			});
		}

	});
});

router.get('/getZone', function(req, res) {
	Zone.find(function(err, found_result) {
		// console.log(found_result);
		var zones = [];
		for (var i in found_result) {
			var zone = {
				name: found_result[i].name,
				description: found_result[i].description,
				subZone: found_result[i].subZone ? found_result[i].subZone : []
			};
			zones.push(zone);
		}
		return res.end(JSON.stringify({
			zones: zone
		}));
	});
});

router.post('/addZone', function(req, res) {
	console.log(req.body.name);
	if (!req.body.name) {
		return res.end(JSON.stringify({
			success: false,
			error: 'Missing argument zone name.'
		}));
	}
	if (!req.body.description) {
		return res.end(JSON.stringify({
			success: false,
			error: 'Missing argument zone description.'
		}));
	}
	var name = req.body.name;
	var description = req.body.description;
	var subZone = req.body.subZone ? req.body.subZone : [];

	Zone.find({
		name: name
	}, function(err, found_result) {
		if (err) throw err;
		if (found_result.length !== 0) {
			return res.end(JSON.stringify({
				success: false,
				error: 'zone already exists'
			}));
		} else {
			var newZone = new Zone({
				name: name,
				description: description,
				subZone: subZone
			});
			newZone.save(function(err, result) {
				if (err) return res.end(JSON.stringify({
					success: false,
					error: err
				}));
				console.log('Zone created with id ' + result._id + ' and name ' + result.name);
				return res.end(JSON.stringify({
					success: true
				}));
			});
		}
	});
})

module.exports = router;