import { Avatar, Dropdown, Menu, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useState } from "react";

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
  const [isAuthenticated /*  setIsAuthenticated */] = useState(true);
  const [isAdmin /* setIsAdmin */] = useState(false);

  return (
    <div>
      {isAuthenticated ? (
        <Dropdown overlay={isAdmin ? adminMenu : userMenu} trigger={["click"]}>
          <Avatar
            style={{ backgroundColor: "#87d068", cursor: "pointer" }}
            icon={<UserOutlined />}
          />
        </Dropdown>
      ) : (
        <Button type="primary" href="/login">
          Login/Signup
        </Button>
      )}
    </div>
  );
};

export default UserDropdown;
