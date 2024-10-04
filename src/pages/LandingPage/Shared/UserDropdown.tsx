import { Avatar, Dropdown, Menu, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useState } from "react";

// Menu for authenticated users (non-admin)
const userMenu = (
  <Menu>
    <Menu.Item key="1">
      <a href="/my-bookings">My Bookings</a>
    </Menu.Item>
    <Menu.Item key="2">
      <a href="/logout">Logout</a>
    </Menu.Item>
  </Menu>
);

// Menu for admins
const adminMenu = (
  <Menu>
    <Menu.Item key="1">
      <a href="/dashboard">Dashboard</a>
    </Menu.Item>
    <Menu.Item key="2">
      <a href="/logout">Logout</a>
    </Menu.Item>
  </Menu>
);

const UserDropdown = () => {
  const [isAuthenticated /*  setIsAuthenticated */] = useState(true); // Simulate user authentication status
  const [isAdmin /* setIsAdmin */] = useState(false); // Simulate admin status

  return (
    <div>
      {/* Display user avatar and dropdown if authenticated */}
      {isAuthenticated ? (
        <Dropdown overlay={isAdmin ? adminMenu : userMenu} trigger={["click"]}>
          <Avatar
            style={{ backgroundColor: "#87d068", cursor: "pointer" }}
            icon={<UserOutlined />}
          />
        </Dropdown>
      ) : (
        // Display Login/Register button if not authenticated
        <Button type="primary" href="/login">
          Login/Register
        </Button>
      )}
    </div>
  );
};

export default UserDropdown;
