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
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard",
        element: <MyAppointment></MyAppointment>,
      },
      {
        path: "/dashboard/allusers",
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);

export default router;
