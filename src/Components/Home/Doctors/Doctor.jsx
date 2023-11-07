import React from "react";

const Doctor = ({ doctor }) => {
  const { image, name, email } = doctor;
  return (
    <div className="col text-center p-2 shadow rounded">
      <div className="h-100 p-4 rounded">
        <img
          src={`data:image/png;base64,${image}`}
          className="img-fluid me-3"
          alt="card info"
        />
        <div className="card-body mt-2">
          <h5 className="card-title p-3 text-Secandree">Name: {name}</h5>
          <p className="card-text mt-2">Contact: {email}</p>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
