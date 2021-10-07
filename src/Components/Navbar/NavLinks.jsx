import React from "react";
import styled from "styled-components";
import { Link as Links } from "react-router-dom";
const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinksWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 2px solid transparent;
  transition: all 220ms ease-in-out;
  &:hover {
    border-top: 2px solid #0b3f64;
  }
`;
const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

export function NavLinks(props) {
  return (
    <NavLinksContainer>
      <LinksWrapper>
        <LinkItem>
          <Links to="/" style={{ textDecoration: "none", color: "#000" }}>
            <Link>Home</Link>
          </Links>
        </LinkItem>
        <LinkItem>
          <Links to="/about" style={{ textDecoration: "none", color: "#000" }}>
            <Link>About us</Link>
          </Links>
        </LinkItem>
        <LinkItem>
          <Links style={{ textDecoration: "none", color: "#000" }}>
            <Link href="/">Academics</Link>
          </Links>
        </LinkItem>
        <LinkItem>
          <Links style={{ textDecoration: "none", color: "#000" }}>
            <Link href="/">Courses</Link>
          </Links>
        </LinkItem>
        <LinkItem>
          <Links
            to="/contactus"
            style={{ textDecoration: "none", color: "#000" }}
          >
            <Link href="/contactus">Contact us</Link>
          </Links>
        </LinkItem>
      </LinksWrapper>
    </NavLinksContainer>
  );
}
