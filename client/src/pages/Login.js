import React from "react";
import styled from "styled-components/macro";
import Page from "../common/Page";

const clientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
const url = `https://github.com/login/oauth/authorize?client_id=${clientId}`;

export default function Login() {
  return (
    <Page>
      <LoginWithGitHub href={url}>Login with GitHub</LoginWithGitHub>
    </Page>
  );
}

const LoginWithGitHub = styled.a`
  text-decoration: none;
  color: var(--blue-main);
  padding: var(--size-m);
  border: 2px solid var(--blue-main);
  border-radius: var(--size-m);

  &::visited {
    text-decoration: none;
    color: var(--main-blue);
  }
`;
