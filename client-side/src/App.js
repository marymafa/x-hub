import React, { Component } from "react";
import logo from "./logo.svg";
import Dashboard from "./components/dashboard";
import Form from "./components/form";
import "./App.css";
import Chat from "./components/Chat";


class App extends Component {
  render() {
    return (
      <div>
       <Chat/>
      </div>
    );
  }
}

export default App;
