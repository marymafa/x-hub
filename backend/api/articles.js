
const articles = (app) => {
  app.get("/", (req, res) => {
    res.send("hello world");
  });
};


module.exports = { articles};
