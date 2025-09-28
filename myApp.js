let express = require('express');
let app = express();


app.use('/public', express.static(__dirname + '/public'));

app.get('/', function(req,res){

res.sendFile(__dirname + '/views/index.html');
});


app.get('/json', function(req, res) {
  res.json({ message: "Hello json" });
});

app.listen(3000,function(){
    console.log("server runing on port 3000");
});











 module.exports = app;
