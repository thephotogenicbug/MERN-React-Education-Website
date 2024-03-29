import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import client from "../client";
import BlockContent from "@sanity/block-content-to-react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Helmet } from "react-helmet";
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

const SinghaniaUniversity = () => {
  const [dataitem, updateData] = useState([]);
  const getData = () => {
    const url =
      // "https://distance-api-url.herokuapp.com/applicationform/getsinghaniauniversity";
      "https://distance-api-url.herokuapp.com/applicationform/getsinghaniauniversity";
    fetch(url)
      .then((response) => response.json())
      .then((result) => updateData(result));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar />
      <Helmet>
        <title>
          Singhania University Distance Education in Bangalore | Eduprov
        </title>
        <meta
          name="description"
          content="Singhania University is situated at Pacheri Bari, Distt.
                  Jhunjhunu (Rajasthan) on the Delhi-Narnaul Singhana - Pilani
                  Road. It is about 160 kms. west of Delhi and about 165 kms.
                  north of Jaipur."
        />
        <meta name="keywords" content="#" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Singhania University Distance Education in Bangalore | Eduprov "
        />
        <meta property="og:url" content="" />
        <meta property="og:site_name" content="Eduprov Educational Institute" />
        <meta
          property="og:description"
          content=" Singhania University is situated at Pacheri Bari, Distt.
                  Jhunjhunu (Rajasthan) on the Delhi-Narnaul Singhana - Pilani
                  Road. It is about 160 kms. west of Delhi and about 165 kms.
                  north of Jaipur."
        />
        <meta property="og:image" content="#" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@eduprov" />
        <meta
          name="twitter:title"
          content="Singhania University Distance Education in Bangalore | Eduprov"
        />
        <meta
          name="twitter:description"
          content=" Singhania University is situated at Pacheri Bari, Distt.
                  Jhunjhunu (Rajasthan) on the Delhi-Narnaul Singhana - Pilani
                  Road. It is about 160 kms. west of Delhi and about 165 kms.
                  north of Jaipur."
        />
        <meta name="twitter:image" content="#" />
        <meta name="twitter:url" content="https://twitter.com/eduprov" />
      </Helmet>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-md-12">
            <div className="card blog_card-banner_title">
              <div className="card-body">
                <h1 className="universities_card_title">
                  Singhania University
                </h1>
                <hr style={{ background: "#F1C21B", height: "2px" }} />
                <p>
                  The University has been established by the Govt. of Rajasthan,
                  under Ordinance 6 of 2007. It is a UGC recognized university
                  as per Sec. 2f of the UGC Act 1956.
                </p>
                <p>
                  Singhania University is situated at Pacheri Bari, Distt.
                  Jhunjhunu (Rajasthan) on the Delhi-Narnaul Singhana - Pilani
                  Road. It is about 160 kms. west of Delhi and about 165 kms.
                  north of Jaipur. The University can be reached either by rail
                  or by road. The nearest railway stations are Narnaul (19 kms.)
                  and Chirawa (45 kms.)
                </p>
                <p>
                  The campus that covers an area of about 30 acres of land is
                  picturesque and away from the din of the metropolis. The
                  serenity of the hill locks all around endow the campus with an
                  ideal environment for education and research.
                </p>
                <p>
                  Singhania University came in existence by the inspirations of
                  Smt. Narmada Devi Singhanaia, mother of the founder Shri. D.C.
                  Singhania.
                </p>
                <p>
                  Singhania University was inaugurated on 21st Oct 2007 by a
                  great visionary and a philanthropist, Shri D.C. Singhania to
                  impart quality education of world class standards, reflecting
                  the latest advances in the field of education and research
                  with state-of-the-art academic and administrative
                  infrastructure. The University has a well stocked and
                  furnished library, well equipped labs, a host of indoor and
                  outdoor games and sports, majestic hostels separate for boys
                  and girls, well-furnished cottages for faculty, wide open
                  spaces, lush green lawns, colourful flowerbeds and well kept
                  orchards in sylvan surroundings.
                </p>
                <p>
                  Singhania University offers world-class infrastructure, highly
                  qualified and dedicated faculties and excellent environment
                  for academic and intellectual growth.
                </p>
                <p>
                  The University focuses on comprehensive growth of the
                  students, working on their hearts and minds by addressing to
                  their academic, cultural, physical and social needs in an
                  environment of continuous interaction and growth, conducive
                  for the enrichment of mind and body. The faculty is fully
                  committed to impart quality education by investing all its
                  skills and knowledge. The University endeavours not only to
                  produce excellent academic results but also to produce
                  excellent and successful professionals.
                </p>
                <p>
                  Special emphasis is laid on communication skills and
                  personality development. The uniqueness of our curriculum and
                  various programmes, lies in promoting a strong passion in the
                  students - for all round excellence with perfection; for
                  meeting the challenges head on with due emphasis on ethical
                  and moral values through broad -based management skills. The
                  University produces knowledgeable young citizens capable of
                  creating a better and prosperous India through inter-cultural
                  understanding and respect.
                </p>

                <div className="row">
                  <div className="col-md-12 text-center">
                    <h2 className="universities_card_title">
                      Distance Learning Course
                    </h2>
                    <hr style={{ background: "#F1C21B", height: "2px" }} />
                  </div>
                  {dataitem.map((data) => {
                    return (
                      <div className="col-md-6">
                        <div className="card m-2 universities_card_annamalai">
                          <div className="card-body universities_card_course_title_annamalai">
                            <h5>{data.course}</h5>
                          </div>
                          <div className="universities_specs">
                            <h6 className="text-center">{data.spec}</h6>
                          </div>
                          <div className="text-center  mb-3">
                            <Link
                              to={`/fees/${data._id}`}
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
        <div
          className="modal fade"
          id="mymodal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-md ">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Update Follow Up
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <div className="modal-body"></div>

              <div className="modal-footer">
                <button type="button" className="btn btn-primary btn-sm">
                  Update Now
                </button>
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SinghaniaUniversity;
