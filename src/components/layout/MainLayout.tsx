import { Layout, Button, Menu, Dropdown, Avatar } from "antd";
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
import { MenuOutlined } from "@ant-design/icons";
import BookableLand from "../../pages/LandingPage/Shared/BookableLand";
import Landing from "../../pages/LandingPage/Shared/QualityPlan";
import BlogPage from "../../pages/LandingPage/Blogs/BlogPage";
import Sponcher from "../../pages/LandingPage/Shared/Sponcher";

const { Header, Content } = Layout;

const items = [
  { key: "Home", label: <NavLink to="/">Home</NavLink> },
  {
    key: "Meeting Rooms",
    label: <NavLink to="/meeting-room">Room Booking</NavLink>,
  },
  { key: "About", label: <NavLink to="/about">About</NavLink> },
  { key: "Contact", label: <NavLink to="/contact">Contact</NavLink> },
  { key: "Contact", label: <NavLink to="/contact">Blog</NavLink> },
];

const MainLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state: RootState) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const menu = (
    <Menu>
      {items.map((item) => (
        <Menu.Item key={item.key}>{item.label}</Menu.Item>
      ))}
    </Menu>
  );

  const userMenu = (
    <Menu>
      <Menu.Item key="profile">
        <NavLink to="/user">Profile</NavLink>
      </Menu.Item>
      <Menu.Item key="logout" onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#000033",
          padding: "10px 20px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src={logo}
            alt="Logo"
            style={{
              height: "40px",
              width: "40px",
              borderRadius: "50%",
            }}
          />
          <NavLink
            to="/"
            style={{
              color: "#FFFFFF", // White
              fontSize: "1.5rem",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Meeting Room Book
          </NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="desktop-menu">
          <Menu
            theme="dark"
            mode="horizontal"
            items={items}
            style={{
              background: "transparent",
              borderBottom: "none",
              color: "#FFFFFF",
            }}
          />
        </div>

        {/* User Section */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {user ? (
            <Dropdown overlay={userMenu} trigger={["click"]}>
              <Avatar
                style={{
                  backgroundColor: "#007BFF",
                  color: "#fff",
                  border: "2px solid yellow",
                  cursor: "pointer",
                }}
              >
                {user.name ? user.name[0] : "U"}{" "}
                {/* Display first letter of user's name */}
              </Avatar>
            </Dropdown>
          ) : (
            <Button
              type="primary"
              style={{
                background: "#007BFF",
                color: "#fff",
                borderColor: "yellow",
              }}
            >
              <NavLink to="/login">Login</NavLink>
            </Button>
          )}
        </div>

        <Dropdown
          overlay={menu}
          trigger={["click"]}
          className="mobile-menu"
          placement="bottomRight"
        >
          <Button
            icon={<MenuOutlined />}
            style={{
              background: "none",
              border: "none",
              color: "#FFFFFF",
            }}
          />
        </Dropdown>
      </Header>

      <Content
        style={{
          padding: "20px",
          background: "#F9FAFB", // Light gray
          minHeight: "calc(100vh - 150px)",
        }}
      >
        <Hero />
        <ServiceAdvertisement />
        <FitureItem />
        <Landing />
        <BookableLand />
        <HowItWorks />
        <RoomData />
        <WhyChooseUs />
        <BlogPage />
        <Testimonials />
        <Sponcher />
      </Content>

      {/* Footer Section */}
      <Footers />

      {/* Custom Styles */}
      <style>{`
        .desktop-menu {
          display: flex;
        }
        .mobile-menu {
          display: none;
        }

        @media (max-width: 768px) {
          .desktop-menu {
            display: none;
          }
          .mobile-menu {
            display: block;
          }
        }

        .ant-menu-item:hover {
          background-color: #3B82F6; /* Subtle blue hover */
        }

        .ant-btn-primary {
          background: #3B82F6; /* Primary button blue */
          border: none;
        }

        .ant-btn-primary:hover {
          background: #2563EB; /* Darker blue on hover */
        }
      `}</style>
    </Layout>
  );
};

export default MainLayout;
