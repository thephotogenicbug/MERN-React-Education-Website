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

const PostJainDistance = () => {
  const [name, pickName] = useState("");
  const [duration, pickDuration] = useState("")
  const [firstyear, pickFirstYear] = useState("")
  const [secondyear, pickSecondYear] = useState("")
  const [thirdyear, pickThirdYear] = useState("")
  const [examfee, pickExamFee] = useState("")
  const [fees, pickFees] = useState("")
  const [fees2, pickFees2] = useState("")
  const [totalfee, pickTotalFee] = useState("")

//   http://localhost:5000/jaindistance/createjaindistance

  const Submit = (e) => {
    e.preventDefault();
    const url = "http://localhost:5000/jaindistance/createjaindistance";
    const input = {
      name,
      duration,
      firstyear,
      secondyear,
      thirdyear,
      examfee,
      fees,
      fees2,
      totalfee
    };
    axios.post(url, input).then((response) => {
      pickName("");
      pickDuration("")
      pickFirstYear("")
      pickSecondYear("")
      pickThirdYear("")
      pickExamFee("")
      pickFees("")
      pickFees2("")
      pickTotalFee("")
    });
  };

  return (
    <>
      <GlobalStyle />
      <StyledFormWrapper>
        <StyledForm>
          <h5>Jain Distance </h5>
          <hr style={{ background: "#F1C21B", height: "2px" }} />
          <StyledInput
            type="text"
            placeholder="Course Name"
            value={name}
            onChange={(e) => pickName(e.target.value)}
          />
          <StyledInput
            type="text"
            placeholder="Duration"
            value={duration}
            onChange={(e) => pickDuration(e.target.value)}
          />
          <StyledInput
            type="text"
            placeholder="First Year "
            value={firstyear}
            onChange={(e) => pickFirstYear(e.target.value)}
          />
          <StyledInput
            type="text"
            placeholder="Second Year"
            value={secondyear}
            onChange={(e) => pickSecondYear(e.target.value)}
          />
          <StyledInput
            type="text"
            placeholder="Third Year"
            value={thirdyear}
            onChange={(e) => pickThirdYear(e.target.value)}
          />
          <StyledInput
            type="text"
            placeholder="Exam Fees "
            value={examfee}
            onChange={(e) => pickExamFee(e.target.value)}
          />
          <StyledInput
            type="text"
            placeholder="Fees "
            value={fees}
            onChange={(e) => pickFees(e.target.value)}
          />
          <StyledInput
            type="text"
            placeholder="Fees 2"
            value={fees2}
            onChange={(e) => pickFees2(e.target.value)}
          />
          <StyledInput
            type="text"
            placeholder="Total Fees"
            value={totalfee}
            onChange={(e) => pickTotalFee(e.target.value)}
          />
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

export default PostJainDistance;
