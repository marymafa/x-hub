import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";

class Main extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    console.log(this.props.form);
  }

  render() {
    let PrivateRoute = ({ component: Component, ...rest }) => {
      const isLogged = this.props.login.password;
      console.log(this.props);
      console.log(isLogged);
      const b = true;
      return (
        <Route
          {...rest}
          render={props =>
            this.props.login.password || this.props.form.password ? (
              <Component {...props} />
            ) : (
              <Redirect to={{ pathname: "/" }} />
            )
          }
        />
      );
    };

    return (
      <Router>
        <Switch>
          <AppWrapper>
            <Route exact path="/" component={component} />
          </AppWrapper>
        </Switch>
      </Router>
    );
  }
}
export default Main;
