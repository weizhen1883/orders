var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

// create a schema
var zoneSchema = new Schema({
	id: {
		type: ObjectId
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
		type: ObjectId
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
		required: true
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
var orderSchema = new Schema({
	id: {
		type: ObjectId
	},
	user: {
		type: String,
		required: true
	},
	menus: {
		type: Array,
		required: true
	}
});

var Zone = mongoose.model('Zone', zoneSchema);

var Menu = mongoose.model('Menu', menuSchema);

var Order = mongoose.model('Order', orderSchema);

/* GET home page. */
router.get('/', function(req, res) {
	res.render('index', {
		title: 'FiftyFive'
	});
});

router.get('/addMenuItem', function(req, res) {
	res.render('addMenuItem', {
		title: 'FiftyFive'
	});
});


// WAIT FOR TEST IN FRONTEND
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
		if (err) throw err
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

// WAIT FOR TEST IN FRONTEND
router.post('/addMenu', function(req, res) {
	console.log(req.body.zone);
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
						if (err) throw err;
						console.log('Menu created with id ' + result._id + ' and name ' + result.name);
						return res.end(JSON.stringify({
							success: true,
							id: result._id
						}));
					});
				}
			});
		}

	});
});

// WAIT FOR TEST IN FRONTEND
router.post('/deleteMenu', function(req, res) {
	if (!req.body.id) {
		return res.end(JSON.stringify({
			success: false,
			error: 'Missing argument menu id.'
		}));
	}
	Menu.remove({
		_id: req.body.id
	}, function(err, deleted) {
		console.log(deleted.result.n);
		if (deleted.result.n == 0) {
			return res.end(JSON.stringify({
				success: false,
				error: "The given menu id can not be found in the db"
			}));
		} else {
			return res.end(JSON.stringify({
				success: true
			}));
		}
	});
});
 
// WAIT FOR TEST IN FRONTEND
router.post('/editMenu', function(req, res) {
	if (!req.body.id) {
		return res.end(JSON.stringify({
			success: false,
			error: 'Missing argument menu id.'
		}));
	}
	var updatedAttr = {};
	if (req.body.zone) {
		updatedAttr.zone = req.body.zone;
	}
	if (req.body.name) {
		updatedAttr.name = req.body.name;
	}
	if (req.body.type) {
		updatedAttr.type = req.body.type;
	}
	if (req.body.imgUrl) {
		updatedAttr.imgUrl = req.body.imgUrl;
	}
	if (req.body.price) {
		updatedAttr.price = req.body.price;
	}
	if (req.body.restaurant) {
		updatedAttr.restaurant = req.body.restaurant;
	}
	if (req.body.calorie) {
		updatedAttr.calorie = req.body.calorie;
	}
	Menu.update({
		_id: req.body.id
	}, updatedAttr, function(err, updated) {
		if (err) throw err;
		console.log(updated);
		if (updated.n == 0 && updated.ok == 1) {
			return res.end(JSON.stringify({
				success: false,
				error: "The given menu id can not be found in the db"
			}));
		} else {
			return res.end(JSON.stringify({
				success: true
			}));
		}
	})
});

// WAIT FOR TEST IN FRONTEND
router.post('/getZone', function(req, res) {
	var foundAttr = {};
	if (req.body.id) {
		foundAttr._id = req.body.id
	}
	Zone.find(foundAttr, function(err, found_result) {
		// console.log(found_result);
		var zones = [];
		for (var i in found_result) {
			var zone = {
				id: found_result[i]._id,
				name: found_result[i].name,
				description: found_result[i].description,
				subZone: found_result[i].subZone ? found_result[i].subZone : []
			};
			zones.push(zone);
		}
		return res.end(JSON.stringify({
			zones: zones
		}));
	});
});

// WAIT FOR TEST IN FRONTEND
router.post('/addZone', function(req, res) {
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
				if (err) throw err;
				console.log('Zone created with id ' + result._id + ' and name ' + result.name);
				return res.end(JSON.stringify({
					success: true,
					id: result._id
				}));
			});
		}
	});
});

