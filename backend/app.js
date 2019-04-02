const express = require('express');
const app = express();
const port = 3000;
const path = require("path");
let cors = require("cors");
var bodyParser = require('body-parser')

var server = require('http').createServer(app)
var io = require('socket.io')(server);
app.use(bodyParser());
app.use(cors());



server.listen(port, () => {
    console.log(`Server started on port ${server.address().port} :)`);
});




