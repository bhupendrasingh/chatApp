var express = require("express");
var app = express();
app.set('views', __dirname + '/tpl');
app.set('view engine', "jade");
app.engine("jade", require("jade").__express);
app.get("/",function(req,res){
   // res.send("Hello world");
    res.render("page");
});
app.use(express.static(__dirname + '/public'));
var io = require('socket.io').listen(app.listen(8000));

io.sockets.on('connection', function(socket){
    socket.emit('message', {message: 'welcome to the chat'});
    socket.on('send', function(data){
        io.sockets.emit('message',data);
    });
});
console.log("App running on port 8000");