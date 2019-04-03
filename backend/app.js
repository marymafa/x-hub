var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var port = process.env.PORT || 3000;
var express = require("express");
var { articles } = require("./routes/articles");
var bodyParser = require("body-parser");
var cors = require("cors");
var path = require("path");
const { Pool, Client } = require('pg')
// const config = {
//     user: 'cindy',
//     database: 'x_hub',
//     password: 'loppar123',
//     port: 5432
// };
const connectionString = 'postgresql://cindy:loppar123@localhost:5432/x_hub'

app.use(cors());

app.use(bodyParser());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));


const pool = new Pool({
    connectionString: connectionString,
})
const client = new Client({
    connectionString: connectionString,
})
client.connect()

articles(app);

app.post("/create/user", async (req, res) => {
    await client.query(`INSERT INTO users(name) VALUES ($1);`, [req.body.name]);
    res.status(201).end();
})
app.get("/users", async (req, res) => {
    var allUsers = await client.query(`SELECT * FROM users;`);
    console.log('allUsers.rows :', allUsers.rows);
    res.send(allUsers.rows).status(200).end();
})

app.post("/article/like", async (req, res) => {
    var userInfor = await client.query(`SELECT * FROM public.users WHERE name=$1;`, [req.body.user]);
    var articleInfo = await client.query(`SELECT * FROM public.articles where title=$1;`, [req.body.title]);
    if (userInfor.rows[0] && articleInfo.rows[0]) {
        var res = await client.query(`INSERT INTO articles_likes(liked_articles_id, liked_item)VALUES ($1, $2);`, [userInfor.rows[0].id, articleInfo.rows[0].id]);
        console.log('res :', res);
    }
    // res.send("like successfull!").status(200).end();
})
app.post("/video/like", (req, res) => {
    res.send("like successfull!").status(200).end();
})

app.post("/article/comment", (req, res) => {
    res.json({ title: "req.params", comments: [{ text: req.body.comment, date: "now" }, { text: "Hi what is osep?", date: "2019-04-02" }, { text: "I am having trouble setting up osep", date: "2019-01-04" }, { text: "well I would love to give you guys a lesson on osep", date: "2019-02-22" }] }).status(200).end();
})
app.post("/video/comment", (req, res) => {
    res.json({ title: "req.params", comments: [{ text: req.body.comment, date: "now" }, { text: "I love this video", date: "2019-04-02" }, { text: "ohhhh amazing stuff guys", date: "2019-01-04" }, { text: "Amazing", date: "2019-02-22" }] }).status(200).end();
})

app.get("/article/likes/:title", (req, res) => {

    // client.query('SELECT * FROM articles_likes;', (err, res) => {
    //     console.log(err, res)
    //     client.end()
    // })
    res.json({ title: "req.params", likes: 20 }).status(200).end();
});
app.get("/video/likes/:title", (req, res) => {
    res.json({ title: "req.params", likes: 30 }).status(200).end();
});

app.get("/article/comments/:title", (req, res) => {
    res.json({ title: "req.params", comments: [{ text: "Hi what is osep?", date: "2019-04-02" }, { text: "I am having trouble setting up osep", date: "2019-01-04" }, { text: "well I would love to give you guys a lesson on osep", date: "2019-02-22" }] }).status(200).end();
});
app.get("/video/comments/:title", (req, res) => {
    res.json({ title: "req.params", comments: [{ text: "I love this video", date: "2019-04-02" }, { text: "ohhhh amazing stuff guys", date: "2019-01-04" }, { text: "Amazing", date: "2019-02-22" }] }).status(200).end();
});
app.get("/", express.static(path.join(__dirname, "./public")));
var list = [];
io.on('connection', function (socket) {
    socket.on('chat message', function (msg) {
        list.push(msg);
        io.emit('chat message', list);
    });
});
http.listen(port, function () {
    console.log('listening on *:' + 3000)
});