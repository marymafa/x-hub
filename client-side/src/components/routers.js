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

class Main extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <Router>
        {/* <Nav>
            <BottomNav> */}
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/home" component={Feeds} />
        </Switch>
        {/* </BottomNav>
          </Nav> */}
      </Router>
    );
  }
}
export default Main;
