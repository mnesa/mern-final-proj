import React from "react";
import { useQuery } from "react-query";
import "./ManageDoctors.css";

const ManageDoctors = () => {
  const { data: doctors = [], refetch } = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/doctors");
      const data = await res.json();
      return data;
    },
  });

  const handleDeleteDoctor = (doctor) => {
    fetch(`http://localhost:3000/doctors/${doctor._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success(`DR. ${doctor.name} deleted successful`);
          refetch();
        }
      });
  };
  return (
    <div className="p-5">
      <h5>Manage Doctors</h5>
      <div className="">
        <table className="table my-4">
          <thead>
            <tr>
              <th scope="col">Serial</th>
              <th scope="col">Avatar</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Specialty</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, i) => (
              <tr key={doctor._id}>
                <th scope="row">{i + 1}</th>
                <th>
                  {/* <img className="doctor-img" src={doctor.image} alt="" /> */}
                  <img
                    className="doctor-img"
                    src={`data:image/png;base64,${doctor.image}`}
                    alt=""
                  />
                </th>
                <td>{doctor.name}</td>
                <td>{doctor.email}</td>
                <td>{doctor.specialty}</td>
                <td>
                  <button
                    onClick={() => handleDeleteDoctor(doctor)}
                    className="btn btn-sm bg-danger text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDoctors;
