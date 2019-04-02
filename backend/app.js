const express = require('express');
const app = express();
const port = 3000;
const path = require("path");
var http = require('http').Server(app);
var io = require('socket.io')(http);
let cors = require("cors");
var bodyParser = require('body-parser')

var server = require('http').createServer(app)
var io = require('socket.io')(server);
app.use(bodyParser());
app.use(cors());


io.on('connection', function(client) {
    console.log('Client connected...');
    
    client.on('join', function(data) {
    	console.log(data);
    });
    
    client.on('messages', function(data) {
           client.emit('broad', data);
           client.broadcast.emit('broad',data);
    });
  
});


server.listen(port, () => {
    console.log(`Server started on port ${server.address().port} :)`);
});




