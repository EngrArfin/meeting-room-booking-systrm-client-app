import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MeetingRoom from "../pages/LandingPage/MeetingRoom";
import About from "../pages/LandingPage/About";
import Contract from "../pages/LandingPage/Contract";
import Login from "../pages/LandingPage/Login";
import Signup from "../pages/LandingPage/Signup";
import UserDashboard from "../pages/UserPage/UserDashboard";
import Payment from "../pages/UserPage/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },

  {
    path: "/meeting-room",
    element: <MeetingRoom></MeetingRoom>,
  },
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path: "/contract",
    element: <Contract></Contract>,
  },

  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },

  /* Admin Dashboard */
  /*  {
    path: "admin-dashboard",
    element: <AdminDashboard />,
  }, */
  /* User Dashboard */
  {
    path: "/user-dashboard",
    element: <UserDashboard />,
  },
  {
    path: "/payment",
    element: <Payment></Payment>,
  },
]);

export default router;
