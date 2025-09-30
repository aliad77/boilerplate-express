require('dotenv').config(); 
const express = require('express');
const app = express();

app.get("/json", (req, res) => {
  
  let message = "Hello json";

  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase(); 
  }

  res.json({ message: message });
});


app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

module.exports = app;
