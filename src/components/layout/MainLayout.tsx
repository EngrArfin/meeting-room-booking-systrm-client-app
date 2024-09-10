import { Breadcrumb, Layout, Menu } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";

const items = new Array(15).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));

/* const items: MenuProps["items"] = [
    {
      key: "Dashboard",
      label: <NavLink to="/admin/dashboard">Dashboard</NavLink>,
    },
    {
      key: "User Management",
      label: "User Management",
      children: [
        {
          key: "Create Admin",
          label: <NavLink to="/admin/create-admin">Create Admin</NavLink>,
        },
        {
          key: "Create Faculty",
          label: <NavLink to="/admin/create-faculty">Create Faculty</NavLink>,
        },
        {
          key: "Create Student",
          label: <NavLink to="/admin/create-student">Create Student</NavLink>,
        },
      ],
    },
  ]; */

const MainLayout = () => {
  return (
    <Layout>
      <Header style={{ display: "flex", alignItems: "center" }}>
        <div style={{ color: "white", fontSize: 22, font: "" }}>
          Welcome to Meeting Room Booking System
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: "0 48px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div
          style={{
            minHeight: 280,
            padding: 24,
          }}
        >
          Content
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default MainLayout;
