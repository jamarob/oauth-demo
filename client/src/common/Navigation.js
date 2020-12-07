import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";
import { AuthContext } from "../contexts/AuthContext";

export default function Navigation() {
  const { user } = useContext(AuthContext);

  return (
    <Nav>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/profile">Profile</NavLink>
      {user ? (
        <NavLink to="/logout">Logout</NavLink>
      ) : (
        <NavLink to="/login">Login</NavLink>
      )}
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
