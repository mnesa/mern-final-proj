import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Components/Home/Home";
import About from "../../Components/About/About";
import Appointment from "../../Components/Appointment/Appointment";
import Login from "../../Components/Login/Login";
import SignUp from "../../Components/SignUp/SignUp";
import PrivateRouter from "../PrivateRouter/PrivateRouter";

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
]);

export default router;
