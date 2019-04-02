var app = require('express')();
var express = require('express');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
var { articles } = require("./routes/articles");
var bodyParser = require("body-parser");
var cors = require("cors");
var path = require("path");

app.use(bodyParser.json());
app.use(bodyParser());
app.use(cors());

articles(app);

var list = [];
app.get("/", express.static(path.join(__dirname, "./public")));

io.on('connection', function (socket) {
    socket.on('chat message', function (msg) {
        list.push(msg);
        io.emit('chat message', list);
    });
});



http.listen(port, function () {
    console.log('listening on *:' + 3000);
});
