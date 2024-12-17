import { Layout, Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../../assets/icons/logo.png";
import { RootState } from "src/redux/store";
import { logout } from "../../../redux/features/authSlice";
import { Dropdown, Menu, Avatar } from "antd";

const { Header } = Layout;

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, token } = useSelector((state: RootState) => state.auth);
  const [drawerVisible, setDrawerVisible] = useState(false);

  if (!token) {
    navigate("/login");
  }

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const toggleDrawer = () => setDrawerVisible(!drawerVisible);

  const menuItems = (
    <ul
      style={{
        listStyle: "none",
        margin: 0,
        padding: 0,
        color: "white",
      }}
    >
      <li style={{ marginBottom: "15px" }}>
        <NavLink to="/" onClick={toggleDrawer} style={{ color: "white" }}>
          Home
        </NavLink>
      </li>
      <li style={{ marginBottom: "15px" }}>
        <NavLink
          to="/meeting-room"
          onClick={toggleDrawer}
          style={{ color: "white" }}
        >
          Room Booking
        </NavLink>
      </li>
      <li style={{ marginBottom: "15px" }}>
        <NavLink to="/about" onClick={toggleDrawer} style={{ color: "white" }}>
          About
        </NavLink>
      </li>
      <li style={{ marginBottom: "15px" }}>
        <NavLink
          to="/contract"
          onClick={toggleDrawer}
          style={{ color: "white" }}
        >
          Contact
        </NavLink>
      </li>
      {user && (
        <li style={{ marginBottom: "15px" }}>
          <Button
            type="primary"
            style={{
              background: "#007BFF",
              color: "#fff",
              borderColor: "yellow",

              width: "100%",
            }}
          >
            <NavLink to="/user" onClick={toggleDrawer}>
              User Profile
            </NavLink>
          </Button>
        </li>
      )}
    </ul>
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
    <Layout style={{ background: "#000033", color: "white" }}>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          background: "#000033",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          width: "100%",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={logo}
            alt="Logo"
            style={{ height: 30, width: 30, marginRight: 10 }}
          />
          <h1 style={{ margin: 0, fontSize: "1.5rem", color: "white" }}>
            <NavLink to="/" style={{ color: "white", textDecoration: "none" }}>
              Meeting Room Book
            </NavLink>
          </h1>
        </div>

        <div className="desktop-menu">
          <nav
            style={{
              display: "flex",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <NavLink to="/" style={{ color: "white" }}>
              Home
            </NavLink>
            <NavLink to="/meeting-room" style={{ color: "white" }}>
              Room Booking
            </NavLink>
            <NavLink to="/about" style={{ color: "white" }}>
              About
            </NavLink>
            <NavLink to="/contract" style={{ color: "white" }}>
              Contact
            </NavLink>
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
                  backgroundColor: "#0077B6",
                  borderColor: "#0077B6",
                }}
              >
                <NavLink to="/login">Login</NavLink>
              </Button>
            )}
          </nav>
        </div>

        <MenuOutlined
          className="mobile-menu-icon"
          style={{ fontSize: "24px", color: "white", cursor: "pointer" }}
          onClick={toggleDrawer}
        />
      </Header>

      <Drawer
        title="Menu"
        placement="right"
        onClose={toggleDrawer}
        visible={drawerVisible}
        bodyStyle={{ backgroundColor: "#000033", color: "white" }}
        headerStyle={{ backgroundColor: "#000033", color: "white" }}
      >
        {menuItems}
        {user ? (
          <Button
            onClick={handleLogout}
            style={{
              background: "#007BFF",
              color: "#fff",
              width: "100%",
              marginTop: "20px",
            }}
          >
            Logout
          </Button>
        ) : (
          <Button
            style={{
              background: "#007BFF",
              color: "#fff",
              width: "100%",
              marginTop: "20px",
            }}
          >
            <NavLink to="/login">Login</NavLink>
          </Button>
        )}
      </Drawer>

      <style>{`
        @media (max-width: 768px) {
          .desktop-menu {
            display: none;
          }
          .mobile-menu-icon {
            display: block;
          }
        }

        @media (min-width: 769px) {
          .desktop-menu {
            display: flex;
          }
          .mobile-menu-icon {
            display: none;
          }
        }

        main {
          padding-top: 64px; /* Adjust to match the height of the navbar */
        }
      `}</style>
    </Layout>
  );
};

export default NavBar;
