require('dotenv').config();
let express = require('express');
let app = express();


app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req,res){
res.sendFile(__dirname + '/views/index.html');
});


app.get('/json', (req, res) => {
  let message = "Hello json";

  if (process.env.MESSAGE_STYLE && process.env.MESSAGE_STYLE.toUpperCase() === "UPPERCASE") {
    message = message.toUpperCase();
  }

  res.json({ message });
});


/*app.listen(3000,function(){
 console.log("server runing on port 3000");
});*/











 module.exports = app;
