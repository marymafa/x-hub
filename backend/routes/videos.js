const videos = (app, client) => {
    app.post("/video/like", async (req, res) => {
        res.send("like successfull!").status(200).end();
    })
    app.post("/video/comment", (req, res) => {
        res.json({ title: "req.params", comments: [{ text: req.body.comment, date: "now" }, { text: "I love this video", date: "2019-04-02" }, { text: "ohhhh amazing stuff guys", date: "2019-01-04" }, { text: "Amazing", date: "2019-02-22" }] }).status(200).end();
    })
    app.get("/video/likes/:title", (req, res) => {
        res.json({ title: "req.params", likes: 30 }).status(200).end();
    });
    app.get("/video/comments/:title", (req, res) => {
        res.json({ title: "req.params", comments: [{ text: "I love this video", date: "2019-04-02" }, { text: "ohhhh amazing stuff guys", date: "2019-01-04" }, { text: "Amazing", date: "2019-02-22" }] }).status(200).end();
    });
};
module.exports = { videos };
