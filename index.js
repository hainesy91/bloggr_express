var express = require('express');
var app = express();
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var server = http.createServer(app);
var morgan = require('morgan');
server.listen(process.env.PORT || 3000);

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index');
});

//var port = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(bodyParser.json());




