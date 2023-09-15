import React, { useState } from "react";
import bannerPhoto from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  return (
    <div className="container banner py-5 my-5">
      <div className="row align-items-center my-5">
        <div className="col-12 col-md-6">
          <DayPicker
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
          />
        </div>
        <div className="col-12 col-md-6">
          <img src={bannerPhoto} alt="banner" />
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
