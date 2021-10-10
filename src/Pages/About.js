import React from "react";
import { Helmet } from "react-helmet";
import AboutImg from "../Components/assets/about.png";
import aboutLogo from "../Components/assets/about_logo.png";
const About = () => {
  return (
    <>
      <Helmet>
        <title>About us</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <section>
        <div className="Img"></div>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="card about_card-banner_title">
              <div className="card-body about_card-body_title">
                <img src={aboutLogo} className="about_logo" />
              </div>
            </div>
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-4"></div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p className="text-justify">
              <b>Distance education</b> is a millennial for students towards a
              better career in the longer run. Distance education is now
              reaching heights as many students prefer distance education. For
              those students who have dropped their education for certain
              unspecified reasons or planning to work as well as carry forward
              their studies, distance education can be a very good choice.
            </p>
            <p className="text-justify">
              As Distance education and online education are often used
              synonymously online distance education post covid has become more
              approved by many of the students across the world. Online distance
              education has paved way for several advantages and benefits for
              completion of education. Students are able to engage in education
              from a distance, in the comfort of their own space and a
              self-relaxed pace.
            </p>
            <p className="text-justify">
              <b>Eduprov`s Distance education</b> approach is very holistic and
              productive for students choosing amongst a pool of variants in
              colleges considering the factual part of admissions, possibilities
              and getting in would be a challenging task keeping in mind the
              business casualties who are in a roar towards economic
              productivity.
            </p>
            <p className="text-justify">
              As every organization is with a mission and vision Eduprov as an
              organization in the academic field has a multi visionary approach
              towards providing students with the best online education programs
              with best amenities and multi- faceted opportunities. It provides
              students with a flexible schedule and also helps students wanting
              an early start through dual credit. The primary purpose or
              objective of distance education is to maximize student access to
              courses, with flexible schedule and learning through web based
              delivery system.
            </p>
            <p className="text-justify"></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
