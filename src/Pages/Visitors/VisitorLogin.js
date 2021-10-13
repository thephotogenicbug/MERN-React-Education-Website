import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import styled, { createGlobalStyle, css } from "styled-components";
import { login } from "../../actions/userActions";

const GlobalStyle = createGlobalStyle`
 html{
     height:100%;
 }
`;
const SharedStyles = css`
  background-color: #eee;
  height: 2px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin: 10px 0 20px 0;
  padding: 20px;
  box-sizing: border-box;
`;

const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  padding: 0 20px;
`;

const StyledForm = styled.div`
  width: 110%;
  max-width: 400px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;

const StyledInput = styled.input`
  width: 92%;
  margin-left: 1rem !important;
  max-width: 180%;
  outline: none;
  ${SharedStyles};
`;

const StyledButton = styled.button`
  display: block;
  background-color: #f7797d;
  color: white;
  font-size: 0.9rem;
  border: none;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  margin-left: 1rem;
  box-sizing: border-box;
`;

const VisitorLogin = () => {

  const [email, pickEmail] = useState("")
  const [password, pickPassword] = useState("")

  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)
  const {loading, error, userInfo} = userLogin

  const history = useHistory()

  useEffect(() =>{
      if(userInfo){
        history.push("/visitor/allvisitor");
      }
  },[history, userInfo])

  const submitHandler = async (e) =>{
    e.preventDefault()

    dispatch(login(email, password))
  }


  return (
    <StyledFormWrapper>
      <StyledForm>
          <h5>Login</h5>
        <StyledInput type="text" placeholder="email" value={email} onChange={e => pickEmail(e.target.value)} />
        <StyledInput type="text" placeholder="password" value={password} onChange={e => pickPassword(e.target.value)} />
        <StyledButton onClick={submitHandler} >Login</StyledButton>
      </StyledForm>
    </StyledFormWrapper>
  );
};

export default VisitorLogin;
