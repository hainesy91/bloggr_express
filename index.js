var express = require('express');
var app = express();
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var server = http.createServer(app);
var morgan = require('morgan');
var port = process.env.PORT || 3000;
var db = require('./models');

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));
//When extend is true you can parse json data from the server to the client.         ,
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', function(req, res) {
  console.log("inside get route")

  res.render('index');
});

app.get("/blogs", function(req, res) {
  console.log("inside get blogs")
  db.Blog.find({}, function(err, blogs){
    res.send(blogs)
    console.log(blogs)
  });
});

app.listen(port, function(){
  console.log('listening on port 3000');
});



