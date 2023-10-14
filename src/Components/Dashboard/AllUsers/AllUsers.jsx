import React from "react";
import toast from "react-hot-toast";
import { useQuery } from "react-query";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:3000/users");
      const data = await res.json();
      return data;
    },
  });
  console.log(users);
  const handleMakeAdmin = (user) => {
    fetch(`http://localhost:3000/users/admin/${user?._id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success(`${user?.name} Make Admin Successfully`);
          refetch();
        }
      });
  };

  return (
    <div className="p-5">
      <h5>All Users</h5>
      <div className="">
        <table className="table my-4">
          <thead>
            <tr>
              <th scope="col">Serial</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Job</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th scope="row">{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user?.role !== "admin" && (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-sm bg-secondary text-white"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  <button className="btn btn-sm bg-secondary text-white">
                    Remove User
                  </button>
                </td>
                {/* remove user = home work */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
