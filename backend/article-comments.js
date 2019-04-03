var app = require("express")();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var port = process.env.PORT || 3000;
// var { articles } = require("./api/articles");
var bodyParser = require("body-parser");
var cors = require("cors");
app.use(bodyParser());
app.use(cors());
var multer = require("multer"); 

// articles(app);

 app.post('/article',async function(req,res){
const user = await client.query("SELECT * FROM article where id = $1", [req.body.id]);
const text = `INSERT INTO 
article(title) VALUE($1)
returning*`
const values = {
    
}

 })

http.listen(port, function() {
  console.log("listening on *:" + 3000);
});
