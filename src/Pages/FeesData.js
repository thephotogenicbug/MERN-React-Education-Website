import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import client from "../client";
import BlockContent from "@sanity/block-content-to-react";
import axios from "axios";

const FeeData = ({ match }) => {
  const params = useParams();
  const [course, processCourse] = useState("");
  const [eligibility, processEligibility] = useState("");
  const [coursemode, processCoursemode] = useState("");
  const [duration, processDuration] = useState("");
  const [exams, processExams] = useState("");
  const [coursefee, processCourseFee] = useState("");
  const [application, processApplication] = useState("");
  const [examfee, processExamFee] = useState("");
  const [totalfee, processTotalFee] = useState("")

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get(
        `https://distance-api-url.herokuapp.com/applicationform/getsinghaniauniversity/${match.params.id}`
      );
      processCourse(data.course);
      processEligibility(data.eligibility);
      processCoursemode(data.coursemode);
      processDuration(data.duration);
      processExams(data.exams);
      processCourseFee(data.coursefee);
      processApplication(data.application);
      processExamFee(data.examfee);
      processTotalFee(data.totalfee)

      console.log(data);
    };
    fetch();
  }, [match.params.id]);

  return (
    <>
      <div className="container-fluid mt-2 mb-3">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
            <div className="card blog_card-banner_title">
              <div className="card-body">
                <h5 className="universities_card_title">{course}</h5>
                <hr style={{ background: "#F1C21B", height: "2px" }} />

                <div className="row ">
                  <div className="col-md-12 text-center">
                    <table className="table table-sm table_ui">
                      <tr>
                        <td>Eligibility</td>
                        <td>{eligibility}</td>
                      </tr>
                      <tr>
                        <td>Coursemode</td>
                        <td>{coursemode}</td>
                      </tr>
                      <tr>
                        <td>Duration</td>
                        <td>{duration}</td>
                      </tr>
                      <tr>
                        <td>Exams</td>
                        <td>{exams}</td>
                      </tr>
                      <tr>
                        <td>Course Fee</td>
                        <td>{coursefee}</td>
                      </tr>
                      <tr>
                        <td>Application Fee</td>
                        <td> {application} </td>
                      </tr>
                      <tr>
                        <td>Exam Fee</td>
                        <td>{examfee}</td>
                      </tr>
                      <tr>
                        <td>Total Fee</td>
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
    </>
  );
};

export default FeeData;
