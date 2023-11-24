import React from "react";
import { useLoaderData } from "react-router-dom";

const Payment = () => {
  const booking = useLoaderData();
  const { email, patient, price, slot, appointmentDate, treatment } = booking;
  console.log(booking);
  return (
    <div className="p-5">
      <h2>
        Payment for <span className="text-primare">{treatment}</span>
      </h2>
      <p>
        Please Pay <b>{price}</b> for your appointment on{" "}
        <strong>{appointmentDate}</strong> at <b>{slot}.</b>
      </p>
    </div>
  );
};

export default Payment;
