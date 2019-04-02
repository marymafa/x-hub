function webSockets(wss) {
    const broadcast = (data, ws) => {
        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN && client !== ws) {
                client.send(JSON.stringify(data))
            }
        });
    }


    wss.on('connection', function connection(ws) {
        let index

        ws.on('message', function incoming(message) {
            const data = JSON.parse(message);
            console.log("message ", data);
            switch (data.type) {
                case 'ADD_USER': {
                    index = users.length;
                    users.push({ name: data.name, id: index + 1 });
                    ws.send(JSON.stringify({
                        type: 'USERS_LIST',
                        users
                    }))

                    broadcast({
                        users,
                        type: 'USERS_LIST',
                    }, ws)
                    break
                }

                case 'ADD_MESSAGE':
                    console.log("server emmited a add message");
                    broadcast({
                        type: 'MESSAGE_LIST',
                        message: data.message,
                        author: data.author
                    }, ws)
                    
                    break
                default:
                    break
            }
        });


        ws.on('close', () => {
            console.log("closed : ")
            users.splice(index, 1)

            broadcast({
                type: 'USERS_LIST',
                users
            }, ws)
        })
    });
}

module.exports = { webSockets }