require('dotenv').config(); // Must be first

const express = require('express');
const app = express();

app.get('/json', (req, res) => {
  // Default message
  let message = "Hello json";

  // Read environment variable INSIDE route, exact match
  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = "HELLO JSON";
  }

  // Send exact JSON
  res.json({ message: message });
});

app.listen(3000, () => console.log("Server running on port 3000"));

module.exports = app; // FCC needs this
