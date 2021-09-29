import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import client from "../client";
import BlockContent from "@sanity/block-content-to-react";
const Blog = () => {
  const [singlePost, setSinglePost] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"]{
        title,
        body,
        eligibility,
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

    setIsLoading(false);
  }, [slug]);

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="container-fluid mt-4">
          <div className="row">
            {/* <div className="col-md-3"></div> */}
            {/* <div className="col-md-6">
              {singlePost.mainImage && singlePost.mainImage.asset && (
                <img
                  src={singlePost.mainImage.asset.url}
                  alt={singlePost.title}
                  className="Blog-Banner-Image"
                />
              )}
            </div> */}
            <div className="col-md-12">
              <div className="card blog_card-banner_title">
                <div className="card-body">
                  <div className="blog_card_banner_title_heading">
                    <h4>{singlePost.title}</h4>
                    <hr style={{ background: "#F1C21B", height: "2px" }} />
                    <p>
                      <BlockContent
                        blocks={singlePost.body}
                        projectId="x5w0jomo"
                        dataset="production"
                      />
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="blog_eligibility_block ">
                        <h4 className="blog_eligibility_title">
                          Eligibility :
                        </h4>
                        <h4 className="blog_eligibility_subtitle">
                          {singlePost.eligibility}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-12"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
