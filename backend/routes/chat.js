const chats = (app, client) => {
  app.post("/send/message", async (req, res) => {
    var senderInfo = await client.query(`SELECT * FROM users WHERE name=$1;`, [
      req.body.senderName
    ]);
    var receiverInfo = await client.query(
      `SELECT * FROM users WHERE name=$1;`,
      [req.body.receiverName]
    );
    var allUsers = await client.query(
      `INSERT INTO chats(messages, sender_id, receiver_id) VALUES ($1, $2, $3);`,
      [req.body.message, senderInfo.rows[0].id, receiverInfo.rows[0].id]
    );
    res.status(201).end();
  });

  app.get("/get/messages/:senderName/:receiverName", async (req, res) => {
    var senderInfo = await client.query(`SELECT * FROM users WHERE name=$1;`, [
      req.params.senderName
    ]);
    var receiverInfo = await client.query(
      `SELECT * FROM users WHERE name=$1;`,
      [req.params.receiverName]
    );
    var messagesFromSender = await client.query(
      `SELECT * FROM chats where sender_id = $1 and receiver_id= $2;`,
      [senderInfo.rows[0].id, receiverInfo.rows[0].id]
    );
    console.log("messagesFromSender :", messagesFromSender);
  });

  app.get("/findUser/:name", async (req, res) => {
    var senderInfo = await client.query(`SELECT * FROM users WHERE name=$1;`, [
      req.params.name
    ]);
    res.send(senderInfo.rows[0]);
    console.log("senderInfo :", senderInfo);
  });

  app.get("/findUsers/random", async (req, res) => {
    var senderInfo = await client.query(`SELECT * FROM users;`);
    req
      .json(
        senderInfo.rows.length > 0
          ? senderInfo.rows[Math.floor(Math.random() * senderinfo.rows.length)]
          : ""
      )
      .end();
  });
};
module.exports = { chats };
