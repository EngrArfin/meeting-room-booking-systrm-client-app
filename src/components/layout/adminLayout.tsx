import { Layout, Menu, MenuProps } from "antd";

/* import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { createElement } from "react"; */

const { Header, Content, Footer, Sider } = Layout;

const items: MenuProps["items"] = [
  /* {
    key: "Dashboard",
    label: <NavLink to="/admin/dashboard">User Dashboard</NavLink>,
  }, */
  {
    key: "4",
    label: "User Management",
    children: [
      {
        key: "5",
        label: "Dashboard",
      },
      {
        key: "6",
        label: "Profile",
      },
      {
        key: "7",
        label: "User",
        children: [
          {
            key: "8",
            label: "Dashboard",
          },
          {
            key: "9",
            label: "Profile",
          },
        ],
      },
    ],
  },
];

const adminLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div
          style={{
            color: "white",
            height: "4rem",
            display: "flex",
            justifyContent: "center",
            justifyItems: "center",
          }}
        >
          <h1 style={{ height: "100" }}> Admin Mechanical Keyboard </h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <h2>The Main Content Here </h2>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default adminLayout;
