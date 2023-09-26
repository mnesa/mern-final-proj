import React from "react";
import people1 from "../../../assets/images/people-1.png";
import quote from "../../../assets/images/quote.png";
import Review from "./Review";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Winson Herry",
      address: "California",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people1,
    },
    {
      id: 2,
      name: "Winson Herry",
      address: "California",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people1,
    },
    {
      id: 3,
      name: "Winson Herry",
      address: "California",
      description:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: people1,
    },
  ];
  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between">
        <div>
          <h5 className="text-primare">Testimonial</h5>
          <h3>What Our Patients Says</h3>
        </div>
        <img src={quote} alt="" />
      </div>
      <div className="row row-cols-1 row-cols-md-3 g-5 mx-3 my-5">
        {reviews.map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
