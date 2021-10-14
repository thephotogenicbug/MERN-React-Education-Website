import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { listVisitor } from "../../actions/visitorActions";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../../actions/userActions";

const Container = styled.div`
  position: relative;
  width: 43rem;
  background-color: #fff;
  margin-top: 4rem;
  border-radius: 1rem;
  height: 170%;
  margin-left: 20rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 3rem;
  }
`;
const CardContent = styled.div`
  height: max-content;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin: 2rem 0;
  }
`;
const CardData = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0.4rem;
  padding-top: 0.6rem;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    gap: 1 rem;
  }
`;
const CardInfo = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  margin-top: 0.5rem !important;

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    width: 100%;
    text-align: center;
  }
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
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    flex-direction: column;
    gap: 0.6rem;
  }
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
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-top: 1rem;
  }
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
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 10rem;
    height: 3rem;
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

const StyledButtonOutline = styled.button`
  display: block;
  background-color: #fff;
  text-decoration: none !important;
  color: #f7797d;
  font-size: 0.9rem;
  border: none;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
  outline: 1px solid #f7797d;
  margin-left: 2rem;
`;

const StyledSpinner = styled.svg`
  animation: rotate 2s linear infinite;
  margin: -25px 0 0 -25px;
  width: 40px;
  height: 40px;
  margin-left: 2px;
  & .path {
    stroke: #ff5257;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

const Visitors = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useDispatch();

  const visitorList = useSelector((state) => state.visitorList);
  const { loading, visitors, error } = visitorList;

  console.log(visitors);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const createVisitor = useSelector((state) => state.createVisitor);
  const { success: successCreate } = createVisitor;

  const history = useHistory();

  useEffect(() => {
    dispatch(listVisitor());
    if (!userInfo) {
      history.push("/visitor/dashboard");
    }
  }, [dispatch, history, userInfo, successCreate]);

  const logoutHandler = () => {
    dispatch(logout());
    history.push("/visitor/dashboard");
  };

  return (
    <>
      <SearchContainer>
        <Icon>
          <FiSearch />
        </Icon>
        <StyledInput
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />

        <StyledButtonOutline onClick={logoutHandler}>
          Logout
        </StyledButtonOutline>
      </SearchContainer>
         {loading ? (
           <h5 className="text-center">No data found</h5>
         ): null}
      <Container>
        <CardContent>
          {visitors
            ?.filter((visitor) => {
              if (searchTerm == "") {
                return visitor;
              } else if (
                visitor.name.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return visitor;
              } else if (
                visitor.options.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return visitor;
              } else if (
                visitor.createdAt
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              ) {
                return visitor;
              }
            })
            .map((visitor) => {
              return (
                <CardData>
                  <CardInfo>
                    <Avatar>
                      <img src={visitor.pic} />
                    </Avatar>
                    <TextContainer>
                      <Title>{visitor.name}</Title>
                      <SubTitle>{visitor.options}</SubTitle>
                      <SubTitle> {visitor.createdAt.substring(0, 10)}</SubTitle>
                    </TextContainer>
                  </CardInfo>
                  <ButtonContainer>
                    <Link
                      to={`/visitor/allvisitor/${visitor._id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <StyledButton>View</StyledButton>
                    </Link>
                  </ButtonContainer>
                </CardData>
              );
            })}
        </CardContent>
      </Container>
    </>
  );
};

export default Visitors;
