import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Logo from "./Logo";

const StyledNav = styled.nav`
  margin-bottom: 3em;

  .logo {
    transform: translateY(-25%);
  }

  ul {
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr auto 1fr 1fr;
    text-align: center;
    gap: 2rem;
    list-style: none;
    align-items: center;
  }

  li {
    --rotate: -2deg;
    transform: rotate(var(--rotate));
    order: 1;
    transition: transform 0.3s;

    &:nth-of-type(1) {
      --rotate: -1deg;
    }
    &:nth-of-type(2) {
      --rotate: -2.5deg;
    }
    &:nth-of-type(4) {
      --rotate: 4deg;
    }

    &:hover {
      --rotate: 2deg;
    }
  }

  a {
    font-size: 3rem;
    text-decoration: none;

    &:hover {
      color: var(--red);
    }
  }
`;

const Navigation = () => {
  return (
    <StyledNav>
      <ul>
        <li>
          <Link to="/">Hot Now</Link>
        </li>

        <li>
          <Link to="/pizzas">Pizza Menu</Link>
        </li>

        <li>
          <Link to="/">
            <Logo/>
          </Link>
        </li>

        <li>
          <Link to="/slicemasters">SliceMasters</Link>
        </li>

        <li>
          <Link to="/order">Order Ahead!</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

export default Navigation;
