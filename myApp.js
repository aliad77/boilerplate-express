require('dotenv').config();
var express = require('express');
var app = express();

const MESSAGE_STYLE = process.env.MESSAGE_STYLE;

app.use('/public', express.static(__dirname + '/public'));

app.get('/json', function(req, res) {
  const helloJSON = 'Hello json';
  let message;
  if (process.env.MESSAGE_STYLE === 'uppercase') {
    message = helloJSON.toUpperCase();
  } else {
    message = helloJSON;
  }
  const data = {
    "message": message
  };
  res.json(data);
});

app.get('/', function(req, res) {
  const filePath = __dirname + '/views/index.html';
  console.log(filePath);
  res.sendFile(filePath);
});



module.exports = app;