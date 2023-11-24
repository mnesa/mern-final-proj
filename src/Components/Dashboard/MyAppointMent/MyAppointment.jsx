import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

const MyAppointment = () => {
  const { user } = useContext(AuthContext);
  const url = `http://localhost:3000/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });
  console.log(bookings);
  return (
    <div className="p-5">
      <h5>my appointment</h5>
      <div className="">
        <table className="table my-4">
          <thead>
            <tr>
              <th scope="col">Serial</th>
              <th scope="col">Name</th>
              <th scope="col">Treatment</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((bookings, i) => (
              <tr key={bookings._id}>
                <th scope="row">{i + 1}</th>
                <td>{bookings.patient}</td>
                <td>{bookings.treatment}</td>
                <td>{bookings.appointmentDate}</td>
                <td>{bookings.slot}</td>
                <td>
                  {bookings.price && !bookings.paid && (
                    <Link to={`/dashboard/payment/${bookings._id}`}>
                      <button className="btn-sm btn-2nd m-0 w-50">PAY</button>
                    </Link>
                  )}
                  {bookings.price && bookings.paid && (
                    <span className="text-success">PAID</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
