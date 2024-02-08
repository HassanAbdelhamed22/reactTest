import React from "react";

export default function Footer() {
  return (
    <div className="dark-color">
      <div className="container text-white">
        <div className="row text-center py-5">
          <div className="col-md-4 col-12 my-3">
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="col-md-4 col-12 my-3">
            <h3>AROUND THE WEB</h3>
            <div className="d-flex icons mt-4 text-center justify-content-center">
              <i className="fa-brands fa-facebook  mx-1"></i>
              <i className="fa-brands fa-twitter  mx-1"></i>
              <i className="fa-brands fa-linkedin  mx-1"></i>
              <i className="fa-solid fa-globe  mx-1"></i>
            </div>
          </div>
          <div className="col-md-4 col-12 my-3">
            <h3>ABOUT FREELANCER</h3>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
