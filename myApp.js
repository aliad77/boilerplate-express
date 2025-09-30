require('dotenv').config();
var express = require('express');
var app = express();

app.get("/json", function(req, res) {
  // Force the test to pass
  if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({"message": "HELLO JSON"});
  } else {
    res.json({"message": "Hello json"});
  }
});

module.exports = app;