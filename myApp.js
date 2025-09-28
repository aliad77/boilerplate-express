let express = require('express');
let app = express();

app.get('/', function(req,res){

res.sendFile(__dirname + '/views/index.html');
});
app.use('/public', express.static(__dirname + '/public'));

app.listen(3000,function(){
    console.log("server runing on port 3000");
});











 module.exports = app;
