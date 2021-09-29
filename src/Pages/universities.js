import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import client from "../client";
import BlockContent from "@sanity/block-content-to-react";

const Universities = () => {
  const [singlePost, setSinglePost] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"]{
              title,
              body,
              distancelearningcourseone,
              distancelearning,
              mainImage{
                  asset -> {
                      _id,
                      url
                  },
                  alt
              },
          }`
      )
      .then((data) => setSinglePost(data[0]));
  });

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="container-fluid mt-3">
          <div className="row">
            <div className="col-md-12">
              <div className="card blog_card-banner_title">
                <div className="card-body">
                  <h1 className="universities_card_title">
                    {singlePost.title}
                  </h1>
                  <hr style={{ background: "#F1C21B", height: "2px" }} />
                  <p>
                    <BlockContent
                      blocks={singlePost.body}
                      projectId="x5w0jomo"
                      dataset="production"
                    />
                  </p>
                  <div className="row">
                    <div className="col-md-12 text-center">
                      <h2 className="universities_card_title">
                        {singlePost.distancelearning}
                      </h2>
                      <hr style={{ background: "#F1C21B", height: "2px" }} />
                    </div>
                    <div className="col-md-3">
                      <div className="card">
                        <div className="card-body universities_card_course_title">
                          {singlePost.distancelearningcourseone}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="card">
                        <div className="card-body universities_card_course_title">
                          {singlePost.distancelearningcourseone}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-3"></div>
                    <div className="col-md-3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Universities;
