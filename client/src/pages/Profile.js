import React, { useContext } from "react";
import Page from "../common/Page";
import { AuthContext } from "../contexts/AuthContext";

export default function Profile() {
  const { user } = useContext(AuthContext);

  return (
    <Page>
      <h2>{user.login}</h2>
      <img src={`https://github.com/${user.login}.png`} alt={user.login} />
    </Page>
  );
}
