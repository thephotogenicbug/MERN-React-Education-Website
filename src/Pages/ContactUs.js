import React from "react";
import ContactImg from "../Components/assets/contact.png";
const ContactUs = () => {
  return (
    <>
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
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label className="contact_form_label">Email</label>
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label className="contact_form_label">Mobile No</label>
                <input type="text" className="form-control" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label className="contact_form_label">Select</label>
                <input type="text" className="form-control" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="form-group mb-3">
                <label className="contact_form_label">Message</label>
                <textarea className="form-control" rows="3"></textarea>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="form-group">
              <button className="bt">Submit</button>
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
    
    </>
  );
};

export default ContactUs;
