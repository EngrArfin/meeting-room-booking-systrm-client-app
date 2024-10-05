import { Layout, Menu, MenuProps, Button, Dropdown, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useState } from "react";
import FitureItem from "../../pages/LandingPage/FitureItem";
import Footers from "../../pages/LandingPage/Shared/Footer";
import UserDropdown from "../../pages/LandingPage/Shared/UserDropdown";
import logo from "../../assets/icons/logo.png";
import Hero from "../../pages/LandingPage/Shared/Hero";
import MeetingRoom from "../../pages/LandingPage/MeetingRoom";
import ServiceAdvertisement from "../../pages/LandingPage/Shared/ServiceAdvertisement";
import WhyChooseUs from "../../pages/LandingPage/Shared/WhyChooseUs";

const { Header, Content } = Layout;

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "Home",
  },
  {
    key: "2",
    label: "Meeting Rooms",
  },
  {
    key: "3",
    label: "About Us",
  },
  {
    key: "4",
    label: "Contact Us",
  },
  {
    key: "5",
    label: "Login/Register",
  },
];

// Dropdown menu for authenticated users
const userMenu = (
  <Menu>
    <Menu.Item key="1">My Bookings</Menu.Item>
    <Menu.Item key="2">Logout</Menu.Item>
  </Menu>
);

// Dropdown menu for admins
const adminMenu = (
  <Menu>
    <Menu.Item key="1">Dashboard</Menu.Item>
    <Menu.Item key="2">Logout</Menu.Item>
  </Menu>
);

const LandingPageLayout = () => {
  const [isAuthenticated /* setIsAuthenticated */] = useState(false); // Change this based on actual authentication logic
  const [isAdmin /* setIsAdmin */] = useState(false); // Set this if the user is an admin

  return (
    <div className="mx-auto">
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
          {/* Logo and System Name */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              style={{ height: 30, width: 30, marginRight: 10 }}
              src={logo}
              alt="Logo"
            />
            <h1 style={{ margin: 0, fontSize: "1.5rem" }}>
              <a
                href="/"
                style={{
                  color: "#ffffff",
                  textDecoration: "none",
                  whiteSpace: "nowrap", // Prevents text wrapping
                }}
              >
                Meeting Room Book
              </a>
            </h1>
          </div>

          {/* Navigation Menu */}
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            items={items}
            style={{
              flex: 1,
              justifyContent: "center",
              background: "#000033",
              color: "#ffffff",
            }}
          />

          {/* User Icon/Dropdown */}
          <div>
            {isAuthenticated ? (
              <Dropdown
                overlay={isAdmin ? adminMenu : userMenu}
                trigger={["click"]}
              >
                <Avatar
                  style={{ backgroundColor: "#87d068" }}
                  icon={<UserOutlined />}
                />
              </Dropdown>
            ) : (
              <div>
                <Button
                  type="primary"
                  href="/login"
                  style={{ marginLeft: "1rem" }}
                >
                  Login/Register
                </Button>
                <Button href="/login">
                  <UserDropdown />
                </Button>
              </div>
            )}
          </div>
        </Header>
        <hr />
        {/* Hero Section */}
        <Content style={{ padding: "0 48px" }}>
          <div style={{ minHeight: 280, padding: 24, color: "white" }}>
            <Hero />
            <ServiceAdvertisement />
            <FitureItem />
            <WhyChooseUs />

            <MeetingRoom />
          </div>
        </Content>

        {/* Footer */}
        <Footers />
      </Layout>

      {/* Responsive Styles */}
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
            display: none; // Hide the navigation menu on mobile devices
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
    </div>
  );
};

export default LandingPageLayout;
