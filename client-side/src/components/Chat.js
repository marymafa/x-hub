import React, { useEffect, useState } from "react";
import openSocket from "socket.io-client";
import {
  ChatWrapper,
  ChatContainer,
  UsersWrapper,
  Send,
  SendSection
} from "../components/chat-styles";

import BottomNav from "./bottom-nav";
import Nav from "./nav";

const Chat = () => {
  const [chats, addChats] = useState([{ input: "" }]);
  const [input, addInput] = useState("");
  function call() {
    socket.emit("chat message", { input });
  }

  const socket = openSocket("http://localhost:3000");

  useEffect(() => {
  });

    socket.on("chat message", function(msg) {
      addChats(msg);
      return msg;
    });

  return (
    <div>
      <Nav />
      <ChatContainer>
        <UsersWrapper>users</UsersWrapper>
        <ChatWrapper>
          <h1>
            {chats.map(chat => (
              <li> {chat.input} </li>
            ))}
          </h1>

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
