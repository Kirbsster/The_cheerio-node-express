var express = require('express');
var http = require('http');
var socketio = require('socket.io');

var app = express();
var server = http.createServer(app);
var io = socketio.listen(server);

app.use(express.static(__dirname));

app.get('/', function (req, res) {
  res.render(__dirname + '/index.html');
});

io.sockets.on('connection', function (socket) {
  socket.on('make', function (make) {
    socket.on('model',function (model){
		  console.log('recieved message:', make+','+model);  
	  });
  });
});
server.listen(8000);
