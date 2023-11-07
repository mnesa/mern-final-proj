import React, { useContext } from "react";
import Header from "../Components/Shared/Header/Header";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import useAdmin from "../hooks/useAdmin";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  console.log(isAdmin);
  return (
    <div>
      <Header></Header>
      <div className="d-flex m-top">
        {/* nav */}
        <div className="w-25 pt-4">
          <NavLink
            className="nav-link ps-5 py-2 fw-medium text-secondary"
            to="/dashboard"
          >
            My Appointment
          </NavLink>

          {isAdmin && (
            <>
              <NavLink
                className="nav-link ps-5 py-2 fw-medium text-secondary"
                to="/dashboard/allusers"
              >
                All Users
              </NavLink>
              <NavLink
                className="nav-link ps-5 py-2 fw-medium text-secondary"
                to="/dashboard/add-doctor"
              >
                Add Doctor
              </NavLink>
              <NavLink
                className="nav-link ps-5 py-2 fw-medium text-secondary"
                to="/dashboard/addNewDoctor"
              >
                Add New Doctor
              </NavLink>
              <NavLink
                className="nav-link ps-5 py-2 fw-medium text-secondary"
                to="/dashboard/manage-doctors"
              >
                Manage Doctors
              </NavLink>
            </>
          )}
        </div>
        {/* body-container */}
        <div className="w-75 bg-Secandree h-100">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
