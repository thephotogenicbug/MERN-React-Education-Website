import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import client from "../client";
import BlockContent from "@sanity/block-content-to-react";
import axios from "axios";

const FeeData = ({ match }) => {
  const params = useParams();
  const [course, processCourse] = useState("");

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get(
        `http://localhost:5000/applicationform/getsinghaniauniversity/${match.params.id}`
      );
      processCourse(data.course);

      console.log(data);
    };
    fetch();
  }, [match.params.id]);

  return (
    <>
      <div className="container-fluid mt-3 mb-3">
        <div className="row">
          <div className="col-md-12">
            <div className="card blog_card-banner_title">
              <div className="card-body">
                <h1 className="universities_card_title">{course}</h1>
                <hr style={{ background: "#F1C21B", height: "2px" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeeData;
