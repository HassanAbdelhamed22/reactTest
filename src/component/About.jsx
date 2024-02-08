import React from "react";

export default function About() {
  return (
    <div>
      <div className=" green-color  ">
        <div className="all home d-flex flex-column align-items-center justify-content-center ">
          <h1 className="fw-bold text-white ">ABOUT COMPONENT</h1>
          <div className="d-flex align-items-center justify-content-between">
            <div className="line me-3 text-white bg-white"></div>
            <i className="fa-solid fa-star text-white"></i>
            <div className="line ms-3 text-white bg-white"></div>
          </div>
          <div className="container">
            <div className="d-flex align-items-center justify-content-center gap-3 px-5  about ">
              <p className="text-white about-p">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
              <p className="text-white about-p2">
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
