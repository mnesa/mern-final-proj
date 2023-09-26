import React from "react";

const InfoCard = ({ card }) => {
  const { name, bgClass, icon, description } = card;
  return (
    <div className="col text-white">
      <div className={`d-flex h-100 p-4 rounded ${bgClass}`}>
        <img src={icon} className="img-fluid me-3" alt="card info" />
        <div className="card-body mt-2">
          <h5 className="card-title">{name}</h5>
          <p className="card-text  text-white mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
