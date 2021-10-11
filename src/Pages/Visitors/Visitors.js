import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import AvatarImg from "./profile.png";
import { FiSearch } from "react-icons/fi";

const Container = styled.div`
  width: 43rem;
  background-color: #fff;
  margin-top: 4rem;
  border-radius: 1rem;
  height: 170%;
  margin-left: 20rem;
`;
const CardContent = styled.div`
  height: max-content;
`;
const CardData = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0.4rem;
  padding-top: 0.6rem;
`;
const CardInfo = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin-top: 0.5rem !important;
`;
const Avatar = styled.div`
  img {
    height: 3rem;
    width: 3rem;
    border-radius: 3rem;
  }
`;
const TextContainer = styled.div`
  margin-left: 1rem;
`;
const Title = styled.h4``;
const SubTitle = styled.h6`
  font-weight: 400;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 10%;
  align-items: center;
`;

const StyledButton = styled.button`
  display: block;
  background-color: #f7797d;
  text-decoration: none !important;
  color: white;
  font-size: 0.9rem;
  border: none;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
`;

const SearchContainer = styled.div`
  height: 5rem;
  display: flex;
`;
const StyledInput = styled.input`
  background-color: aliceblue;
  width: 16rem;
  height: 3rem;
  border: none;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  &:focus {
    border: none;
    outline: none;
  }
`;
const Icon = styled.div`
  height: 3rem;
  width: 3rem;
  background-color: aliceblue;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  svg {
    color: #555555;
  }
`;

const Visitors = () => {
  return (
    <>
      <Container>
        <SearchContainer>
          <Icon>
            <FiSearch />
          </Icon>
          <StyledInput type="text" placeholder="Search..." />
        </SearchContainer>
        <CardContent>
          <CardData>
            <CardInfo>
              <Avatar>
                <img src={AvatarImg} />
              </Avatar>
              <TextContainer>
                <Title>Naveen</Title>
                <SubTitle>Counseling</SubTitle>
              </TextContainer>
            </CardInfo>
            <ButtonContainer>
              <StyledButton>View</StyledButton>
            </ButtonContainer>
          </CardData>
          <CardData>
            <CardInfo>
              <Avatar>
                <img src={AvatarImg} />
              </Avatar>
              <TextContainer>
                <Title>Naveen</Title>
                <SubTitle>Counseling</SubTitle>
              </TextContainer>
            </CardInfo>
            <ButtonContainer>
              <StyledButton>View</StyledButton>
            </ButtonContainer>
          </CardData>
        </CardContent>
      </Container>
    </>
  );
};

export default Visitors;
