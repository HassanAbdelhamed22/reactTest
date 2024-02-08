import React from "react";
import img1 from "../assests/house.png";
import img2 from "../assests/port2.png";
import img3 from "../assests/port3.png";

export default function Portfolio() {
  return (
    <div className="py-5">
      <div className="text-center">
        <h1 className="fw-bold dark">PORTFOLIO COMPONENT</h1>
        <div className="d-flex align-items-center justify-content-center">
          <div className="line me-3 dark dark-color"></div>
          <i className="fa-solid fa-star dark"></i>
          <div className="line ms-3 dark dark-color"></div>
        </div>
      </div>

      <div className="container py-3">
        <div className="row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4 ">
          <div className="col portfolio">
            <div className="overflow-hidden position-relative rounded-3">
              <img className="w-100 rounded-3" src={img1} alt="" />
              <div className=" layer position-absolute start-0 w-100 h-100 top-0 d-flex justify-content-center align-items-center">
                <i className=" text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>
          <div className="col portfolio">
            <div className="overflow-hidden position-relative rounded-3">
              <img className="w-100 rounded-3" src={img2} alt="" />
              <div className=" layer position-absolute start-0 w-100 h-100 top-0 d-flex justify-content-center align-items-center">
                <i className=" text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>
          <div className="col portfolio">
            <div className="overflow-hidden position-relative rounded-3">
              <img className="w-100 rounded-3" src={img3} alt="" />
              <div className=" layer position-absolute start-0 w-100 h-100 top-0 d-flex justify-content-center align-items-center">
                <i className=" text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>
          <div className="col portfolio">
            <div className="overflow-hidden position-relative rounded-3">
              <img className="w-100 rounded-3" src={img1} alt="" />
              <div className=" layer position-absolute start-0 w-100 h-100 top-0 d-flex justify-content-center align-items-center">
                <i className=" text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>
          <div className="col portfolio">
            <div className="overflow-hidden position-relative rounded-3">
              <img className="w-100 rounded-3" src={img2} alt="" />
              <div className=" layer position-absolute start-0 w-100 h-100 top-0 d-flex justify-content-center align-items-center">
                <i className=" text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>
          <div className="col portfolio">
            <div className="overflow-hidden position-relative rounded-3">
              <img className="w-100 rounded-3" src={img3} alt="" />
              <div className=" layer position-absolute start-0 w-100 h-100 top-0 d-flex justify-content-center align-items-center">
                <i className=" text-white fa-solid fa-plus fa-6x"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
