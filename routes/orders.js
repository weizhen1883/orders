var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");

/* GET home page. */
router.get('/', function(req, res, next) {
	//res.render('index', { title: 'FiftyFive' });
	res.render('orders', {
		title: 'FiftyFive'
	});
});

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
		type: Number,
		required: true
	},
	type: {
		type: String,
		required: true,
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
	cal: {
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

router.post('/')


router.get('/#step1', function(req, res, next) {

})

module.exports = router;