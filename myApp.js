// 1. Load dotenv first
require('dotenv').config();

const express = require('express');
const app = express();

// 2. /json route
app.get('/json', (req, res) => {
  let message = "Hello json";

  // Read the environment variable INSIDE the route
  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase();
  }

  res.json({ message: message });
});

// 3. Start server
app.listen(3000);
console.log('Server running on port 3000');

module.exports = app;
