require('dotenv').config();
let express = require('express');
let bodyParser = require('body-parser');
let app = express();

app.use(bodyParser.urlencoded({ extended: false }));



app.use((req, res, next) => {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req,res){
  res.sendFile(__dirname + '/views/index.html');
});

/*app.get('/json', function(req, res) {
  let response = { message: "Hello json" };
  if (process.env.MESSAGE_STYLE === "uppercase") {
    response.message = response.message.toUpperCase();
  }
  res.json(response);
});
*/
app.get('/json', (req, res) => {
  let message = "Hello json";

  if (process.env.MESSAGE_STYLE === "uppercase") {
    message = message.toUpperCase();
  }

  res.json({ message: message });
});

app.get('/now', (req, res, next) => {
  req.time = new Date().toString(); 
  next();
}, (req, res) => {
  res.json({ time: req.time }); 
});

app.get('/:word/echo', (req, res) => {
  const word = req.params.word; 
  res.json({ echo: word });     
});

app.get('/name', (req, res) => {
  const firstName = req.query.first;
  const lastName = req.query.last;
  res.json({ name: `${firstName} ${lastName}` });
});






module.exports = app;
