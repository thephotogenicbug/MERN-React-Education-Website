import axios from "axios";
import React, { useState } from "react";
import styled, { createGlobalStyle, css } from "styled-components";

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
  margin-top: 3rem;
  padding: 0 20px;
`;
const StyledForm = styled.form`
  width: 100%;
  max-width: 90%;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
  h5 {
    color: gray;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    max-width: 95%;
  }
`;

const StyledInput = styled.input`
  width: 25%;
  margin-left: 4rem !important;
  max-width: 180% !important;
  outline: none;
  ${SharedStyles};
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 45%;
    margin-left: 1rem !important;
  }
`;
const StyledTextArea = styled.textarea`
  background-color: #eee;
  width: 87%;
  min-height: 100px;
  margin-left: 4rem !important;
  resize: none;
  outline: none;
  ${SharedStyles};
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 95%;
    margin-left: 1rem !important;
  }
`;
const StyledButton = styled.button`
  display: block;
  background-color: #0b3f64;
  color: white;
  font-size: 0.9rem;
  border: none;
  border-radius: 5px;
  height: 40px;
  padding: 0 20px;
  cursor: pointer;
  box-sizing: border-box;
  margin-left: 4rem !important;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-left: 1rem !important;
  }
`;
const StyledFieldset = styled.fieldset`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  margin: 20px 0;
  legend {
    padding: 0 10px;
  }
  label {
    padding-right: 20px;
  }
  input {
    margin-right: 10px;
  }
`;
const StyledError = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fa4d41;
`;

const StyledBottom = styled.div`
  margin-bottom: 1rem;
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

const StyledInputFile = styled.input`
  width: 25%;
  height: 40% !important;
  margin-left: 4rem !important;
  max-width: 180% !important;
  outline: none;
  ${SharedStyles};
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 75%;
    margin-left: 1rem !important;
  }
`;

const PostJainOnline = () => {
  const [name, pickName] = useState("");
  const [email, pickEmail] = useState("");
  const [mobile, pickMobile] = useState("");
  const [dob, pickDob] = useState("");
  const [gender, pickGender] = useState("");
  const [fathername, pickFathername] = useState("");
  const [mothername, pickMothername] = useState("");
  const [examname, pickExamname] = useState("");
  const [universityname, pickUniversityname] = useState("");
  const [schoolname, pickSchoolname] = useState("");
  const [passingyear, pickPassingyear] = useState("");
  const [percentage, pickPercentage] = useState("");
  const [address, pickAddress] = useState("");

  const Submit = (e) => {
    e.preventDefault();
    const url = "http://localhost:5000/application/applicationform";
    const input = {
      name,
      email,
      mobile,
      dob,
      gender,
      fathername,
      mothername,
      examname,
      universityname,
      schoolname,
      passingyear,
      percentage,
      address,
    };
    axios.post(url, input).then((response) => {
      pickName("");
      pickEmail("");
      pickMobile("");
      pickDob("");
      pickGender("");
      pickFathername("");
      pickMothername("");
      pickExamname("");
      pickUniversityname("");
      pickSchoolname("");
      pickPassingyear("");
      pickPercentage("");
      pickAddress("");
    });
  };

  return (
    <>
      <GlobalStyle />
      <StyledFormWrapper>
        <StyledForm>
          <h5>Jain Online </h5>
          <hr style={{ background: "#F1C21B", height: "2px" }} />
          <StyledInput
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => pickName(e.target.value)}
          />
          <StyledInput
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => pickEmail(e.target.value)}
          />
          <StyledInput
            type="number"
            placeholder="Mobile No "
            value={mobile}
            onChange={(e) => pickMobile(e.target.value)}
          />
          <StyledInput
            type="text"
            placeholder="DOB"
            value={dob}
            onChange={(e) => pickDob(e.target.value)}
          />
          <StyledInput
            type="text"
            placeholder="Gender"
            value={gender}
            onChange={(e) => pickGender(e.target.value)}
          />
          <StyledInput
            type="text"
            placeholder="Father Name"
            value={fathername}
            onChange={(e) => pickFathername(e.target.value)}
          />
          <StyledInput
            type="text"
            placeholder="Mother Name"
            value={mothername}
            onChange={(e) => pickMothername(e.target.value)}
          />
          <StyledInput
            type="text"
            placeholder="Name of Exam"
            value={examname}
            onChange={(e) => pickExamname(e.target.value)}
          />
          <StyledInput
            type="text"
            placeholder="Name of University"
            value={universityname}
            onChange={(e) => pickUniversityname(e.target.value)}
          />
          <StyledInput
            type="text"
            placeholder="Name of School"
            value={schoolname}
            onChange={(e) => pickSchoolname(e.target.value)}
          />
          <StyledInput
            type="text"
            placeholder="Year of Passing"
            value={passingyear}
            onChange={(e) => pickPassingyear(e.target.value)}
          />
          <StyledInput
            type="text"
            placeholder="Percentage"
            value={percentage}
            onChange={(e) => pickPercentage(e.target.value)}
          />
          <StyledTextArea
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => pickAddress(e.target.value)}
          />
          {/* <StyledInputFile
            type="file"
            placeholder="Percentage"
            value={percentage}
            onChange={(e) => pickPercentage(e.target.value)}
          /> */}
          <StyledError>{/* <p>Error message here</p> */}</StyledError>
          <StyledButton onClick={Submit}>Submit</StyledButton>
          {/* {loading ? (
              <StyledSpinner viewBox="0 0 50 50">
                <circle
                  className="path"
                  cx="25"
                  cy="25"
                  r="20"
                  fill="none"
                  strokeWidth="4"
                />
              </StyledSpinner>
            ) : error ? (
              <StyledError>{error}</StyledError>
            ) : (
              ""
            )} */}
        </StyledForm>
      </StyledFormWrapper>
      <StyledBottom></StyledBottom>
    </>
  );
};

export default PostJainOnline;
