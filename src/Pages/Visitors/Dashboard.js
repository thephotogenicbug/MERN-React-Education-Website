import React from "react";
import styled from "styled-components";
import { FaPlus } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { cardShadow, hoverEffect } from "./utils";
import AvatarImg from "../Visitors/profile.png";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 97vh;
  cursor: pointer;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 1rem;
    height: max-content;
  }
`;

const ContainerBlocks = styled.div`
  background-color: #fd6d6d;
  height: 200px;
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column wrap;
  border-radius: 1rem;
  box-shadow: 0px 0px 15px #fd6d6d;

  svg {
    font-size: 4rem;
    color: #fff;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin: 2rem;
  }
`;

const StyledText = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const InvoicesContainer = styled.div`
  position: relative;
  width: 40rem;
  background-color: orange;
  border-radius: 1rem;
  margin-top: 4rem;
  /* background-color: white; */
  height: 170%;
  margin-left: 17rem;
  box-shadow: ${cardShadow};
  transition: 0.4s ease-in-out;
  &:hover {
    box-shadow: ${hoverEffect};
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const CardContent = styled.div`
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin: 2rem 0;
  }
`;
const Invoice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0.4rem;
  padding-top: 0.6rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    gap: 1rem;
  }
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    width: 100%;
    text-align: center;
  }
`;
const Avatar = styled.div`
  img {
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 3.5rem;
  }
`;
const TextContainer = styled.div`
  margin-left: 1rem;
`;
const Title = styled.h4``;
const SubTitle = styled.h5`
  font-weight: 400;
`;
const ContainerData = styled.div`
  display: flex;
  justify-content: space-between;
  width: 10%;
  align-items: center;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    flex-direction: column;
    gap: 0.6rem;
  }
`;
const Price = styled.div``;

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

const AttendaceSpinner = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  margin-left: 17rem;
`;

const Dashboard = () => {
  return (
    <>
      <Container>
        <Link to="/visitor/newvisitor" style={{ textDecoration: "none" }}>
          <ContainerBlocks>
            <FaPlus />
            <StyledText>New Visitor</StyledText>
          </ContainerBlocks>
        </Link>
        <ContainerBlocks>
          <MdManageAccounts />
          <StyledText>My Account</StyledText>
        </ContainerBlocks>
        <ContainerBlocks>
          <FiUsers />
          <StyledText>Visitor's Data</StyledText>
        </ContainerBlocks>
      </Container>
    </>
  );
};

export default Dashboard;
