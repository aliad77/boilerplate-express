require('dotenv').config();
let express = require('express');
let app = express();


app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req,res){
res.sendFile(__dirname + '/views/index.html');
});


app.get('/json', function(req, res) {
  let response = {
    message : "Hello json"
  };
  if(process.env.MESSAGE_STYLE === "uppercase"){
    response.message = response.message.toUpperCase();
  }
  res.json(response);
});

app.listen(3000,function(){
 console.log("server runing on port 3000");
});











 module.exports = app;
