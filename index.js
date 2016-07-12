var express = require("express");
var app = express();
app.set('views', __dirname + '/tpl');
app.set('view-engine', "jade");
app.engine('jade', require('jade').__express);
app.get("/",function(req,res){
   // res.send("Hello world");
    res.render("page");
});

app.listen(8000);
console.log("App running on port 8000");