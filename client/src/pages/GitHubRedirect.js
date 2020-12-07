import React, { useContext, useEffect } from "react";
import { useLocation, Redirect } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import Page from "../common/Page";

export default function GitHubRedirect() {
  const { loginWithCode, user } = useContext(AuthContext);
  const search = new URLSearchParams(useLocation().search);
  const code = search.get("code");

  useEffect(() => {
    if (code) {
      loginWithCode(code);
    }
  }, [code, loginWithCode]);

  return <Page>{user && <Redirect to="/profile" />}</Page>;
}
