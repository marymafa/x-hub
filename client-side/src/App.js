import React, { Component } from "react";
import logo from "./logo.svg";
import Dashboard from "./components/dashboard";
import "./App.css";

class App extends Component {
  render() {
    return(
      <div>
        <h1>Chats</h1>
        <div>
        <textarea id="chat-room" />
       </div>
      </div>
    )
  }
}

export default App;
