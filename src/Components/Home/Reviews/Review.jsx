import React from "react";
import "./Review.css";

const Review = ({ review }) => {
  const { name, img, description, address } = review;
  return (
    <div class="col shadow rounded">
      <div class="h-100 p-4 rounded">
        <p class="card-text mt-2">{description}</p>
        <div class="card-body d-flex align-items-center  mt-2">
          <img src={img} class="img-fluid me-3 review-img" alt="review" />
          <div className="ms-3">
            <h5 class="card-title text-Secandree">{name}</h5>
            <h6 class="card-title">{address}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
