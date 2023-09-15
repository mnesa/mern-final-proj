import React from "react";

const AppointmentOption = ({ appointmentOption }) => {
  const { name, slots } = appointmentOption;
  return (
    <div>
      <div class="col text-center p-2 shadow rounded">
        <div class="h-100 p-4 rounded">
          <div class="card-body mt-2">
            <h5 class="card-title p-3 text-Secandree">{name}</h5>
            <button className="btn-primare">Book Appointment</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentOption;
