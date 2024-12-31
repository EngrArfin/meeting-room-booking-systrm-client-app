import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/LandingPage/About";
import Contract from "../pages/LandingPage/Contract";
import Login from "../pages/LandingPage/Login";
import Signup from "../pages/LandingPage/Signup";
import UserDashboard from "../pages/UserPage/UserDashboard";
import RoomData from "../pages/LandingPage/Room/RoomData";
import RoomDetails from "../pages/LandingPage/RoomDetails/RoomBookingDetails";
import AdminDashboard from "../pages/AdminPage/AdminDashboard";

import UserProfile from "../pages/UserPage/UserProfile";
import UserList from "../pages/AdminPage/UserList";
import AddRoom from "../pages/AdminPage/AddRoom";
import UserAddress from "../pages/UserPage/UserAddress";
import AccountInformation from "../pages/UserPage/AccountInformation";
import ListProduct from "../pages/AdminPage/ListRoom";
import AddProductAdmin from "../pages/AdminPage/AddRoomAdmin";
import ProductManagemen from "../pages/AdminPage/RoomManagemen";
import Report from "../pages/AdminPage/Report";
import AdminLayout from "../components/layout/AdminLayout";
import UserLayout from "../components/layout/UserLayout";
import BookingHistoryData from "../pages/UserPage/BookingHistory/BookingHistoryData";
import ConfirmBooking from "../pages/LandingPage/RoomDetails/ConfirmBooking";
import BlogPage from "../pages/LandingPage/Blogs/BlogPage";
import TodoData from "../pages/AdminPage/todo/TodoData";

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
    path: "/blog",
    element: <BlogPage></BlogPage>,
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
  /*  {
    path: "booking/:roomId",
    element: <RoomBookingPage />,
  }, */
  {
    path: "booking/:roomId",
    element: <ConfirmBooking />,
  },

  /* Admin */
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
        path: "adminstatus",
        element: <TodoData />,
      },
      {
        path: "listproduct-admin",
        element: <AddRoom />,
      },
      {
        path: "report",
        element: <Report></Report>,
      },
    ],
  },

  /* User */
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
        element: <BookingHistoryData />,
      },
      {
        path: "userstatus",
        element: <TodoData />,
      },

      /* {
        path: "history",
        element: <OrderHistory />,
      }, */
    ],
  },
]);

export default router;
