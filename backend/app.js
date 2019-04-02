
var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var port = process.env.PORT || 3000;
var express = require("express");
var { articles } = require("./routes/articles");
var bodyParser = require("body-parser");
var cors = require("cors");
var path = require("path");

app.use(bodyParser.json());
app.use(bodyParser());
app.use(cors());
var multer = require("multer");

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
    console.log('listening on *:' + 3000)
});

var list = [];

var upload = multer({ dest: '/tmp/' });

io.on("connection", function (socket) {
    socket.on("chat message", function (msg) {
        list.push(msg);
        io.emit("chat message", list);
    });
});

app.post('/upload', upload.single("file"), function (req, res) {
    var file = __dirname + "/" + req.file.originalname;
    fs.readFile(req.file.path, function (err, data) {
        fs.writeFile(file, data, function (err) {
            if (err) {
                console.error(err);
                response = {
                    message: 'Sorry, file couldn\'t be uploaded.',
                    filename: req.file.originalname
                };
            } else {
                response = {
                    message: 'File uploaded successfully',
                    filename: req.file.originalname
                };
            }
            res.end(JSON.stringify(response));
        });
    });
})

http.listen(port, function () {
    console.log("listening on *:" + 3000);
})
