import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import client from "../client";
import "./index.css";
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
                    className="card homepage_cards"
                    style={{ width: "18rem", margin: "2%" }}
                    key={index}
                  >
                    <img src={post.mainImage.asset.url} alt={post.title} />
                    <div className="card-body">
                      <h5 className="card-title">{post.title}</h5>
                      <p className="card-text">{post.shortdescription}</p>
                      <Link
                        to={`/blog/${post.slug.current}`}
                        className="btn btn-primary"
                      >
                        Read Article
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12">
          <main>
            <h2 className="one">
              <span>Distance Learning Universities</span>
            </h2>
          </main>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              {university.map((universities, index) => {
                return (
                  <div
                    className="card homepage_cards"
                    style={{ width: "18rem", margin: "2%" }}
                  >
                    <img
                      src={universities.mainImage.asset.url}
                      alt={universities.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{universities.title}</h5>
                      <p className="card-text">
                        {universities.shortdescription}
                      </p>
                      <Link
                        to={`/universities/${universities.slug.current}`}
                        className="btn btn-primary"
                      >
                        Read Article
                      </Link>
                    </div>
                  </div>
                );
              })}
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
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <h3>GET IN TOUCH</h3>
            <p className="text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
            </p>

            <div className="mb-4">
              <p className="contact-form-info">
                <i class="far fa-envelope fa-2x"></i>{" "}
                <span className="contact-form-text">admin@eduprov.com</span>
              </p>
            </div>
            <div className="mb-4">
              <p className="contact-form-info">
                <i class="fas fa-phone-alt fa-2x"></i>{" "}
                <span className="contact-form-text">+91 80 25591146</span>
              </p>
            </div>
            <div className="mb-3">
              <p className="contact-form-info">
                <i class="fas fa-map-marker-alt fa-2x"></i>{" "}
                <span className="contact-form-text">
                  No 20 2nd Floor Lady Curzon Rd Santha Complex, Lady Curzon Rd,
                  Infantry Rd, Bengaluru Karnataka 560001
                </span>
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <form>
              <div className="card contact-form-card">
                <div className="card-body">
                  <h5 className="contact-form-title">ADMISSION QNQUIRY FORM</h5>
                  <hr />
                  <h6 className="contact-form-title">
                    Get a callback from our Admission Counsellor{" "}
                  </h6>
                  <div className="row mt-4">
                    <div classame="form-group mb-3">
                      <label>Name</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group mb-3 mt-3">
                      <label>Email ID</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="form-group mb-3">
                      <label>Select Course</label>
                      <select className="form-control">
                        <option>Choose...</option>
                        <option>B.COM</option>
                        <option>B.B.A</option>
                        <option>B.C.A</option>
                        <option>B.SC</option>
                        <option>B.A</option>
                      </select>
                    </div>
                    <div className="form-group mb-3">
                      <label>Select University</label>
                      <select className="form-control">
                        <option>Choose...</option>
                        <option>Jain University</option>
                        <option>Singhania University</option>
                        <option>Annamalai University</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <button className="bt">Submit</button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div className="mb-5"></div>
          </div>
        </div>
      </div>
      <section className="footer">
        <div className="container">
          <div className="row"></div>
        </div>
      </section>
    </>
  );
};

export default Home;
