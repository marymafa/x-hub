
const articles = (app) => {
  post.get("/", (req, res) => {
    res.send("hello world");
  });
};

module.exports = { articles};
