import React from "react";
import GlobalStyle from "./GlobalStyle";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
        <Route path="/" render={() => <Redirect to="/home" />} />
      </Switch>
    </Router>
  );
}
