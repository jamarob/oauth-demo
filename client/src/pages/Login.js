import React from "react";
import styled from "styled-components/macro";
import Page from "../common/Page";

export default function Login() {
  return (
    <Page>
      <LoginWithGitHub href="https://github.com">
        Login with GitHub
      </LoginWithGitHub>
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