// WAIT FOR TEST IN FRONTEND
router.post('/deleteZone', function(req, res) {
	if (!req.body.id) {
		return res.end(JSON.stringify({
			success: false,
			error: 'Missing argument zone id.'
		}));
	}
	Zone.remove({
		_id: req.body.id
	}, function(err, deleted) {
		console.log(deleted.result.n);
		if (deleted.result.n == 0) {
			return res.end(JSON.stringify({
				success: false,
				error: "The given zone id can not be found in the db"
			}));
		} else {
			return res.end(JSON.stringify({
				success: true
			}));
		}
	});
});

// WAIT FOR TEST IN FRONTEND
router.post('/editZone', function(req, res) {
	if (!req.body.id) {
		return res.end(JSON.stringify({
			success: false,
			error: 'Missing argument zone id.'
		}));
	}
	var updatedAttr = {};
	if (req.body.name) {
		updatedAttr.name = req.body.name;
	}
	if (req.body.description) {
		updatedAttr.description = req.body.description;
	}
	if (req.body.subZone) {
		updatedAttr.subZone = req.body.subZone;
	}
	Zone.update({
		_id: req.body.id
	}, updatedAttr, function(err, updated) {
		if (err) throw err;
		console.log(updated);
		if (updated.n == 0 && updated.ok == 1) {
			return res.end(JSON.stringify({
				success: false,
				error: "The given zone id can not be found in the db"
			}));
		} else {
			return res.end(JSON.stringify({
				success: true
			}));
		}
	})
});

// WAIT FOR TEST
router.get('/getOrder', function(req, res) {
	var cookie = req.cookies.token;
	var foundAttr = {
		user: cookieStore.cookie
	};
	if (req.body.id) {
		foundAttr._id = req.body.id
	}
	Order.find(foundAttr, function(err, found_result) {
		// console.log(found_result);
		var orders = [];
		for (var i in found_result) {
			var order = {
				id: found_result[i]._id,
				user: found_result[i].user,
				menus: found_result[i].menus
			};
			orderes.push(order);
		}
		return res.end(JSON.stringify({
			orders: order
		}));
	});
});


// WAIT FOR TEST
router.post('/addOrder', function(req, res) {
	if (!req.body.menus) {
		return res.end(JSON.stringify({
			success: false,
			error: 'Missing argument order menu.'
		}));
	}
	if (req.body.menus.length != 4) {
		return res.end(JSON.stringify({
			success: false,
			error: 'Does not give a correct menu form.'
		}));
	}
	var cookie = req.cookies.token;
	var menus = req.body.menus;
	var menus_id = [];
	Menu.find({
		name: menus[0]
	}, function(err, found) {
		if (err) throw err;
		menus_id.push(found[0]._id);
		Menu.find({
			name: menus[1]
		}, function(err, found) {
			if (err) throw err;
			menus_id.push(found[0]._id);
			Menu.find({
				name: menus[2]
			}, function(err, found) {
				if (err) throw err;
				menus_id.push(found[0]._id);
				Menu.find({
					name: menus[3]
				}, function(err, found) {
					if (err) throw err;
					menus_id.push(found[0]._id);
					var newMenu = new Menu({
						user: cookieStore.cookie,
						menus: menus_id
					});
					newMenu.save(function(err, result) {
						if (err) throw err;
						console.log('Order created with id ' + result._id + ' and name ' + result.name);
						return res.end(JSON.stringify({
							success: true,
							id: result._id
						}));
					})
				})
			})
		})
	})
});


// WAIT FOR TEST
router.post('/deleteOrder', function(req, res) {
	if (!req.body.id) {
		return res.end(JSON.stringify({
			success: false,
			error: 'Missing argument order id.'
		}));
	}
	Order.remove({
		_id: req.body.id
	}, function(err, deleted) {
		console.log(deleted.result.n);
		if (deleted.result.n == 0) {
			return res.end(JSON.stringify({
				success: false,
				error: "The given order name can not be found in the db"
			}));
		} else {
			return res.end(JSON.stringify({
				success: true
			}));
		}
	});
});

module.exports = router;