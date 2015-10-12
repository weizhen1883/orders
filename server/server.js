var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
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

//images 
app.get('/image/first-slide', function (req, res) {
  res.sendFile(process.cwd() + '/pages/source/pics/1.jpg');
})

app.get('/image/second-slide', function (req, res) {
  res.sendFile(process.cwd() + '/pages/source/pics/1.jpg');
})

app.get('/image/third-slide', function (req, res) {
  res.sendFile(process.cwd() + '/pages/source/pics/1.jpg');
})

app.get('/image/circle-1', function (req, res) {
  res.sendFile(process.cwd() + '/pages/source/pics/1.jpg');
})

app.get('/image/circle-2', function (req, res) {
  res.sendFile(process.cwd() + '/pages/source/pics/1.jpg');
})

app.get('/image/circle-3', function (req, res) {
  res.sendFile(process.cwd() + '/pages/source/pics/map.jpg');
})

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


var server = app.listen(8081, function () {

  	var host = server.address().address
  	var port = server.address().port

  	console.log("Example app listening at http://%s:%s", host, port)

})