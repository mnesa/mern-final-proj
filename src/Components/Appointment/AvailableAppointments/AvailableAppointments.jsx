import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import AppointmentOption from "../AppointmentOption/AppointmentOption";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";

const AvailableAppointments = ({ selectedDate }) => {
  // const [appointmentOptions, setAppointmentOption] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:3000/appointmentOptions")
  //     .then((res) => res.json())
  //     .then((data) => setAppointmentOption(data));
  // }, []);

  const {
    data: appointmentOptions = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["appointmentOptions"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/appointmentOptions");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="container-fluid">
      <div className="text-center mt-5">
        <p className="text-primare">
          Available Services on: {format(selectedDate, "PP")}
        </p>
        <p>Please select a service.</p>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4 mx-4 my-5">
        {appointmentOptions.map((option) => (
          <AppointmentOption
            refetch={refetch}
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
