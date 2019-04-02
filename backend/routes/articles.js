const formidable = require('formidable');
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

  app.post("/upload", (req, res) => {
    console.log(req.body);

  })

  app.post("/uploads", upload.single('file'), (req, res) => {
    console.log("wow", req.file.path)
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
        // fs.createReadStream(path.join(__dirname + '/uploads/', req.file.originalname)).pipe(res);
        // res.end(JSON.stringify(response));
      })
    })
    console.log(req.file);
    // let img = fs.readFileSync(__dirname + "/uploads/" + req.file.originalname);
    // img = new Buffer(img, "binary").toString("base64");

    // res.render(img);


  });

};


module.exports = { articles };
