import React from "react";

export default function Contact() {
  return (
    <>
      <style>
        {`
          input:focus {
            outline: none;
          }
        `}
      </style>

      <div className="py-5">
        <div className="text-center">
          <h1 className="fw-bold dark">CONATCT SECTION</h1>
          <div className="d-flex align-items-center justify-content-center">
            <div className="line me-3 dark dark-color"></div>
            <i className="fa-solid fa-star dark"></i>
            <div className="line ms-3 dark dark-color"></div>
          </div>
        </div>

        <form className="w-50 py-5 mx-auto">
          <label
            htmlFor="userName"
            className=" position-relative top-0"
          ></label>
          <input
            type="text"
            id="userName"
            placeholder="userName :"
            name="userName"
            className=" form-control border-0 border-bottom py-3 shadow-none"
          />
          <label htmlFor="userAge" className=" position-relative top-0"></label>
          <input
            type="text"
            id="userAge"
            placeholder="userAge :"
            name="userAge"
            className=" form-control border-0 border-bottom py-3 shadow-none"
          />
          <label
            htmlFor="userEmail"
            className=" position-relative top-0"
          ></label>
          <input
            type="email"
            id="userEmail"
            placeholder="userEmail :"
            name="userEmail"
            className=" form-control border-0 border-bottom py-3 shadow-none"
          />
          <label
            htmlFor="userPassword"
            className=" position-relative top-0"
          ></label>
          <input
            type="password"
            id="userPassword"
            placeholder="userPassword :"
            name="userPassword"
            className=" form-control border-0 border-bottom py-3 shadow-none"
          />
          <button className="btn green-color text-white my-4">
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}
