import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const VisitorContainer = styled.div`
  margin-top: 5rem;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: nowrap;
`;


const SingleVisitor = ({ match, history }) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [purpose, setPurpose] = useState("");
  const [options, setOptions] = useState("");
  const [pic, setPic] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get(
        `https://distance-api-url.herokuapp.com/visitor/${match.params.id}`
      );

      setName(data.name);
      setMobile(data.mobile);
      setEmail(data.email);
      setPurpose(data.purpose);
      setOptions(data.options);
      setPic(data.pic);
      setDate(data.createdAt.substring(0, 10));
    };
    fetch();
  }, [match.params.id]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <img src={pic} alt={name} className="Image_ui" />
        </div>
        <div className="col-md-8 mt-5 pt-2 text-center">
          <table className="table table-sm table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <td>{name}</td>
              </tr>
              <tr>
                <th>Mobile No</th>
                <td>{mobile}</td>
              </tr>
              <tr>
                <th>Email ID</th>
                <td>{email}</td>
              </tr>
              <tr>
                <th>Purpose</th>
                <td>{options}</td>
              </tr>
              <tr>
                <th>Counselor Name</th>
                <td>{purpose}</td>
              </tr>
              <tr>
                <th>Visited Data</th>
                <td>{date}</td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SingleVisitor;
