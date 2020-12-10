import React from "react";
import Page from "../common/Page";
import { useUser } from "../contexts/AuthContext";

export default function Profile() {
  const user = useUser();

  return (
    <Page>
      <h2>{user.login}</h2>
      <img src={`https://github.com/${user.login}.png`} alt="" />
    </Page>
  );
}
