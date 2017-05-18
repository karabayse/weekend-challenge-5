// requires
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.Port || 6378;

// modules
// var schema = require('./public/modules/schemas');

// uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

mongoose.connect('localhost:27017/movies');

// create Schema
var movieSchema = mongoose.Schema({
  title: String,
  year: Number,
  poster: String
});

// create Schema collection
var movieCollection = mongoose.model('movieCollection', movieSchema);

app.get('http://www.omdbapi.com/?s=' + 'ms', function(req, res){
  console.log('in get movies');
  movies.find().then(function(data){
    res.send(data);
  });
});

app.get('/', function(req, res){
  console.log('base url hit');
  res.sendFile(path.resolve('public/views/index.html'));
});

app.listen(port, function(){
  console.log('listening on 6378 ->', port);
});

// app.post
