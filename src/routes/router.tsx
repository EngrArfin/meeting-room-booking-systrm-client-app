import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/LandingPage/About";
import Contract from "../pages/LandingPage/Contract";
import Login from "../pages/LandingPage/Login";
import Signup from "../pages/LandingPage/Signup";
import UserDashboard from "../pages/UserPage/UserDashboard";
import Payment from "../pages/UserPage/Payment";
import RoomData from "../pages/LandingPage/Room/RoomData";
import RoomDetails from "../pages/LandingPage/RoomDetails/RoomDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },

  {
    path: "/meeting-room",
    element: <RoomData />,
  },
  {
    path: "/room-details",
    element: <RoomDetails />,
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
