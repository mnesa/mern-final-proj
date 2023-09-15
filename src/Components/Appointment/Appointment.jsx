import React, { useEffect, useState } from "react";
import AppointmentBanner from "./AppointmentBanner/AppointmentBanner";
import AvailableAppointments from "./AvailableAppointments/AvailableAppointments";

const Appointment = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <AppointmentBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <AvailableAppointments selectedDate={selectedDate} />
    </div>
  );
};

export default Appointment;
