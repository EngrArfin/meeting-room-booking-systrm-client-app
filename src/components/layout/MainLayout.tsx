import { Layout, Button, Menu } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/features/authSlice";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/icons/logo.png";
import Hero from "../../pages/LandingPage/Shared/Hero";
import ServiceAdvertisement from "../../pages/LandingPage/Shared/ServiceAdvertisement";
import WhyChooseUs from "../../pages/LandingPage/Shared/WhyChooseUs";
import HowItWorks from "../../pages/LandingPage/Shared/HowItWorks";
import Testimonials from "../../pages/LandingPage/Shared/Testimonials";
import RoomData from "../../pages/LandingPage/Room/RoomData";
import FitureItem from "../../pages/LandingPage/FitureItem";
import Footers from "../../pages/LandingPage/Shared/Footer";
import { RootState } from "../../redux/store";

const { Header, Content } = Layout;

const items = [
  { key: "Home", label: <NavLink to="/">Home</NavLink> },
  {
    key: "Meeting Rooms",
    label: <NavLink to="/meeting-room">Meeting Rooms</NavLink>,
  },
  { key: "About", label: <NavLink to="/about">About</NavLink> },
  { key: "Contact", label: <NavLink to="/contract">Contact</NavLink> },
];

const MainLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, token } = useSelector((state: RootState) => state.auth); // Removed token since it's not used
  console.log(user);
  if (!token) {
    navigate("/login");
  }
  const handleLogout = () => {
    // Dispatch the logout action to clear Redux state
    dispatch(logout());

    // Clear data from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Optionally, redirect to login or home
    navigate("/login");
  };

  return (
    <Layout
      style={{
        borderRadius: "8px",
        background: "#000033",
        color: "#ffffff",
      }}
    >
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#000033",
          color: "#ffffff",
          padding: "0 20px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            style={{ height: 30, width: 30, marginRight: 10 }}
            src={logo}
            alt="Logo"
          />
          <h1 style={{ margin: 0, fontSize: "1.5rem" }}>
            <NavLink
              to="/"
              style={{
                color: "#ffffff",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              Meeting Room Book
            </NavLink>
          </h1>
        </div>

        <Menu
          theme="dark"
          mode="horizontal"
          items={items}
          style={{ flex: 1, justifyContent: "center", background: "#000033" }}
        />

        <div>
          {user ? (
            <>
              <span>
                <span>
                  <Button
                    type="primary"
                    style={{
                      backgroundColor: "yellow",
                      borderColor: "yellow",
                      color: "black",
                    }}
                  >
                    <NavLink to="/user">User Prodile</NavLink>
                  </Button>
                </span>
                {user?.user?.role}
              </span>

              <span> {user?.email}</span>
              <button
                style={{
                  backgroundColor: "yellow",
                  borderColor: "yellow",
                  color: "black",
                }}
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <Button
              type="primary"
              style={{
                backgroundColor: "yellow",
                borderColor: "yellow",
                color: "black",
              }}
            >
              <NavLink to="/login">Login</NavLink>
            </Button>
          )}
        </div>
      </Header>
      <hr />

      <Content style={{ padding: "0 48px" }}>
        <div style={{ minHeight: 280, padding: 24, color: "white" }}>
          <Hero />
          <ServiceAdvertisement />
          <FitureItem />
          <WhyChooseUs />
          <RoomData />
          <HowItWorks />
          <Testimonials />
        </div>
      </Content>

      <Footers />

      <style>{`
        @media (max-width: 768px) {
          h1 {
            font-size: 1.2rem;
          }

          img {
            height: 30px;
            width: 30px;
          }

          .ant-menu-horizontal {
            display: none;
          }

          .ant-layout-header {
            flex-direction: column;
            padding: 0 10px;
          }

          .ant-avatar {
            margin-left: 0.5rem;
          }
        }

        @media (max-width: 480px) {
          .ant-btn {
            font-size: 0.8rem;
            padding: 0.5rem 1rem;
          }

          .ant-avatar {
            margin-left: 0.25rem;
          }
        }
      `}</style>
    </Layout>
  );
};

export default MainLayout;
