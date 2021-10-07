import React, { useState } from "react";
import styled from "styled-components";
import { Accessibility } from "./accessibility";
import { MenuToggle } from "./menuToggle";
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
  background-color: #fff;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 60px;
  left: 0;
  z-index: 1000;
`;

const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 16px;
  display: flex;
  margin-bottom: 10px;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: inherit;
`;

const Marginer = styled.div`
  height: 2em;
`;

export function MobileNavLinks(props) {
  const [isOpen, setOpen] = useState(false);

  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinksWrapper>
          <LinkItem>
            <Links to="/" style={{ textDecoration: "none", color: "#000" }}>
              <Link>Home</Link>
            </Links>
          </LinkItem>
          <LinkItem>
            <Links
              to="/about"
              style={{ textDecoration: "none", color: "#000" }}
            >
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
          <Marginer />
          <Accessibility />
        </LinksWrapper>
      )}
    </NavLinksContainer>
  );
}
