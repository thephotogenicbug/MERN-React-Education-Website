import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import client from "../client";
import BlockContent from "@sanity/block-content-to-react";
import { Helmet } from "react-helmet";

const AnnamalaiUniversity = () => {
  const [dataitem, updateData] = useState([]);
  const getData = () => {
    const url =
      "https://distance-api-url.herokuapp.com/applicationform/getannamalaiuniversity";
    fetch(url)
      .then((response) => response.json())
      .then((result) => updateData(result));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-12">
            <div className="card blog_card-banner_title">
              <div className="card-body">
                <h1 className="universities_card_title">
                  Annamalai University
                </h1>
                <hr style={{ background: "#F1C21B", height: "2px" }} />
                <p className="text-justify">
                  Annamalai University, accredited with ‘A’ Grade by NAAC in
                  2014, is one of India’s largest public residential
                  universities with 10 Faculties and 49 departments of study.
                  Sprawling over 950 Acres of land, the University does yeoman
                  service in taking education to the doorsteps of the people who
                  are otherwise far from access to centres of higher learning.
                  The University has initiated several innovative teaching
                  programmes over the years and has been a pioneer in distance
                  education.
                </p>
                <label style={{ fontWeight: "bold" }}>
                  Annamalai University Act 2013
                </label>
                <p className="text-justify">
                  The most significant development is the enactment of the
                  Annamalai University Act, 2013 (Tamil Nadu Act 20 of 2013),
                  which has come into force from September 25, 2013, after
                  obtaining the assent of His Excellency, the President of
                  India.
                </p>
                <label style={{ fontWeight: "bold" }}>Accolades</label>
                <p className="text-justify">
                  “The NIRF-2020” by the Ministry of Human Resource Development
                  (MHRD) has ranked the University in the band 101 - 150 in the
                  University Category. In the Pharmacy Category the ranking is
                  12th in India. In the Medical Category the ranking is 35th.
                </p>
                <p className="text-justify">
                  “The Times Higher Education World University Ranking - 2021”
                  has ranked Annamalai University in 1000+ for Overall category.
                  In the Subject Category Ranking, 2021, the University is
                  ranked 601+ for Clinical & Health Subjects, in the band of 801
                  - 1000 for Engineering, 801+ for Life Sciences and 1000+ in
                  the Physical Sciences Subjects.
                </p>
                <p className="text-justify">
                  “The QS World University Ranking - 2021” has ranked Annamalai
                  University in the band of 301 - 350 in Asia Ranking.
                </p>
                <p className="text-justify">
                  “The SCImago Institutional Ranking” (2019) has ranked 9th in
                  Tamil Nadu and 29th among the top 212 ranked institutions for
                  Higher Education in India.
                </p>
                <p className="text-justify">
                  International Comparative Performance of India's Research Base
                  (2009-14), a report published by Elsevier in April, 2016,
                  prepared in collaboration with the Department of Science and
                  Technology, Ministry of Science, Government of India has rated
                  the University as the top Indian Institute in Pharmacology,
                  17th among the top 30 Indian Universities in Publications with
                  highest subject area Publication Count in Pharmacology.
                </p>
                <p className="text-justify">
                  As far as the Global Exposure, Indian Science Ascending, a
                  Springer Nature report, done in conjunction with Confederation
                  of Indian Industries, has ranked the University as 11th among
                  the top 20 Indian Institutions in International
                  Collaborations.
                </p>
                <p className="text-justify">
                  The University has participated in the Southern (Antarctic)
                  Ocean Expeditions (SOE) organized by National Centre for
                  Antarctic Ocean Research 2011 - 12 onwards.
                </p>
                <label style={{ fontWeight: "bold" }}>
                  Research & Partnership
                </label>
                <p className="text-justify">
                  Annamalai University has a commendable track record in
                  projects and publications and has been awarded the PURSE
                  Programme by the Department of Science and Technology. Ten
                  departments are supported by UGC-SAP, Ten by DST-FIST and two
                  departments have attained the status of Centre of Advanced
                  Study. Annamalai University has joint research and innovation
                  partnerships with 24 institutions across the USA, Europe,
                  Australia, Japan, and the UK. The list of partners includes
                  prestigious institutes like Karolinska Institute, John Hopkins
                  University, and University of Michigan amongst others.
                </p>
                <p className="text-justify">
                  Two of the most notable international collaborations in which
                  Annamalai University is the Co-ordinating Institute include
                  the Indo- EU FUNCFOOD Project and the 21st Century Indo-US
                  Knowledge Initiative. There are several ongoing research
                  projects with international foundations and industrial players
                  like Bayer, CavinKare, Dow Agrosciences, Bill & Melinda Gates
                  Foundation, HCL, L&T, Accenture, and Huawei.
                </p>
                <label style={{ fontWeight: "bold" }}>MoUs & Patents</label>
                <p className="text-justify">
                  To its credit, The University has obtained 15 Patents and has
                  40 MoUs with research partners like FAO, IRRI and USDA.
                </p>
                <label style={{ fontWeight: "bold" }}>
                  Institutional Social Responsibility Activities
                </label>
                <p className="text-justify">
                  The ISR activities of the University include, Hospital on
                  Wheels, Free Medical and Dental Camps in Villages, Lifestyle &
                  Hygiene Awareness, Rural & Urban Health Centres through the
                  Faculty of Medicine and Dentistry which is attached with a
                  1400 bedded hospital. The Faculty of Agriculture carries out
                  extension activities like Agripreneurship Development
                  Programme, Sustainable Livelihood Projects for Tsunami
                  affected people and Training Farmers in Integrated Farming.
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
                      <div className="col-md-4">
                        <div className="card m-2 universities_card_annamalai">
                          <div className="card-body universities_card_course_title_annamalai">
                            <h5>{data.course}</h5>
                          </div>
                          <div className="universities_specs">
                            <h5 className="text-center">{data.specz}</h5>
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
      </div>
    </>
  );
};

export default AnnamalaiUniversity;
