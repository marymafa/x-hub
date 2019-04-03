import React from "react";
import { Router, Route } from "react-router-dom";
import history from "../history";
import Chat from "../components/Chat";
import BottomNav from "../components/bottom-nav";
import Dashboard from "../components/dashboard";
import Nav from "../components/nav";
    
export const makeMainRoutes = () => {
  return (
    <Router history={history}>
      <div className="App">
        <Nav />
        <Route path="/" component={Dashboard} /> 

         <BottomNav /> 
      </div>
    </Router>
  );
};
