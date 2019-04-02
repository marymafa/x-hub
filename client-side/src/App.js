import React, { Component } from "react";
import logo from "./logo.svg";
import Dashboard from "./components/dashboard";
import Form from "./components/form";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
      </div>
    );
  }
}

export default App;
