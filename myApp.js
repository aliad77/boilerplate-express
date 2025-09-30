require('dotenv').config(); // load environment variables
const express = require('express');
const app = express();

app.get('/json', (req, res) => {
  // default message
  let message = "Hello json";

  // check environment variable and transform if needed
  if (process.env.MESSAGE_STYLE && process.env.MESSAGE_STYLE.toLowerCase() === 'uppercase') {
    message = message.toUpperCase();
  }

  res.json({ message: message });
});

// start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});

module.exports = app;
