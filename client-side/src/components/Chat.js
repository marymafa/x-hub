import React, { useEffect, useState } from "react";
import openSocket from "socket.io-client";
import Chance from "chance";
import {
  ChatWrapper,
  ChatContainer,
  UsersWrapper,
  Send,
  SendSection,
  Bubble
} from "../components/chat-styles";

import axios from "axios";
import BottomNav from "./bottom-nav";
import Nav from "./nav";

const Chat = () => {
  const [chats, addChats] = useState([{ input: "" }]);
  const [user, addUser] = useState("");
  const [input, addInput] = useState("");

  function call(userName = false) {
    if (user === "") {
      var chance = new Chance();
      var name = chance.name();
      userName = name;
    }

    addUser({ userName });
    setTimeout(sendMessage, 3000);
  }

  function lookForUser(e) {
    axios.get(`/findUser/${e}`);
    console.log("e", e);  
  }

  function sendMessage() {
    console.log("usersss ", user);
    socket.emit("chat message", { input, user });
  }

  const socket = openSocket("http://localhost:3000");
  useEffect(() => {});

  socket.on("connect", function(socket) {
    console.log("connect", socket);
  });

  socket.on("chat message", function(msg) {
    addChats(msg);
    console.log(msg);
  });

  var color = ["black", "red"];
  console.log("state", user);
  return (
    <div>
      <ChatContainer>
        <UsersWrapper>
          users
          <input
            type="text"
            id="sender"
            placeholder="name of person"
            onChange={e => lookForUser(e.target.value)}
          />
        </UsersWrapper>

        <ChatWrapper>
          <Bubble>
            {chats.map(chat => (
              <p>
                <li>{chat.input}</li>
              </p>
            ))}
          </Bubble>

          <SendSection className="send">
            <input type="text" onChange={e => addInput(e.target.value)} />
            <Send onClick={() => call()}> Send </Send>
          </SendSection>
        </ChatWrapper>
      </ChatContainer>
      <BottomNav />
    </div>
  );
};

export default Chat;
