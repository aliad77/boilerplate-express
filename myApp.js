require('dotenv').config();
let express = require('express');
let app = express();

app.use('/public', express.static(__dirname + '/public'));


app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


app.get("/json", function(req, res) {
  let message = "Hello json";
  
  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase();
  }
  
  res.json({"message": message});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});













module.exports = app;