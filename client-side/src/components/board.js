import React, { Component } from "react";
//import logo from "./logo.svg";
import Dashboard from "./dashboard";
import "../App.css";
import Contacts from "./contats";

class Board extends Component {
  render() {
    return(
      <div className="mainChat" >
          <Contacts></Contacts>
      {/* <div className="chatView">view </div> */}
          

          </div>
          );
}
}

export default Board;