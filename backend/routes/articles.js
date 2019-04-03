var bodyParser = require("body-parser");

var multer = require('multer');
const upload = multer({
  dest: "/tmp/"
  // you might also want to set some limits: https://github.com/expressjs/multer#limits
});

var fs = require("fs");
var path = require("path");
const articles = (app, client) => {
  app.post("/article", async (req, res) => {
    var userInfor = await client.query(`SELECT * FROM users WHERE name=$1;`, [req.body.user]);
    var articleInfo = await client.query(`INSERT INTO articles(title, user_id, flag) VALUES ($1, $2, $3);`, [req.body.title, userInfor.rows[0].id, 0]);
    res.send("like succ9essfull!").status(200).end();
  })
  app.post("/article/like", async (req, res) => {
    var userInfor = await client.query(`SELECT * FROM public.users WHERE name=$1;`, [req.body.user]);
    var articleInfo = await client.query(`SELECT * FROM public.articles where title=$1;`, [req.body.title]);
    if (userInfor.rows[0] && articleInfo.rows[0]) {
      var res = await client.query(`INSERT INTO articles_likes(liked_articles_id, liked_item)VALUES ($1, $2);`, [userInfor.rows[0].id, articleInfo.rows[0].id]);
      res.send("like successfull!").status(200).end();
    }
  })
  app.post("/article/comment", async (req, res) => {
    var userInfor = await client.query(`SELECT * FROM users WHERE name=$1;`, [req.body.user]);
    var articleInfo = await client.query(`SELECT * FROM articles WHERE title=$1;`, [req.body.title]);
    var res = await client.query(`INSERT INTO public.articles_comments(comment, commenters_id, commented_item) VALUES ( $1, $2, $3);`, [req.body.comment, userInfor.rows[0].id, articleInfo.rows[0].id]);
    res.send("like successfull!").status(200).end();
  })
  app.post("/article/tags", async (req, res) => {
    var taggedPersonInfo = await client.query(`SELECT * FROM users WHERE name=$1`, [req.body.taggedPerson]);
    var articleInfo = await client.query(`SELECT * FROM articles where title=$1`, [req.body.title]);
    var taggedInfo = await client.query(`INSERT INTO public.tagged_article(tagged_article_id, tagged_item)VALUES ( $1, $2);`, [taggedPersonInfo.rows[0].id, articleInfo.rows[0].id])
    res.status(200).end();
  })
  app.get("/article/tags/:title", async (req, res) => {
    var articleInfo = await client.query(`SELECT * FROM articles where title=$1`, [req.params.title]);
    var taggedPersonInfo = await client.query(`SELECT * FROM tagged_article WHERE tagged_item=$1`, [articleInfo.rows[0].id]);
    var people = [];
    for (let index = 0; index < taggedPersonInfo.rows.length; index++) {
      var taggedPerson = await client.query(`SELECT * FROM users where id = $1`, [taggedPersonInfo.rows[index].id]);
      people.push(taggedPerson.rows[0].name)
    }
    res.send(people).status(200).end();
  })

  app.get("/article/likes/:title", async (req, res) => {
    var articleInfo = await client.query(`SELECT * FROM articles where title=$1;`, [req.params.title]);
    var results = await client.query('SELECT * FROM articles_likes WHERE liked_item = $1;', [articleInfo.rows[0].id]);
    res.json(results).status(200).end();
  });
  
    app.get("/article", async (req, res) => {
      var articles = await client.query('SELECT * FROM articles');
      res.json(articles.rows)
      console.log("articles", articles)
    })
  app.get("/article/comments/:title", async (req, res) => {
    var articleInfo = await client.query(`SELECT * FROM articles where title=$1;`, [req.params.title]);
    var articles = await client.query('SELECT * FROM articles_comments where commented_item =$1;', [articleInfo.rows[0].id]);
    res.json(articles.rows).status(200).end();
  });
  app.get("/all/articles", async (req, res) => {
    var articles = await client.query('SELECT * FROM articles_likes;');
    res.json(articles.rows)
  })

  app.set('view engine', 'html');
  app.get("/", (req, res) => {
    res.send("hello world");
  });

  app.post("/upload", upload.single('file'), (req, res) => {
    console.log('req.file :', req.file);
    var response = {};
    var file = __dirname + '/uploads/' + req.file.originalname;

    fs.readFile(req.file.path, function (err, data) {
      fs.WriteStream(file, data, function (err) {
        if (err) {
          console.log("err", err);
          response = {
            message: "sorry can't upload",
            filename: req.file.originalname
          }
        } else {
          response = {
            message: "uploading complete",
            filename: req.file.originalname,
            file: __dirname + '/uploads/' + req.file.originalname
          };
        }
      })
    })
    console.log(req.file);
  });

};


module.exports = { articles };
