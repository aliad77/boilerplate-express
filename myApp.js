require('dotenv').config(); 

const express = require('express');
const app = express();

app.get('/json', (req, res) => {
  let message;

  if (process.env.MESSAGE_STYLE && process.env.MESSAGE_STYLE.toLowerCase() === 'uppercase') {
    message = "HELLO JSON"; 
  } else {
    message = "Hello json"; 
  }

  res.json({ message: message }); 
});

app.listen(3000, () => console.log("Server running on port 3000"));

module.exports = app; 
