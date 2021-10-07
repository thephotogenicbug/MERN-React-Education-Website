import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="p-10 bg-gray-800 text-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <div className="md-5">
              <h4 className="text-2xl pb-4">EDUPROV</h4>
              <p className="text-gray-300">
                <strong>Address :</strong> No 20 2nd Floor Lady Curzon Rd Santha
                Complex, Lady Curzon Rd, Infantry Rd, Bengaluru Karnataka 560001
                <br />
                <br />
                <strong>Phone :</strong> +91 80 25591146 <br />
                <strong>Email :</strong> admin@eduprov.com
                <br />
              </p>
            </div>
            <div className="md-5">
              <h4 className="pb-4">Course Links</h4>
              <ul className="text-gray-300">
                <li className="pb-4">
                  {" "}
                  <i className="fa fa-chevron-right text-yellow-500"></i>
                  <a
                    href="#"
                    className="hover:text-yellow-500 text-gray-300"
                    style={{ textDecoration: "none" }}
                  >
                    Sample
                  </a>{" "}
                </li>
                <li className="pb-4">
                  {" "}
                  <i className="fa fa-chevron-right text-yellow-500"></i>
                  <a
                    href="#"
                    className="hover:text-yellow-500 text-gray-300"
                    style={{ textDecoration: "none" }}
                  >
                    Sample
                  </a>{" "}
                </li>
                <li className="pb-4">
                  {" "}
                  <i className="fa fa-chevron-right text-yellow-500"></i>
                  <a
                    href="#"
                    className="hover:text-yellow-500 text-gray-300"
                    style={{ textDecoration: "none" }}
                  >
                    Sample
                  </a>{" "}
                </li>
                <li className="pb-4">
                  {" "}
                  <i className="fa fa-chevron-right text-yellow-500"></i>
                  <a
                    href="#"
                    className="hover:text-yellow-500 text-gray-300"
                    style={{ textDecoration: "none" }}
                  >
                    Sample
                  </a>{" "}
                </li>
                <li className="pb-4">
                  {" "}
                  <i className="fa fa-chevron-right text-yellow-500"></i>
                  <a
                    href="#"
                    className="hover:text-yellow-500 text-gray-300"
                    style={{ textDecoration: "none" }}
                  >
                    Sample
                  </a>{" "}
                </li>
                <li className="pb-4">
                  {" "}
                  <i className="fa fa-chevron-right text-yellow-500"></i>
                  <a
                    href="#"
                    className="hover:text-yellow-500 text-gray-300"
                    style={{ textDecoration: "none" }}
                  >
                    Sample
                  </a>{" "}
                </li>
              </ul>
            </div>
            <div className="md-5">
              <h4 className="pb-4">University Links</h4>
              <ul className="text-gray-500">
                <li className="pb-4">
                  {" "}
                  <i className="fa fa-chevron-right text-yellow-500"></i>
                  <a
                    href="/jainuniversity"
                    className="hover:text-yellow-500 text-gray-300"
                    style={{ textDecoration: "none" }}
                  >
                    Jain University
                  </a>{" "}
                </li>
                <li className="pb-4">
                  {" "}
                  <i className="fa fa-chevron-right text-yellow-500"></i>
                  <a
                    href="/singhaniaUniversity"
                    className="hover:text-yellow-500 text-gray-300"
                    style={{ textDecoration: "none" }}
                  >
                    Singhania University
                  </a>{" "}
                </li>
                <li className="pb-4">
                  {" "}
                  <i className="fa fa-chevron-right text-yellow-500"></i>
                  <a
                    href="/annamalaiuniversity"
                    className="hover:text-yellow-500 text-gray-300"
                    style={{ textDecoration: "none" }}
                  >
                    Annamalai University
                  </a>{" "}
                </li>
                {/* <li className="pb-4">
                  {" "}
                  <i className="fa fa-chevron-right text-yellow-500"></i>
                  <a
                    href="#"
                    className="hover:text-yellow-500 text-gray-300"
                    style={{ textDecoration: "none" }}
                  >
                    Sample
                  </a>{" "}
                </li>
                <li className="pb-4">
                  {" "}
                  <i className="fa fa-chevron-right text-yellow-500"></i>
                  <a
                    href="#"
                    className="hover:text-yellow-500 text-gray-300"
                    style={{ textDecoration: "none" }}
                  >
                    Sample
                  </a>{" "}
                </li>
                <li className="pb-4">
                  {" "}
                  <i className="fa fa-chevron-right text-yellow-500"></i>
                  <a
                    href="#"
                    className="hover:text-yellow-500 text-gray-300"
                    style={{ textDecoration: "none" }}
                  >
                    Sample
                  </a>{" "}
                </li> */}
              </ul>
            </div>
            <div className="md-5">
              <h4 className="pb-4">Join Our Newsletter</h4>
              <form className="flex flex-row flex-wrap">
                <input
                  type="text"
                  className="text-gray-500 w-2/3 p-2 focus:border-yellow-500 focus:outline-none"
                  placeholder="Email"
                />
                <button className="p-2 w-1/3 bg-yellow-500 text-white hover:bg-yellow">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-900 text-gray-500 px-10">
        <div className="max-w-7xl flex flex-col sm:flex-row py-4 mx-auto justify-between items-center ">
          <div className="text-center ">
            <div>
              Copyright{" "}
              <strong>
                <span>Eduprov 2021</span>
              </strong>
              . All Rights Reserved
            </div>
            <div>
              Designed by{" "}
              <a
                style={{ textDecoration: "none" }}
                href="https://thephotogenicbug.in/"
                className="text-yellow-500 hover:text-yellow-500"
              >
                thephotogenicbug
              </a>
            </div>
          </div>
          <div className="text-center text-xl  mb-2">
            <a
              href="https://twitter.com/eduprov"
              className="w-10 h-10 rounded-full bg-yellow-500 hover:bg-yellow-600 mx-1 inline-block pt-1 text-white"
            >
              {" "}
              <i className="fab fa-twitter"></i>{" "}
            </a>
            <a
              href="https://www.facebook.com/eduprovinstitute/"
              className="w-10 h-10 rounded-full bg-yellow-500 hover:bg-yellow-600 mx-1 inline-block pt-1 text-white"
            >
              {" "}
              <i className="fab fa-facebook"></i>{" "}
            </a>
            <a
              href="https://www.instagram.com/eduprov_education/"
              className="w-10 h-10 rounded-full bg-yellow-500 hover:bg-yellow-600 mx-1 inline-block pt-1 text-white"
            >
              {" "}
              <i className="fab fa-instagram"></i>{" "}
            </a>
            <a
              href="https://www.linkedin.com/in/eduprov-educational-institute-ab2b24115/"
              className="w-10 h-10 rounded-full bg-yellow-500 hover:bg-yellow-600 mx-1 inline-block pt-1 text-white"
            >
              {" "}
              <i className="fab fa-linkedin"></i>{" "}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
