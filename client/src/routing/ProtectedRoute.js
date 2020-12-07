import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function ProtectedRoute(props) {
  const { user } = useContext(AuthContext);

  return user ? <Route {...props} /> : <Redirect to="/login" />;
}
