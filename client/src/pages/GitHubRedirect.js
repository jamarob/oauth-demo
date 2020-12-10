import React, { useEffect } from "react";
import { useLocation, Redirect } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Page from "../common/Page";

export default function GitHubRedirect() {
  const { loginWithCode, user } = useAuth();
  const search = new URLSearchParams(useLocation().search);
  const code = search.get("code");

  useEffect(() => {
    if (code) {
      loginWithCode(code);
    }
  }, [code, loginWithCode]);

  return <Page>{user && <Redirect to="/profile" />}</Page>;
}
