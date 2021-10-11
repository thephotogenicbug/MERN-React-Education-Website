import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Navbar } from "../Components/Navbar";
import Footer from "./Footer";

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

const JainUniversity = () => {
  const [getdata, setGetData] = useState([]);
  const [getonlinedata, setGetOnlineData] = useState([]);

  const FetchData = () => {
    fetch("http://localhost:5000/jaindistance/getjaindistance")
      .then((response) => response.json())
      .then((result) => setGetData(result));
  };

  const FetchOnlineData = () => {
    fetch("http://localhost:5000/jainonline/getjainonline")
      .then((response) => response.json())
      .then((result) => setGetOnlineData(result));
  };

  useEffect(() => {
    FetchData();
    FetchOnlineData();
  });

  // https://distance-api-url.herokuapp.com/
  return (
    <>
    <Navbar/> 
      <Helmet>
        <title>Jain University</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-md-12">
            <div className="card blog_card-banner_title">
              <div className="card-body">
                <h1 className="universities_card_title">Jain University</h1>
                <hr style={{ background: "#F1C21B", height: "2px" }} />
                <p>
                  Unconventional thinking, global perspective, student
                  diversity, vibrant community ethos is what makes JAIN
                  (Deemed-to-be University) stands above the curve pan India.
                  Over three decades, we place academic commitment and career
                  achievement at the heart of our vision and mission. Enriched
                  by culturally and geographically diverse faculty and
                  professional experts, we are able to produce agents who have
                  inspired a wide range of audience internationally.
                </p>
                <p>
                  Besides career development, we also develop individuals
                  professionally to think on their feet and challenge complex
                  questions through entrepreneurial engagement. With a wide
                  network capability, JAIN (Deemed-to-be University) stands tall
                  and competent addressing grand questions through its
                  innovative history without compromising on grassroot solutions
                  and standards. With five thriving campuses spread across the
                  city, it has notched success across fields from academics to
                  athletics, world university rankings to international
                  recognitions.
                </p>
                <label>
                  <b>Our Vision</b>
                </label>
                <br />
                <p>
                  To foster human development through excellence in Quality
                  Education, Research and Entrepreneurial Development
                </p>
                <label>
                  <b>Our Mission</b>
                </label>
                <ul>
                  <li>
                    To provide quality education, creating human Assets /
                    Manpower and Intellectual capital.
                  </li>
                  <li>
                    To enhance research and development in different
                    disciplines.
                  </li>
                  <li>
                    To develop new generation entrepreneurs who will be
                    instrumental in fuelling economic growth.
                  </li>
                  <li>To create able Leaders, Managers and Technocrats.</li>
                  <li>
                    To foster an ethical environment founded on human values in
                    which both spirit and skill will thrive to enrich the
                    quality of life.
                  </li>
                </ul>
                <div className="row">
                  <div className="col-md-12 text-center">
                    <h2 className="universities_card_title">
                      Distance Learning Course
                    </h2>
                    <hr style={{ background: "#F1C21B", height: "2px" }} />
                  </div>
                  {getdata.map((data) => {
                    return (
                      <div className="col-md-6">
                        <div className="card m-2 universities_card_annamalai">
                          <div className="card-body universities_card_course_title_annamalai">
                            <h5>{data.name}</h5>
                          </div>
                          <div className="universities_specs">
                            <h6 className="text-center">{data.spec}</h6>
                          </div>
                          <div className="text-center  mb-3">
                            <Link
                              to={`/jaindistancefees/${data._id}`}
                              style={{ textDecoration: "none" }}
                            >
                              <RegisterButton>Fees Structure</RegisterButton>
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <hr style={{ background: "#F1C21B", height: "2px" }} />
                <div className="row">
                  <div className="col-md-12 text-center">
                    <h3 className="universities_card_title">
                      Online Learning Course
                    </h3>
                    <hr style={{ background: "#F1C21B", height: "2px" }} />
                  </div>
                  {getonlinedata.map((data) => {
                    return (
                      <div className="col-md-6">
                        <div className="card m-2 universities_card_annamalai">
                          <div className="card-body universities_card_course_title_annamalai">
                            <h5>{data.name}</h5>
                          </div>
                          <div className="universities_specs">
                            <h6 className="text-center">{data.spec}</h6>
                          </div>
                          <div className="text-center  mb-3">
                            <Link
                              to={`/jainonlinefees/${data._id}`}
                              style={{ textDecoration: "none" }}
                            >
                              <RegisterButton>Fees Structure</RegisterButton>
                            </Link>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default JainUniversity;
