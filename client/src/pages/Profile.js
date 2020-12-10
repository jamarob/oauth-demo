import React from "react";
import Page from "../common/Page";
import { useUser } from "../contexts/AuthContext";

export default function Profile() {
  const user = useUser();

  return (
    <Page>
      <h2>{user.name}</h2>
      <img src={user.avatarUrl} alt={user.name} />
      <p>
        {user.name}s favorite animals are {user.favoriteAnimal}.
      </p>
    </Page>
  );
}
