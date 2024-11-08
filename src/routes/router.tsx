import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/LandingPage/About";
import Contract from "../pages/LandingPage/Contract";
import Login from "../pages/LandingPage/Login";
import Signup from "../pages/LandingPage/Signup";
import UserDashboard from "../pages/UserPage/UserDashboard";
import RoomData from "../pages/LandingPage/Room/RoomData";
import RoomDetails from "../pages/LandingPage/RoomDetails/RoomBookingDetails";
import BookingPage from "../pages/LandingPage/RoomDetails/RoomBookingPage";
import AdminDashboard from "../pages/AdminPage/AdminDashboard";

import UserProfile from "../pages/UserPage/UserProfile";
import UserList from "../pages/AdminPage/UserList";
import AddRoom from "../pages/AdminPage/AddRoom";
import UserAddress from "../pages/UserPage/UserAddress";
import AccountInformation from "../pages/UserPage/AccountInformation";
import OrderHistory from "../pages/UserPage/BookingHistory";
import ListProduct from "../pages/AdminPage/ListRoom";
import AddProductAdmin from "../pages/AdminPage/AddRoomAdmin";
import ProductManagemen from "../pages/AdminPage/RoomManagemen";
import Report from "../pages/AdminPage/Report";
import AdminLayout from "../components/layout/AdminLayout";
import UserLayout from "../components/layout/UserLayout";
import RoomBookingPage from "../pages/LandingPage/RoomDetails/RoomBookingPage";

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
    path: "/booking",
    element: <BookingPage />,
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

  {
    path: "/user/dashboard",
    element: <UserDashboard />,
  },
  {
    path: "/rooms/:roomId",
    element: <RoomBookingPage />,
  },

  /* Admin Dashboard */
  {
    path: "/admin",
    element: <AdminLayout></AdminLayout>,
    children: [
      {
        path: "",
        element: <AdminDashboard></AdminDashboard>,
      },

      {
        path: "users",
        element: <UserList></UserList>,
      },
      {
        path: "listproduct-admin",
        element: <ListProduct></ListProduct>,
      },
      {
        path: "addproduct-admin",
        element: <AddProductAdmin></AddProductAdmin>,
      },
      {
        path: "management",
        element: <ProductManagemen></ProductManagemen>,
      },
      {
        path: "report",
        element: <Report></Report>,
      },
      {
        path: "listproduct-admin",
        element: <AddRoom />,
      },
    ],
  },

  /* User Dashboard */
  {
    path: "/user",
    element: <UserLayout></UserLayout>,
    children: [
      {
        path: "",
        element: <UserDashboard></UserDashboard>,
      },
      {
        path: "profile",
        element: <UserProfile></UserProfile>,
      },

      {
        path: "address",
        element: <UserAddress></UserAddress>,
      },
      {
        path: "info",
        element: <AccountInformation></AccountInformation>,
      },
      {
        path: "history",
        element: <OrderHistory />,
      },
    ],
  },
]);

export default router;
