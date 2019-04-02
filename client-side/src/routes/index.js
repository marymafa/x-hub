import React from "react";
import { Router, Route} from "react-router-dom";
import history from "../history";


export const makeMainRoutes = () => {
  return (
    <Router history={history}>
      <div className="App">
        <Route
          path="/"
          exact
          strict
          render={props => <form {...props} />}
        />
      </div>
    </Router>
  );
};
