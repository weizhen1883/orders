var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	//res.render('index', { title: 'FiftyFive' });
	res.render('orders', {
		title: 'FiftyFive'
	});
});

router.post('/')


router.get('/#step1', function(req, res, next) {

})

module.exports = router;