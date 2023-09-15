import React from "react";
import treatment from "../../../assets/images/treatment.png";

const ExceptionalDental = () => {
  return (
    <div className="container">
      <div className="row align-items-center my-5">
        <div className="col-6">
          <img src={treatment} alt="treatment" />
        </div>
        <div className="col-12 col-md-6">
          <h1 className="mb-4">Exceptional Dental Care, on Your Terms</h1>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button className="btn-primare mt-3">GET STARTED</button>
        </div>
      </div>
    </div>
  );
};

export default ExceptionalDental;
