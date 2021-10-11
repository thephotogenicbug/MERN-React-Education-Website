import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navbar } from "../Components/Navbar";
import Footer from "./Footer";

const JainDistanceData = ({ match }) => {
  const [name, SetName] = useState("");
  const [duration, SetDuration] = useState("");
  const [firstyear, SetFirstYear] = useState("");
  const [secondyear, SetSecondYear] = useState("");
  const [thirdyear, SetThirdYear] = useState("");
  const [examfee, SetExamFee] = useState("");
  const [fees, SetFees] = useState("");
  const [fees2, SetFees2] = useState("");
  const [totalfee, SetTotalFee] = useState("");

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/jaindistance/getjaindistance/${match.params.id}`
      );
      SetName(data.name);
      SetDuration(data.duration);
      SetFirstYear(data.firstyear);
      SetSecondYear(data.secondyear);
      SetThirdYear(data.thirdyear);
      SetExamFee(data.examfee);
      SetFees(data.fees);
      SetFees2(data.fees2);
      SetTotalFee(data.totalfee);
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
                        <td>Duration</td>
                        <td>{duration}</td>
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
                        <td>Exam Fees</td>
                        <td>{examfee}</td>
                      </tr>
                      <tr>
                        <td>Fees</td>
                        <td>{fees}</td>
                      </tr>
                      <tr>
                        <td>Fees 2</td>
                        <td>{fees2}</td>
                      </tr>
                      <tr>
                        <td>Total Fees</td>
                        <td>{totalfee}</td>
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

export default JainDistanceData;
