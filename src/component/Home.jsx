import React from "react";
import img from "../assests/avataaars.svg";

export default function Home() {
  return (
    <div className=" green-color  ">
      <div className="all home d-flex flex-column align-items-center justify-content-center ">
        <img src={img} alt="home-img" />
        <h1 className="fw-bold text-white ">START FRAMEWORK</h1>
        <div className="d-flex align-items-center justify-content-between">
          <div className="line me-3 text-white bg-white"></div>
          <i className="fa-solid fa-star text-white"></i>
          <div className="line ms-3 text-white bg-white"></div>
        </div>
        <p className="py-3 fs-6 text-white">
          Graphic Artist - Web Designer - Illustrator
        </p>
      </div>
    </div>
  );
}
