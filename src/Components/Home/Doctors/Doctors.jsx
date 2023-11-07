import React from "react";
import Doctor from "./Doctor";
import { useQuery } from "react-query";

const Doctors = () => {
  const { data: doctors = [], refetch } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/doctors");
      const data = await res.json();
      return data;
    },
  });
  return (
    <div className="py-5 my-5 text-center">
      <h5 className="text-primare">OUR SERVICES</h5>
      <h2>Services We Provide</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4 mx-4 my-5">
        {doctors.map((doctor) => (
          <Doctor key={doctor._id} doctor={doctor}></Doctor>
        ))}
      </div>
    </div>
  );
};

export default Doctors;
