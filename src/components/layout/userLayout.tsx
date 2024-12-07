import {
  Avatar,
  Layout,
  Menu,
  Dropdown,
  Typography,
  Button,
  MenuProps,
} from "antd";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { UserOutlined } from "@ant-design/icons";
import { useState, useEffect } from "react";
import { logout } from "../../redux/features/authSlice";

const { Header, Content, Sider } = Layout;
const { Title } = Typography;

const UserLayout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // Accessing user data from Redux store
  const user = useAppSelector((store) => store.auth.user);

  const [menuVisible, setMenuVisible] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem("user");
    navigate("/");
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      if (!user) {
        dispatch({ type: "auth/setUser", payload: parsedUser });
      }
    }
  }, [dispatch, user]);

  useEffect(() => {
    console.log(user);
  }, [user]);

  const menuItems: MenuProps["items"] = [
    {
      key: "Dashboard",
      label: "Dashboard",
      children: [
        {
          key: "Admin",
          label: <NavLink to="/admin">Admin {user?.phone}</NavLink>,
        },
        { key: "User", label: <NavLink to="/user/profile">Profile</NavLink> },
      ],
    },
  ];

  const userMenu = (
    <Menu>
      <Menu.Item key="Profile">
        <NavLink to="/user/profile">Profile</NavLink>
      </Menu.Item>
      <Menu.Item key="Settings">
        <NavLink to="/user/settings">Settings</NavLink>
      </Menu.Item>
      <Menu.Item key="Logout" onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout
      style={{
        borderRadius: "8px",
        background:
          "linear-gradient(90deg, #2e004f, #00bfae, #2e004f, #00bfae)",
        color: "#ffffff",
        boxShadow: "0px 4px 15px rgba(0.3, 1, 0, 0.3)",
      }}
    >
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "fixed",
          width: "100%",
          zIndex: 1000,
        }}
      >
        <Title level={3} style={{ color: "white", margin: 0 }}>
          Mechanical Keyboard
        </Title>

        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["Home"]}
          items={menuItems}
          style={{ flex: 1 }}
        />
        <div style={{ display: "flex", alignItems: "center" }}>
          {user ? (
            <Dropdown
              overlay={userMenu}
              trigger={["click"]}
              onVisibleChange={(visible) => setMenuVisible(visible)}
              visible={menuVisible}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  marginLeft: 20,
                }}
              >
                <Avatar size={40} icon={<UserOutlined />} />
                <div style={{ marginLeft: 10, color: "white" }}>
                  <Title level={5} style={{ margin: 0, color: "white" }}>
                    {user?.name || "User"} {/* Display user's name */}
                  </Title>
                </div>
              </div>
            </Dropdown>
          ) : (
            <Button
              type="primary"
              style={{ marginLeft: 20 }}
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          )}
        </div>
      </Header>

      <Layout>
        <Sider
          style={{
            position: "fixed",
            height: "100vh",
            top: 64,
            zIndex: 1,
          }}
        >
          <div style={{ padding: "20px", textAlign: "center" }}>
            <Avatar size={80} icon={<UserOutlined />} />
            <Title level={4} style={{ color: "white", marginTop: "10px" }}>
              {user?.name || "User"} {/* Display user's name */}
            </Title>
            <p style={{ color: "white" }}>
              {user?.email || "arfin@gmail.com"} {/* Display user's email */}
            </p>
          </div>

          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["Profile"]}
            items={[
              {
                key: "Dashboard",
                label: (
                  <NavLink to="/user">
                    <UserOutlined /> Dashboard
                  </NavLink>
                ),
              },
              {
                key: "Book Room",
                label: (
                  <NavLink to="/meeting-room">
                    <UserOutlined /> Book Room
                  </NavLink>
                ),
              },
              {
                key: "Profile",
                label: (
                  <NavLink to="/user/profile">
                    <UserOutlined /> Profile
                  </NavLink>
                ),
              },
              {
                key: "User Info",
                label: (
                  <NavLink to="/user/info">
                    <UserOutlined /> User Info
                  </NavLink>
                ),
              },
              {
                key: "Address",
                label: (
                  <NavLink to="/user/address">
                    <UserOutlined /> Address
                  </NavLink>
                ),
              },
              {
                key: "Order History",
                label: (
                  <NavLink to="/user/history">
                    <UserOutlined /> Order History
                  </NavLink>
                ),
              },
              {
                key: "Logout",
                label: (
                  <NavLink to="#" onClick={handleLogout}>
                    <UserOutlined /> LogOut
                  </NavLink>
                ),
              },
            ]}
          />
        </Sider>

        <Layout style={{ marginLeft: 200, paddingTop: 64 }}>
          <Content style={{ margin: "64px 16px 0" }}>
            <div style={{ padding: 24, minHeight: 360 }}>
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default UserLayout;
