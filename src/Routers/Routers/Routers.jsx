import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Components/Home/Home";
import About from "../../Components/About/About";
import Appointment from "../../Components/Appointment/Appointment";
import Login from "../../Components/Login/Login";
import SignUp from "../../Components/SignUp/SignUp";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import MyAppointment from "../../Components/Dashboard/MyAppointMent/MyAppointment";
import DashboardLayout from "../../Layout/DashboardLayout";
import AllUsers from "../../Components/Dashboard/AllUsers/AllUsers";
import AddDoctor from "../../Components/Dashboard/AddDoctor/AddDoctor";
import ManageDoctors from "../../Components/Dashboard/ManageDoctors/ManageDoctors";
import AddNewDoctor from "../../Components/Dashboard/AddNewDoctor/AddNewDoctor";
import AdminRouter from "../AdminRouter/AdminRouter";
import Payment from "../../Components/Dashboard/Payment/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/appointment",
        element: (
          <PrivateRouter>
            <Appointment></Appointment>
          </PrivateRouter>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRouter>
        <DashboardLayout></DashboardLayout>
      </PrivateRouter>
    ),
    children: [
      {
        path: "/dashboard",
        element: <MyAppointment></MyAppointment>,
      },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRouter>
            <AllUsers></AllUsers>
          </AdminRouter>
        ),
      },
      {
        path: "/dashboard/add-doctor",
        element: (
          <AdminRouter>
            <AddDoctor></AddDoctor>
          </AdminRouter>
        ),
      },
      {
        path: "/dashboard/addNewDoctor",
        element: (
          <AdminRouter>
            <AddNewDoctor></AddNewDoctor>
          </AdminRouter>
        ),
      },
      {
        path: "/dashboard/manage-doctors",
        element: (
          <AdminRouter>
            <ManageDoctors></ManageDoctors>
          </AdminRouter>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/bookings/${params.id}`),
        element: (
          <AdminRouter>
            <Payment></Payment>
          </AdminRouter>
        ),
      },
    ],
  },
]);

export default router;
