import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import AppointmentOption from "../AppointmentOption/AppointmentOption";

const AvailableAppointments = ({ selectedDate }) => {
  const [appointmentOptions, setAppointmentOption] = useState([]);

  useEffect(() => {
    fetch("appointmentOption.json")
      .then((res) => res.json())
      .then((data) => setAppointmentOption(data));
  }, []);

  return (
    <div className="container-fluid">
      <div className="text-center mt-5">
        <p className="text-primare">
          Available Services on: {format(selectedDate, "PP")}
        </p>
        <p>Please select a service.</p>
      </div>

      <div class="row row-cols-1 row-cols-md-3 g-4 mx-4 my-5">
        {appointmentOptions.map((option) => (
          <AppointmentOption
            key={option._id}
            appointmentOption={option}
            selectedDate={selectedDate}
          ></AppointmentOption>
        ))}
      </div>
    </div>
  );
};

export default AvailableAppointments;
