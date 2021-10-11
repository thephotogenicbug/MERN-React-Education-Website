import React, { useState } from "react";
import ContactImg from "../Components/assets/contact.png";
import axios from "axios";
import { Helmet } from "react-helmet";
import { Navbar } from "../Components/Navbar";
import Footer from "./Footer";
const ContactUs = () => {
  const [name, pickName] = useState("");
  const [email, pickEmail] = useState("");
  const [mobile, pickMobile] = useState("");
  const [choose, pickChoose] = useState("");
  const [message, pickMessage] = useState("");

  const Submit = () => {
    const url = "https://distance-api-url.herokuapp.com/contact/contactform";
    const input = { name, email, mobile, choose, message };
    axios.post(url, input).then((response) => {
      pickName("");
      pickEmail("");
      pickMobile("");
      pickChoose("");
      pickMessage("");
    });
  };

  return (
    <>
    <Navbar />
      <Helmet>
        <title>Contact us</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-4">
            <h4 className="universities_card_title">CONTACT US</h4>
            <hr style={{ background: "#F1C21B", height: "2px" }} />
          </div>
          <div className="col-md-6 mt-3">
            <img src={ContactImg} className="contact_img" />
          </div>
          <div className="col-md-6 mt-3">
            <div className="row">
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label className="contact_form_label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => pickName(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label className="contact_form_label">Email</label>
                  <input
                    type="text"
                    className="form-control"
                    value={email}
                    onChange={(e) => pickEmail(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label className="contact_form_label">Mobile No</label>
                  <input
                    type="text"
                    className="form-control"
                    value={mobile}
                    onChange={(e) => pickMobile(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group mb-3">
                  <label className="contact_form_label">Select</label>
                  <input
                    type="text"
                    className="form-control"
                    value={choose}
                    onChange={(e) => pickChoose(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group mb-3">
                  <label className="contact_form_label">Message</label>
                  <textarea
                    className="form-control"
                    rows="3"
                    value={message}
                    onChange={(e) => pickMessage(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="form-group">
                <button className="bt" onClick={Submit}>
                  Submit
                </button>
                {/* <p>{output}</p> */}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <h4 className="universities_card_title">CONTACT INFO</h4>
            <hr style={{ background: "#F1C21B", height: "2px" }} />
          </div>
          <div className="col-md-6">
            <h4></h4>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
