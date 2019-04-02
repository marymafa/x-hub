import React, { useEffect, useState } from "react";
import openSocket from "socket.io-client";
import {
  ChatWrapper,
  ChatContainer,
  UsersWrapper,
  Send
} from "../components/chat-styles";

const Chat = () => {
  const [chats, addChats] = useState([{ input: "" }]);
  const [input, addInput] = useState("");
  function call() {
    const name = "user";

    socket.emit("chat message", { input });
    getFeed();
  }
  const socket = openSocket("http://localhost:3000");

  useEffect(() => {
    getFeed();
  });

  function getFeed() {
    socket.on("chat message", function(msg) {
      addChats(msg);
      return msg;
    });
  }

  return (
    <div>
      <ChatContainer>
        <UsersWrapper />
        users
        <ChatWrapper>
          <input type="text" onChange={e => addInput(e.target.value)} />
          <Send onClick={() => call()}> Send </Send>
          <h1>
            {chats.map(chat => (
              <li> {chat.input} </li>
            ))}
          </h1>
        </ChatWrapper>
      </ChatContainer>
    </div>
  );
};

export default Chat;
