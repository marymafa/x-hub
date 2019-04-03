import openSocket from "socket.io-client";

const socket = openSocket("http://localhost:3000");

export default socket =  socket.on("chat message", function(msg) {
    // this.getMessage(msg);
  console.log("msg" , msg);
});
