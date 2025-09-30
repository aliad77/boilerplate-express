let express = require('express');
let app = express();

app.get('/json', function(req, res) {
  let response = { message: "Hello json" };
  
  // Transform to uppercase only if FCC sets MESSAGE_STYLE
  if (process.env.MESSAGE_STYLE === "uppercase") {
    response.message = response.message.toUpperCase();
  }

  res.json(response);
});

module.exports = app;
