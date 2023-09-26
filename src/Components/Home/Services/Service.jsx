import React from "react";

const Service = ({ service }) => {
  const { name, icon, description } = service;
  return (
    <div className="col text-center p-2 shadow rounded">
      <div className="h-100 p-4 rounded">
        <img src={icon} className="img-fluid me-3" alt="card info" />
        <div className="card-body mt-2">
          <h5 className="card-title p-3 text-Secandree">{name}</h5>
          <p className="card-text mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
