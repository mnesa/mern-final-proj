import React from "react";
import "./Review.css";

const Review = ({ review }) => {
  const { name, img, description, address } = review;
  return (
    <div className="col shadow rounded">
      <div className="h-100 p-4 rounded">
        <p className="card-text mt-2">{description}</p>
        <div className="card-body d-flex align-items-center  mt-2">
          <img src={img} className="img-fluid me-3 review-img" alt="review" />
          <div className="ms-3">
            <h5 className="card-title text-Secandree">{name}</h5>
            <h6 className="card-title">{address}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
