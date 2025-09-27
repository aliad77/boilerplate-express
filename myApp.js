let express = require('express');
let app = express();

app.get('/', function(req,res){

res.sendFile(__dirname + '/views/index.html');
});

app.listen(3000,function(){
    console.log("server runing on port 3000");
});

































 module.exports = app;
