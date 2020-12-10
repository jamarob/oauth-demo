import React from "react";
import styled from "styled-components/macro";
import Page from "../common/Page";

export default function Home() {
  return (
    <Page>
      <h2>Resources</h2>

      <h3>
        RFC Specs <small>(very dry but precise)</small>
      </h3>
      <ReadingList>
        <a
          href="https://tools.ietf.org/html/rfc6749"
          target="_blank"
          rel="noopener noreferrer"
        >
          The OAuth 2.0 Authorization Framework
        </a>
        <a
          href="https://tools.ietf.org/html/rfc7519"
          target="_blank"
          rel="noopener noreferrer"
        >
          JSON Web Token (JWT)
        </a>
      </ReadingList>

      <h3>GitHub</h3>
      <ReadingList>
        <a
          href="https://docs.github.com/en/free-pro-team@latest/developers/apps/creating-an-oauth-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Creating OAuth Apps
        </a>
        <a
          href="https://docs.github.com/en/free-pro-team@latest/developers/apps/authorizing-oauth-apps#web-application-flow"
          target="_blank"
          rel="noopener noreferrer"
        >
          Webflow for OAuth Apps
        </a>
      </ReadingList>

      <h3>JWT.io</h3>
      <ReadingList>
        <a
          href="https://jwt.io/introduction/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Introduction to JSON Web Tokens
        </a>
        <a
          href="https://jwt.io/#debugger-io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Debugger
        </a>
      </ReadingList>
    </Page>
  );
}

const ReadingList = styled.section`
  display: grid;
  grid-gap: var(--size-s);
`;
