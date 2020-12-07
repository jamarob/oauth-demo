import React from "react";
import GlobalStyle from "./GlobalStyle";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./routing/ProtectedRoute";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import GitHubRedirect from "./pages/GitHubRedirect";
import Logout from "./pages/Logout";

export default function App() {
  return (
    <AuthContextProvider>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path="/home" component={Home} />
          <ProtectedRoute path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
          <Route path="/oauth/github/redirect" component={GitHubRedirect} />
          <ProtectedRoute path="/logout" component={Logout} />
          <Route path="/" render={() => <Redirect to="/home" />} />
        </Switch>
      </Router>
    </AuthContextProvider>
  );
}
