import { Layout, Menu, MenuProps, Button, Dropdown, Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useState } from "react";
/* import FitureItem from "../../pages/LandingPage/FitureItem";
import Footers from "../../pages/LandingPage/Shared/Footer";
import UserDropdown from "../../pages/LandingPage/Shared/UserDropdown";
import logo from "../../assets/icons/logo.png";
import Hero from "../../pages/LandingPage/Shared/Hero"; */

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
          }}
        >
          <div
            style={{ color: "white", display: "flex", alignItems: "center" }}
          >
            {/* Logo/System Name */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div>
                <img
                  style={{ height: 40, width: 40, marginRight: 10 }}
                  src={logo}
                  alt=""
                />
              </div>
              <div>
                <h1 style={{ marginRight: "1rem" }}>
                  <a
                    href="/"
                    style={{ color: "#ffffff", textDecoration: "none" }}
                  >
                    Meeting Room Booking System
                  </a>
                </h1>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            items={items}
            style={{
              flex: 1,
              minWidth: 0,

              background: "#000033",
              color: "#ffffff",
            }}
          />

          {/* User Icon/Dropdown */}
          <div
            style={{
              borderRadius: "8px",
              background: "#000033",
              color: "#ffffff",
            }}
          >
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

        {/* Content Section */}
        <Content style={{ padding: "0 48px" }}>
          <div style={{ minHeight: 280, padding: 24, color: "white" }}>
            <Hero></Hero>
            <FitureItem />
          </div>
        </Content>

        {/* Footer */}
        <Footers />
      </Layout>
    </div>
  );
};

export default LandingPageLayout;
