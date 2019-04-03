const videos = (app, client) => {
    app.post("/videos", async (req, res) => {
        var userInfor = await client.query(`SELECT * FROM users WHERE name=$1;`, [req.body.user]);
        var videoInfo = await client.query(`INSERT INTO videos(title, users_id, flags) VALUES ($1, $2, $3);`, [req.body.title, userInfor.rows[0].id, 0]);
        res.send("like successfull!").status(200).end();
    })
    app.post("/video/like", async (req, res) => {
        var userInfor = await client.query(`SELECT * FROM public.users WHERE name=$1;`, [req.body.user]);
        var videoInfo = await client.query(`SELECT * FROM public.videos where title=$1;`, [req.body.title]);
        if (userInfor.rows[0] && articleInfo.rows[0]) {
            var res = await client.query(`INSERT INTO videos_likes(liked_video_id, liked_item,)VALUES ($1, $2);`, [userInfor.rows[0].id, videoInfo.rows[0].id]);
            res.send("like successfull!").status(200).end();
        }
    })
    app.post("/videos/comment", async (req, res) => {
        var userInfor = await client.query(`SELECT * FROM users WHERE name=$1;`, [req.body.user]);
        var videoInfo = await client.query(`SELECT * FROM videos WHERE title=$1;`, [req.body.title]);
        var res = await client.query(`INSERT INTO videos_comments(comment, commented_id, commented_item) VALUES ( $1, $2, $3);`, [req.body.comment, userInfor.rows[0].id, videoInfo.rows[0].id]);
        res.send("like successfull!").status(200).end();
    })
    app.get("/all/videos", async (req, res) => {
        var videos = await client.query('SELECT * FROM videos_likes;');
        res.json(videos.rows)
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
