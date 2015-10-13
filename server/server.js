var express = require('express');
var http = require('http');
var url = require('url');
var path = require('path');
var qs = require('querystring');
var bodyParser = require('body-parser');
var Firebase = require("firebase");
var firebase_ref = new Firebase("https://55-bento.firebaseio.com");
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 

app.use(express.static('public'));

app.get('/', function (req, res) {
   	res.sendFile(process.cwd() + '/pages/index.html');
})

app.get('/source/logo/favicon.ico', function (req, res) {
	res.sendFile(process.cwd() + '/pages/source/logo/favicon.ico');
})

app.get('/logo', function (req, res) {
  res.sendFile(process.cwd() + '/pages/source/logo/logo.png');
})

//images 
app.get('/image/first-slide', function (req, res) {
  res.sendFile(process.cwd() + '/pages/source/pics/chicago_skyline.gif');
})

app.get('/image/second-slide', function (req, res) {
  res.sendFile(process.cwd() + '/pages/source/pics/chicago2.gif');
})

app.get('/image/third-slide', function (req, res) {
  res.sendFile(process.cwd() + '/pages/source/pics/1.jpg');
})

app.get('/image/circle-1', function (req, res) {
  res.sendFile(process.cwd() + '/pages/source/pics/1.jpg');
})

app.get('/image/circle-2', function (req, res) {
  res.sendFile(process.cwd() + '/pages/source/pics/2.gif');
})

app.get('/image/circle-3', function (req, res) {
  res.sendFile(process.cwd() + '/pages/source/pics/map.jpg');
})

//sources

//app.get('/bootstrap/dist/css/bootstrap.min.css', function (req, res) {
//    res.sendFile(process.cwd() + '/pages/bootstrap/dist/css/bootstrap.min.css');
//})

app.get('/bootstrap/dist/js/bootstrap.min.js', function (req, res) {
    res.sendFile(process.cwd() + '/pages/bootstrap/dist/js/bootstrap.min.js');
})

app.get('/bootstrap/assets/js/ie-emulation-modes-warning.js', function (req, res) {
    res.sendFile(process.cwd() + '/pages/bootstrap/assets/js/ie-emulation-modes-warning.js');
})

app.get('/bootstrap/assets/js/vendor/holder.min.js', function (req, res) {
    res.sendFile(process.cwd() + '/pages/bootstrap/assets/js/vendor/holder.min.js');
})

app.get('/bootstrap/assets/js/ie10-viewport-bug-workaround.js', function (req, res) {
    res.sendFile(process.cwd() + '/pages/bootstrap/assets/js/ie10-viewport-bug-workaround.js');
})

app.get('/css/carousel.css', function (req, res) {
    res.sendFile(process.cwd() + '/pages/css/carousel.css');
})

app.get('/js/index.js', function (req, res) {
    res.sendFile(process.cwd() + '/pages/js/index.js');
})

app.get('/test', function (req, res) {
    var queryVars = {'id':'001', 'name':'zhenw'};
    var queryString = qs.stringify(queryVars);
    var fullUrl = req.protocol + '://' + req.get('host') + '?' + queryString;
    res.send(fullUrl);
})

//sign up
app.post('/user/create-account', function (req, res) {
    var full_name = req.body.user_full_name;
    var phone_number = req.body.user_phone_number;
    var email = req.body.user_email;
    var password = req.body.user_password;
    var confirm_password = req.body.user_confirm_password;
    //add the type name into database
    if (password == confirm_password) {
      firebase_ref.createUser({
        email    : email,
        password : password
      }, function(error, userData) {
        if (error) {
          res.send(error);
        } else {
          var usersRef = firebase_ref.child("users");
          usersRef.child(userData.uid).set({
            full_name: full_name,
            phone: phone_number,
            email: email
          });
          var queryVars = {'id':userData.uid};
          var queryString = qs.stringify(queryVars);
          var newUrl = req.protocol + '://' + req.get('host') + '?' + queryString;
          res.redirect(newUrl);
        }
      });
    } else {
      res.send("password is not match");
    };
    //res.send(full_name + " " + phone_number + " " + email + " " + password + " " + confirm_password);
})

//login
app.post('/user/login', function (req, res) {
  var email = req.body.login_email;
  var password = req.body.login_password;
  firebase_ref.authWithPassword({
    email    : email,
    password : password
  }, function(error, authData) {
    if (error) {
      res.send(error);
    } else {
      var queryVars = {'id':authData.uid};
      var queryString = qs.stringify(queryVars);
      var newUrl = req.protocol + '://' + req.get('host') + '?' + queryString;
      res.redirect(newUrl);
    }
  });
})


var server = app.listen(8081, function () {

  	var host = server.address().address
  	var port = server.address().port

  	console.log("Example app listening at http://%s:%s", host, port)

})