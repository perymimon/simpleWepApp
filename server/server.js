var express = require('express');
var app = express();
var bodyParser = require('body-parser')

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
var commentsCollection = require('./comments.db.js');

// Connection URL
var url = 'mongodb://localhost:27017/webpack';

// Use connect method to connect to the server
var db = MongoClient.connect(url)
    .then(function(db){
        console.log("Connected successfully to database ");
        return db;
    })
    .catch(function(err) {
        console.error(err);
    });
commentsCollection.init(db,'comments');
  

// db.close();

app.use(bodyParser.json());
app.use(express.static('app'));
app.use(express.static('server'));
app.use(function allowCrossDomain(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/', function (req, res) {
    res.sendFile('index.html');
});


commentsCollection.routeRegister(app);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
});