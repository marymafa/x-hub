import React, { Component } from "react";
import logo from "./logo.svg";
import Dashboard from "./components/dashboard";
import Main from "./components/routers";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Main />
        {/* <Dashboard /> */}
      </div>
    );
  }
}

//<Dashboard />
export default App;
