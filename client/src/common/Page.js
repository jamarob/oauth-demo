import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components/macro";
import Navigation from "./Navigation";

Page.propTypes = {
  children: PropTypes.node,
};

export default function Page({ children }) {
  return (
    <Wrapper>
      <header>
        <h1>Hello OAuth</h1>
      </header>
      <Navigation />
      <main>{children}</main>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  height: 100vh;
  display: grid;
  grid-template-rows: min-content min-content 1fr;
  background: var(--blue-75);
  color: white;

  > header {
    background: var(--blue-main);
    padding: var(--size-m);

    h1 {
      margin: 0;
      color: var(--orange-main);
    }
  }

  > main {
    display: grid;
    grid-auto-rows: min-content;
    align-items: start;
    justify-content: start;
    background: var(--blue-75);
    color: white;
    padding: var(--size-m);
    overflow-y: scroll;
  }
`;
