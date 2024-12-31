import { Divider, Layout, Menu, MenuProps, Button, Typography } from "antd";
import { Avatar, Dropdown } from "antd";

import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { useAppDispatch, useAppSelector } from "../../redux/hooks"; // Import the hook for state access
import { logout } from "../../redux/features/authSlice";
import { useEffect, useState } from "react";
import {
  MdDashboardCustomize,
  MdDomainAdd,
  MdOutlineManageHistory,
} from "react-icons/md";
import { CgDisplayGrid } from "react-icons/cg";
import { HiDocumentReport } from "react-icons/hi";
const { Title } = Typography;

const { Header, Content, Sider } = Layout;

const items: MenuProps["items"] = [
  {
    key: "Dashboard",
    label: (
      <NavLink
        to="/admin"
        style={{
          fontSize: 16,
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: "6px 10px",
          borderRadius: "6px",
          transition: "all 0.3s ease",
        }}
      >
        <MdDashboardCustomize style={{ fontSize: "20px" }} />
        Dashboard
      </NavLink>
    ),
  },
  {
    key: "Products",
    label: (
      <NavLink
        to="/admin/listproduct-admin"
        style={{
          fontSize: 16,
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: "6px 10px",
          borderRadius: "6px",
          transition: "all 0.3s ease",
        }}
      >
        <CgDisplayGrid /> Room Display
      </NavLink>
    ),
  },
  {
    key: "Add Product",
    label: (
      <NavLink
        to="/admin/addproduct-admin"
        style={{
          fontSize: 16,
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: "6px 10px",
          borderRadius: "6px",
          transition: "all 0.3s ease",
        }}
      >
        <MdDomainAdd />
        Add Room
      </NavLink>
    ),
  },

  {
    key: "Users",
    label: (
      <NavLink
        to="/admin/users"
        style={{
          fontSize: 16,
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: "6px 10px",
          borderRadius: "6px",
          transition: "all 0.3s ease",
        }}
      >
        {<UserOutlined />}Users
      </NavLink>
    ),
  },
  {
    key: "Admin Confirm",
    label: (
      <NavLink
        to="/admin/adminstatus"
        style={{
          fontSize: 16,
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: "6px 10px",
          borderRadius: "6px",
          transition: "all 0.3s ease",
        }}
      >
        {<UserOutlined />}Booking Confirm
      </NavLink>
    ),
  },

  {
    key: "Product Management",
    label: (
      <NavLink
        to="/admin/management"
        style={{
          fontSize: 16,
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: "6px 10px",
          borderRadius: "6px",
          transition: "all 0.3s ease",
        }}
      >
        <MdOutlineManageHistory /> Room Management
      </NavLink>
    ),
  },
  {
    key: "Report",
    label: (
      <NavLink
        to="/admin/report"
        style={{
          fontSize: 16,
          display: "flex",
          alignItems: "center",
          gap: "6px",
          padding: "6px 10px",
          borderRadius: "6px",
          transition: "all 0.3s ease",
        }}
      >
        <HiDocumentReport /> Business Reports
      </NavLink>
    ),
  },
];

const AdminLayout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((store) => store.auth.user);

  const handleLogout = () => {
    dispatch(logout());
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
  const [menuVisible, setMenuVisible] = useState(false);

  const menuItems: MenuProps["items"] = [];

  const userMenu = (
    <Menu>
      <Menu.Item key="Profile">
        <NavLink to="/user/profile">Profile</NavLink>
      </Menu.Item>
      <Menu.Item key="Profile">
        <NavLink to="/user/profile">{user?.name || "Name"}</NavLink>
      </Menu.Item>
      <Menu.Item key="Profile">
        <NavLink to="/user/profile">{user?.email || "arfin@gmail.com"}</NavLink>
      </Menu.Item>

      <Menu.Item key="Logout" onClick={handleLogout}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout style={{ height: "90vh" }}>
      <Sider
        width={260} // Increased the width of the sidebar
        breakpoint="lg"
        collapsedWidth="0"
        style={{ position: "fixed", height: "100vh", overflow: "auto" }}
      >
        <div
          style={{
            color: "white",
            height: "4rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1rem",
          }}
        >
          <h1 style={{ margin: 0 }}>Admin side {user?.name}</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["Dashboard"]}
          items={items}
          style={{ marginTop: "10px" }}
        />
        <div
          style={{
            padding: "8px",
            position: "absolute",
            bottom: "10px",
            width: "100%",
          }}
        >
          <Button
            type="primary"
            danger
            onClick={handleLogout}
            style={{
              width: "100%",
              height: "38px",
              fontSize: "14px",
            }}
          >
            Logout
          </Button>
        </div>
      </Sider>
      <Layout style={{ marginLeft: 260 }}>
        {" "}
        {/* Sidebar width matches here */}
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
            Meeting Room
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
        <Content style={{ margin: "64px 16px 0" }}>
          <div style={{ padding: 24, minHeight: 360 }}>
            <Outlet />
          </div>
        </Content>
        <Divider style={{ margin: 0 }}>{new Date().getFullYear()}</Divider>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
