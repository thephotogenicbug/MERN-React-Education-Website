import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AccessibilityContainer = styled.div`
  display: flex;
`;
const RegisterButton = styled.button`
  border: 0;
  width: 120px;
  outline: 0;
  padding: 8px 1em;
  color: #fff;
  font-size: 14px;
  font-weight: 600;
  border-radius: 25px;
  background-color: #0b3f64;
  transition: all 240ms ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #0b3f64;
  }
  &:not(:last-of-type) {
    margin-right: 6px;
  }
`;

const LoginButton = styled.button`
  border: 0;
  width: 120px;
  outline: 0;
  padding: 8px 1em;
  color: #222;
  font-size: 14px;
  font-weight: 600;
  border-radius: 25px;
  background-color: transparent;
  border: 1px solid #6aa4c4;
  transition: all 240ms ease-in-out;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: #6aa4c4;
  }
  &:not(:last-of-type) {
    margin-right: 7px;
  }
`;

export function Accessibility(props) {
  return (
    <AccessibilityContainer>
      <Link to="/application">
        <RegisterButton>Apply Now</RegisterButton>
      </Link>
      {/* <LoginButton>Login</LoginButton> */}
    </AccessibilityContainer>
  );
}
