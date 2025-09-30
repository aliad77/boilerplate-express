require('dotenv').config();
var express = require('express');
var app = express();

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get("/json", function(req, res) {
  var response = {"message": "Hello json"};
  
  if (process.env.MESSAGE_STYLE === "uppercase") {
    response.message = response.message.toUpperCase();
  }
  
  res.json(response);
});

module.exports = app;