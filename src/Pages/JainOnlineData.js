import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Navbar } from '../Components/Navbar';
import Footer from './Footer';

const JainOnlineData = ({match}) => {

      const [name, SetName] = useState("");
      const [specialization, SetSpecialization] = useState("")
      const [firstyear, SetFirstYear] = useState("");
      const [secondyear, SetSecondYear] = useState("");
      const [thirdyear, SetThirdYear] = useState("");
      const [cpartner, SetCPartner] = useState("");
      const [spartner, SetSPartner] = useState("");
      const [totalfee, SetTotalFee] = useState("");

      useEffect(() => {
        const fetch = async () => {
          const { data } = await axios.get(
            `https://distance-api-url.herokuapp.com/jainonline/getjainonline/${match.params.id}`
          );
          SetName(data.name);
          SetSpecialization(data.specialization)
          SetFirstYear(data.firstyear)
          SetSecondYear(data.secondyear)
          SetThirdYear(data.thirdyear)
          SetCPartner(data.cpartner)
          SetSPartner(data.spartner)

         
        };
        fetch();
      }, [match.params.id]);

  return (
    <>
    <Navbar />
      <div className="container-fluid mt-2 mb-3">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="card blog_card-banner_title">
              <div className="card-body">
                <h5 className="universities_card_title">{name}</h5>
                <hr style={{ background: "#F1C21B", height: "2px" }} />

                <div className="row ">
                  <div className="col-md-12 text-center">
                    <table className="table table-sm table_ui">
                      <tr>
                        <td>Specialization</td>
                        <td>{specialization}</td>
                      </tr>
                      <tr>
                        <td>First Year</td>
                        <td>{firstyear}</td>
                      </tr>
                      <tr>
                        <td>Second Year</td>
                        <td>{secondyear}</td>
                      </tr>
                      <tr>
                        <td>Third Year</td>
                        <td>{thirdyear}</td>
                      </tr>
                      <tr>
                        <td>Channel Partner</td>
                        <td>{cpartner}</td>
                      </tr>
                      <tr>
                        <td>Skilling Partner</td>
                        <td>{spartner}</td>
                      </tr>
                     
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JainOnlineData;
