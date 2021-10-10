import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import client from "../client";
import "./index.css";
import Jain from "../Components/assets/Jain.jpg";
import Singhania from "../Components/assets/singhania.jpg";
import Annamalai from "../Components/assets/annamalai.jpg";
import styled from "styled-components";
import { Helmet } from "react-helmet";

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

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [university, setUniversity] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"]{
        title,
        shortdescription,
        slug,
        body,
        mainImage{
          asset -> {
            _id,
            url
          },
          alt
        },
       
      }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "university"]{
        title,
        shortdescription,
        slug,
        body,
        mainImage{
          asset ->{
            _id,
            url
          },
          alt
        },
      }`
      )
      .then((data) => setUniversity(data))
      .catch(console.error);
  });

  return (
    <>
      <Helmet>
        <title>Eduprov Distance Education In Bangalore</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <section className="homepage_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1 className="homepage_title">
                Best Distance Education in Bangalore
              </h1>
              <h5 className="homepage_subtitle">
                Keep your studies on track with Distance Education
              </h5>
            </div>
            <div className="col-md-6">
              <img src="Homepage-hero-img.png" className="Hero-img" />
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row card-row text-center">
          <div className="col-md-4 col-margin">
            <span className="dot">
              <div className="image-card">
                <img src="jain.png" className="jain-image" />
              </div>
            </span>
          </div>
          <div className="col-md-4 col-margin">
            <span className="dot">
              <div className="image-card-annamalai">
                <img src="annamalai.png" className="annamalai-image" />
              </div>
            </span>
          </div>
          <div className="col-md-4 col-margin">
            <span className="dot">
              <div className="image-card">
                <img src="singhania.png" className="singhania-image" />
              </div>
            </span>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-12">
            <main>
              <h2 className="one">
                <span>Top Distance Learning Programs</span>
              </h2>
            </main>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              {posts.map((post, index) => {
                return (
                  <div
                    className="card homepage_cards_course"
                    style={{ width: "19rem", margin: "1%" }}
                    key={index}
                  >
                    <img src={post.mainImage.asset.url} alt={post.title} />
                    <div className="card-body">
                      <h5 className="card-title">{post.title}</h5>
                      <p className="card-text">{post.shortdescription}</p>
                      <Link to={`/blog/${post.slug.current}`}>
                        <RegisterButton>Read Article</RegisterButton>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-12">
            <main>
              <h2 className="one">
                <span>Top Distance Learning Universities</span>
              </h2>
            </main>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="row mt-4">
              <div className="col-md-4">
                <div
                  className="card homepage_cards"
                  style={{ width: "19rem", margin: "1%" }}
                >
                  <img src={Jain} alt="Jain University" />
                  <div className="card-body">
                    <h5 className="card-title">Jain University</h5>
                    <p className="card-text">
                      JAIN (Deemed-to-be University) stands above the curve pan
                      India. Over three decades, we place academic commitment
                      and career achievement
                    </p>
                    <Link to="/jainuniversity">
                      <RegisterButton>Read Article</RegisterButton>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="card homepage_cards"
                  style={{ width: "19rem", margin: "1%" }}
                >
                  <img src={Singhania} alt="Singhania University" />
                  <div className="card-body">
                    <h5 className="card-title">Singhania University</h5>
                    <p className="card-text">
                      Singhania University is situated at Pacheri Bari, Distt.
                      Jhunjhunu (Rajasthan) on the Delhi-Narnaul Singhana -
                      Pilani Road. It is about 160 kms. west of Delhi and about
                      165 kms.
                    </p>
                    <Link to="/singhaniaUniversity">
                      <RegisterButton>Read Article</RegisterButton>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="card homepage_cards"
                  style={{ width: "19rem", margin: "1%", height: "24.3rem" }}
                >
                  <img src={Annamalai} alt="Singhania University" />
                  <div className="card-body">
                    <h5 className="card-title">Annamalai University</h5>
                    <p className="card-text">
                      Annamalai University, accredited with ‘A’ Grade by NAAC in
                      2014, is one of India’s largest public residential
                      universities with 10 Faculties
                    </p>
                    <Link to="/annamalaiuniversity">
                      <RegisterButton>Read Article</RegisterButton>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="homepage_about mt-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center mt-5 text-white">
              <h3>ABOUT US</h3>
            </div>
            <div className="col-md-12 mt-4">
              <p className="text-justify text-white">
                Eduprov`s Distance education approach is very holistic and
                productive for students choosing amongst a pool of variants in
                colleges considering the factual part of admissions,
                possibilities and getting in would be a challenging task keeping
                in mind the business casualties who are in a roar towards
                economic productivity.
              </p>
              <p className="text-justify text-white">
                As every organization is with a mission and vision Eduprov as an
                organization in the academic field has a multi visionary
                approach towards providing students with the best online
                education programs with best amenities and multi- faceted
                opportunities. It provides students with a flexible schedule and
                also helps students wanting an early start through dual credit.
                The primary purpose or objective of distance education is to
                maximize student access to courses, with flexible schedule and
                learning through web based delivery system.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
