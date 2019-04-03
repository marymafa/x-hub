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
import { connect } from "react-redux";


const Chat = () => {
  const [chats, addChats] = useState([{ input: "" }]);
  const [user, addUser] = useState("");
  const [input, addInput] = useState("");

  function sendMessage(userName = false) {
    socket.emit("chat message", { input});
  }

  const socket = openSocket("http://localhost:3001");

  useEffect(() => {
  });


  socket.on("connect", function(socket) {
    console.log("connect", socket);
  });

  socket.on("chat message", function(msg) {
    addChats(msg);
  });

  return (
    <div>
      <ChatContainer>
        <UsersWrapper>users</UsersWrapper>

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
            <Send onClick={() => sendMessage()}> Send </Send>
          </SendSection>
        </ChatWrapper>
      </ChatContainer>
      <BottomNav />
    </div>
  );
};

export default Chat;
