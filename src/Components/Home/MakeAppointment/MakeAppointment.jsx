import React from "react";
import "./MakeAppointment.css";
import doctor from "../../../assets/images/doctor-small.png";

const MakeAppointment = () => {
  return (
    <div className="appointment">
      <div className="container text-white">
        <div className="row align-items-center my-5">
          <div className="col-12 col-md-6">
            <img src={doctor} className="img-fluid" alt="treatment" />
          </div>
          <div className="col-12 col-md-6">
            <h5 className="text-primare">Appointment</h5>
            <h1 className="mb-4 text-white">Make an appointment Today</h1>
            <p className="text-white">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button className="btn-primare mt-3  mb-5 mb-md-0">
              GET STARTED
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MakeAppointment;
