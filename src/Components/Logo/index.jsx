import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoImage from "../assets/logo.png";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImg = styled.div`
  height: 60px;
  img {
    width: 100%;
    height: 100%;
 
  }
`;

const LogoText = styled.h2`
  font-size: 16px;
  margin: 0;
  margin-left: 4px;
  color: #222;
  font-weight: 500;
`;

export function Logo(props) {
  return (
    <LogoWrapper>
      <LogoImg>
        <Link to="/">
          <img src={LogoImage} alt="EduprovLogo" />
        </Link>
      </LogoImg>
      <LogoText></LogoText>
    </LogoWrapper>
  );
}
