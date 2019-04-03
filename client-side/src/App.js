import React, { Component } from "react";
import logo from "./logo.svg";
import Dashboard from "./components/dashboard";
import Main from "./components/routers";
import "./App.css";
import Chat from "./components/Chat";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}

//<Dashboard />
export default App;
