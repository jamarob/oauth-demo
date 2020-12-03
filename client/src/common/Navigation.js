import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";

export default function Navigation() {
  return (
    <Nav>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      <NavLink to="/login">Login</NavLink>
    </Nav>
  );
}

const Nav = styled.nav`
  padding: var(--size-m);
  background: var(--blue-main);
  display: flex;

  a {
    color: var(--blue-50);
    text-decoration: none;

    &.active {
      color: var(--orange-main);
    }
  }

  a + a {
    margin-left: var(--size-m);
  }

  a:last-child {
    margin-left: auto;
  }
`;
