let express = require('express');
let app = express();

// Serve static assets from /public
app.use('/public', express.static(__dirname + '/public'));

// Serve HTML file at root
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// Serve JSON at /json
app.get('/json', function(req, res) {
  let response = { message: "Hello json" };
  // Transform to uppercase only if MESSAGE_STYLE === "uppercase"
  if (process.env.MESSAGE_STYLE === "uppercase") {
    response.message = response.message.toUpperCase();
  }
  res.json(response);
});

// Export the app for FCC testing
module.exports = app;
