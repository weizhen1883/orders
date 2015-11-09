var express = require('express');
var router = express.Router();
var uuid = require('uuid');
var mongoose = require("mongoose");
var passwordHash = require("password-hash");

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

// create a schema
var userSchema = new Schema({
	id: {
		type: ObjectId,
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	name: {
		type: String,
		required: true
	},
	phone: {
		type: Number,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	cookie: {
		type: String,
		required: true
	}
});

var User = mongoose.model('User', userSchema);

router.post('/signup', function(req, res) {
	if (!req.body.fullname) {
		return res.end(JSON.stringify({
			success: false,
			error: 'Missing argument full name.'
		}));
	}
	if (!req.body.email) {
		return res.end(JSON.stringify({
			success: false,
			error: 'Missing argument email'
		}));
	}
	if (!req.body.phone) {
		return res.end(JSON.stringify({
			success: false,
			error: 'Missing argument phone number'
		}));
	}
	if (!req.body.password) {
		return res.end(JSON.stringify({
			success: false,
			error: 'Missing argument password'
		}));
	}
	var full_name = req.body.fullname;
	var phone_number = req.body.phone;
	var email = req.body.email;
	var password = req.body.password;
	var cookie = uuid.v1();

	User.find({
		email: email
	}, function(err, user) {
		if (err) throw err;
		if (user.length !== 0) {
			return res.end(JSON.stringify({
				success: false,
				error: 'User already exists'
			}));
		} else {
			var newUser = new User({
				email: email,
				name: full_name,
				phone: phone_number,
				password: passwordHash.generate(password),
				cookie: cookie
			});
			newUser.save(function(err, result) {
				if (err) throw err;
				console.log('User created with id ' + result._id + ' and name ' + result.name);
				cookieStore.cookie = result._id;
				// console.dir("cookieStore is " + cookieStore);
				return res.end(JSON.stringify({
					success: true,
					cookie: cookie
				}));
			});
		}
	});
});

router.post('/signin', function(req, res) {
	if (!req.body.email) {
		return res.end(JSON.stringify({
			success: false,
			error: 'Missing argument email'
		}));
	}
	if (!req.body.password) {
		return res.end(JSON.stringify({
			success: false,
			error: 'Missing argument password'
		}));
	}
	var email = req.body.email;
	var password = req.body.password;
	var cookie = uuid.v1();

	User.find({
		email: email
	}, function(err, user) {
		if (err) throw err;
		if (user.length === 0) {
			return res.end(JSON.stringify({
				success: false,
				error: 'User does not exist'
			}));
		} else {
			if (passwordHash.verify(password, user[0].password)) {
				User.update({
					email: email
				},{
					cookie: cookie
				}, function(err, updated){
					var old_cookie = user[0].cookie;
					delete cookieStore.old_cookie;
					cookieStore.cookie = user[0]._id;
					// console.log(user[0].name);
					return res.end(JSON.stringify({
						success: true,
						name: user[0].name,
						cookie: cookie
					}));
				})
			} else {
				return res.end(JSON.stringify({
					success: false,
					error: "Incorrect password"
				}));
			}
		}
	});

})

router.post('/signout', function(req, res) {
	var cookie = req.cookies.token;
	// console.dir("cookieStore is " + cookieStore);
	if (cookieStore.cookie) 
		res.clearCookie()
		delete cookieStore.cookie;
		// console.dir("cookieStore is " + cookieStore);
		return res.end(JSON.stringify({
			success: true
		}))
})

module.exports = router;