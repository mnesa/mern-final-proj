import React from "react";
import "./Banner.css";
import bannerPhoto from "../../../assets/images/chair.png";

const Banner = () => {
  return (
    <div className="container banner py-5 my-5">
      <div className="row align-items-center my-5">
        <div className="col-12 col-md-6">
          <h1>Your New Smile Starts Here</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <button className="btn-primare mb-5 mb-md-0">GET STARTED</button>
        </div>
        <div className="col-12 col-md-6">
          <img src={bannerPhoto} alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
