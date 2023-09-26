import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import BookingModal from "../BookingModal/BookingModal";

const AppointmentOption = ({ appointmentOption, selectedDate }) => {
  const { name, slots } = appointmentOption;

  const [treatment, setTreatment] = useState(null);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handelBookingOpen = () => setShow(true);

  return (
    <div>
      <div className="col text-center p-2 shadow rounded">
        <div className="h-100 p-4 rounded">
          <div className="card-body mt-2">
            <h5 className="card-title p-3 text-primare">{name}</h5>
            <p className="text-secondary">
              {slots.length > 0 ? slots[0] : "Try Another Day"}
            </p>
            <p className="text-secondary">
              {slots.length} {slots.length > 1 ? "spaces" : "space"} Available
            </p>
            <button
              disabled={slots.length === 0}
              onClick={() => handelBookingOpen(setTreatment(appointmentOption))}
              className="btn-primare"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
      {treatment && (
        <BookingModal
          show={show}
          handleClose={handleClose}
          treatment={treatment}
          selectedDate={selectedDate}
          setTreatment={setTreatment}
        ></BookingModal>
      )}
    </div>
  );
};

export default AppointmentOption;
