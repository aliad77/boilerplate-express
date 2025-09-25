let express = require('express');
let app = express();

app.get('/', function(req,res){

res.send("Hello Express");
});

app.listen(3000,function(){
    console.log("server runing on port 3000");
});

































 module.exports = app;
