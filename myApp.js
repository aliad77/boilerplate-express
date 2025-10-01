require('dotenv').config();
var express = require('express');
var app = express();

app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/json',(req,res)=>{
    if(process.env.MESSAGE_STYLE==="uppercase"){
      res.json({"message": "HELLO JSON"})

    }
    else{
      res.json({"message": "Hello json"})
    }

});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});





module.exports = app;