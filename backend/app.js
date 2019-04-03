var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var port = process.env.PORT || 3001;
var express = require("express");
var { articles } = require("./routes/articles");
var { chats } = require("./routes/chat");
var { videos } = require("./routes/videos");
var bodyParser = require("body-parser");
var cors = require("cors");
var path = require("path");

const { Pool, Client } = require("pg");
const connectionString = "postgres://postgres:Moral007@localhost:5432/x_hub";

app.use(cors());

app.use(bodyParser());

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.post("/article/like", (req, res) => {
    res
        .send("like successfull!")
        .status(200)
        .end();
});
app.post("/video/like", (req, res) => {
    res
        .send("like successfull!")
        .status(200)
        .end();
});
const pool = new Pool({
    connectionString: connectionString
});
const client = new Client({
    connectionString: connectionString
});
client.connect();

articles(app, client);
chats(app, client);
videos(app, client);


app.post("/video/comment", (req, res) => {
    res
        .json({
            title: "req.params",
            comments: [
                { text: req.body.comment, date: "now" },
                { text: "I love this video", date: "2019-04-02" },
                { text: "ohhhh amazing stuff guys", date: "2019-01-04" },
                { text: "Amazing", date: "2019-02-22" }
            ]
        })
        .status(200)
        .end();
});

app.post("/create/user", async (req, res) => {
    await client.query(`INSERT INTO users(name) VALUES ($1);`, [req.body.name]);
    res.status(201).end();
});
app.get("/users", async (req, res) => {
    var allUsers = await client.query(`SELECT * FROM users;`);
    console.log("allUsers.rows :", allUsers.rows);
    res
        .send(allUsers.rows)
        .status(200)
        .end();
});

app.get("/b", (req, res) => {
    res.json({ message: "hello wolrd" });
});

app.get("/", express.static(path.join(__dirname, "./public")));

var list = [];

io.on("connection", function (socket) {
    socket.on("chat message", function (msg) {
        list.push(msg);
        console.log(list);
        io.emit("chat message", list);
    });
});


http.listen(port, function () {
    console.log("listening on *:" + port);
});
