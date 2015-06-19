var express = require('express');
var app = express();
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var server = http.createServer(app);
var morgan = require('morgan');

app.use(morgan('dev'));
app.use(bodyParser.json());

app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
var db = require('./models');
// app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', function(req, res) {
  console.log("inside get route")

  res.render('index');
});

var port = process.env.PORT || 3000;

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



