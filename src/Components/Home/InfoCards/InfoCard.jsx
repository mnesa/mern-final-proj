import React from "react";

const InfoCard = ({ card }) => {
  const { name, bgClass, icon, description } = card;
  return (
    <div class="col text-white">
      <div class={`d-flex h-100 p-4 rounded ${bgClass}`}>
        <img src={icon} class="img-fluid me-3" alt="card info" />
        <div class="card-body mt-2">
          <h5 class="card-title">{name}</h5>
          <p class="card-text  text-white mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
