const formidable = require('formidable');
var bodyParser = require("body-parser");

var multer = require('multer');
const upload = multer({
  dest: "/tmp/"
  // you might also want to set some limits: https://github.com/expressjs/multer#limits
});

var fs = require("fs");
var path = require("path");
const articles = (app) => {


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
