import React from "react";
import styled from "styled-components/macro";
import Page from "../common/Page";
import { useAuth } from "../contexts/AuthContext";

export default function Logout() {
  const { user, logout } = useAuth();

  return (
    <Page>
      <p>
        You are logged in as <User>{user.login}</User>
      </p>
      <Button onClick={logout}>Logout</Button>
    </Page>
  );
}

const Button = styled.button`
  font-size: 1em;
  color: var(--blue-main);
  padding: var(--size-m);
  border-radius: var(--size-m);
  border: 2px solid var(--blue-main);
  background: none;
  cursor: pointer;
`;

const User = styled.span`
  color: var(--blue-main);
`;
