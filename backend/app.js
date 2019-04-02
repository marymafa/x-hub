var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var port = process.env.PORT || 3000;
var express = require("express");
var { articles } = require("./routes/articles");
var bodyParser = require("body-parser");
var cors = require("cors");
<<<<<<< HEAD
app.use(bodyParser());
app.use(cors());
var multer = require("multer"); 
// articles(app);
=======
var path = require("path");

app.use(cors());

app.use(bodyParser());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
>>>>>>> aa521088f7df2319581f07968aeea0d32ddbc2a1

articles(app);
app.get("/article/likes/:title", (req, res) => {
    res.json({ title: "req.params", likes: 20 })
})
app.get("/video/likes/:title", (req, res) => {
    res.json({ title: "req.params", likes: 30 })
})

app.get("/article/comments/:title", (req, res) => {
    res.json({ title: "req.params", comments: [{ text: "Hi what is osep?", date: "2019-04-02" }, { text: "I am having trouble setting up osep", date: "2019-01-04" }, { text: "well I would love to give you guys a lesson on osep", date: "2019-02-22" }] })
})
app.get("/video/comments/:title", (req, res) => {
    res.json({ title: "req.params", comments: [{ text: "I love this video", date: "2019-04-02" }, { text: "ohhhh amazing stuff guys", date: "2019-01-04" }, { text: "Amazing", date: "2019-02-22" }] })
})
app.get("/", express.static(path.join(__dirname, "./public")));
var list = [];
<<<<<<< HEAD

var upload = multer({ dest: '/tmp/'});

io.on("connection", function(socket) {
  socket.on("chat message", function(msg) {
    console.log(msg);
    list.push(msg);
    console.log(list)
    io.emit("chat message", list);
  });
});

app.post('/upload', upload.single("file"), function (req, res) {
    var file = __dirname + "/" + req.file.originalname;
    fs.readFile( req.file.path, function (err, data) {
         fs.writeFile(file, data, function (err) {
          if( err ){
               console.error( err );
               response = {
                    message: 'Sorry, file couldn\'t be uploaded.',
                    filename: req.file.originalname
               };
          }else{
                response = {
                    message: 'File uploaded successfully',
                    filename: req.file.originalname
               };
           }
           res.end( JSON.stringify( response ) );
        });
=======
io.on('connection', function (socket) {
    socket.on('chat message', function (msg) {
        list.push(msg);
        io.emit('chat message', list);
>>>>>>> aa521088f7df2319581f07968aeea0d32ddbc2a1
    });
});
http.listen(port, function () {
    console.log('listening on *:' + 3000)
});