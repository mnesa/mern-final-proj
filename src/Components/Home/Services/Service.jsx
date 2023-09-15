import React from "react";

const Service = ({ service }) => {
  const { name, icon, description } = service;
  return (
    <div class="col text-center p-2 shadow rounded">
      <div class="h-100 p-4 rounded">
        <img src={icon} class="img-fluid me-3" alt="card info" />
        <div class="card-body mt-2">
          <h5 class="card-title p-3 text-Secandree">{name}</h5>
          <p class="card-text mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
