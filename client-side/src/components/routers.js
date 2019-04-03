import React, { Component } from "react";
import Nav from "./nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";
import BottomNav from "./bottom-nav";
import Dashboard from "./dashboard";
import Feeds from "./feed";
import Chat from "./Chat";
import ShareContent from "./share-content";
import ChatLog from "./ChatLog";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        {/* <Nav>
            <BottomNav> */}
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/home" component={Feeds} />
          <Route exact path="/chat" component={Chat} />
          {/* <Router exact path="/content" component={ShareContent} /> */}
          <Route exact path="/chatlog" component={ChatLog} />
          </Switch>
        {/* </BottomNav>
          </Nav> */}
      </Router>
    );
  }
}
export default Main;
