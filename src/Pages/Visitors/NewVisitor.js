import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import styled, { createGlobalStyle, css } from "styled-components";
import { createVisitorAction } from "../../actions/visitorActions";

const GlobalStyle = createGlobalStyle`
 html {
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
  box-sizing: "border-box";
`;

const StyledFormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 20px;

  @media screen and (min-width: 326px) and (max-width: 1080px) {
    margin-top: 3rem;
  }
`;

const StyledForm = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`;
const StyledInput = styled.input`
  width: 90%;
  margin-left: 1rem !important;
  max-width: 180% !important;
  ${SharedStyles};
`;

const StyledDropDown = styled.select`
  width: 90%;
  height: 10% !important;
  margin-left: 1rem !important;
  max-width: 180% !important;
  ${SharedStyles};
`;

const SelectDownDownOptions = styled.option`
  margin-left: 1rem !important;
  ${SharedStyles};
`;

const StyledInputFile = styled.input`
  width: 90%;
  height: 100% !important;
  margin-left: 1rem !important;
  max-width: 180% !important;
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
  box-sizing: border-box;
`;

const Text = styled.h5`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledError = styled.p`
 display:flex;
 justify-content: center;
 align-items: center;
 
`
const NewVisitor = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [purpose, setPurpose] = useState("");
  const [options, setOptions] = useState("");
  const [pic, setPic] = useState(
    "https://res.cloudinary.com/dv5jjlsd7/image/upload/v1631444571/user_1_qy7hlx.png"
  );
  const [picmessage, setPicMessage] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const createVisitor = useSelector((state) => state.createVisitor);
  const { loading, error, visitor } = createVisitor;

  const SubmitHandler = (e) => {
    e.preventDefault();
    dispatch(createVisitorAction(name, email, mobile, purpose, options, pic));
    setMessage("Data Saved Successfully... !");
    if (!name || !email || !mobile || !purpose || !options) return setMessage("Please fill all the fields");
  };

  const postDetails = (pics) => {
    if (
      pics ===
      "https://res.cloudinary.com/dv5jjlsd7/image/upload/v1631444571/user_1_qy7hlx.png"
    ) {
      return setPicMessage("Please Select an Image");
    }
    setPicMessage(null);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "noteszipper");
      data.append("cloud_name", "dv5jjlsd7");
      fetch("https://api.cloudinary.com/v1_1/dv5jjlsd7/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setPic(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Please Select an Image");
    }
  };



  return (
    <>
      <GlobalStyle />
      <StyledFormWrapper>
        <StyledForm>
          <Text>Visitor Application</Text>
          <StyledError>{message}</StyledError>
          <StyledInput
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <StyledInput
            type="mobile"
            placeholder="Mobile No"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <StyledInput
            type="email"
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <StyledInput
            type="text"
            placeholder="Purpose of Visit"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
          />
          <StyledDropDown
            value={options}
            onChange={(e) => setOptions(e.target.value)}
          >
            <SelectDownDownOptions>Choose</SelectDownDownOptions>
            <SelectDownDownOptions>Ahmed Khan</SelectDownDownOptions>
            <SelectDownDownOptions>Anjum</SelectDownDownOptions>
            <SelectDownDownOptions>Farzana</SelectDownDownOptions>
            <SelectDownDownOptions>Shaik Rafiq</SelectDownDownOptions>
            <SelectDownDownOptions>Sidra</SelectDownDownOptions>
            <SelectDownDownOptions>Sufiya Kouser</SelectDownDownOptions>
            <SelectDownDownOptions>Sufiya</SelectDownDownOptions>
            <SelectDownDownOptions>Tasmiya</SelectDownDownOptions>
            <SelectDownDownOptions>Uzma</SelectDownDownOptions>
          </StyledDropDown>
          <StyledInputFile
            type="file"
            onChange={(e) => postDetails(e.target.files[0])}
          />
          <StyledButton onClick={SubmitHandler}>Submit</StyledButton>
        </StyledForm>
      </StyledFormWrapper>
    </>
  );
};

export default NewVisitor;
