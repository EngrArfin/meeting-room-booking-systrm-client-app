import { ShoppingCartOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, MenuProps } from "antd";
import FitureItem from "../../pages/LandingPage/FitureItem";
const { Header, Content, Footer } = Layout;

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "Home",
  },
  {
    key: "5",
    label: "Product Management",
  },
];

const LandingPageLayout = () => {
  return (
    <div>
      <Layout
        style={{
          height: "100vh",
          borderRadius: "8px",
          background: "#000033",
          color: "#ffffff",
        }}

        /* style={{
          height: "100vh",
          borderRadius: "8px",
          background:
            "linear-gradient(50deg, #2e004f, #000033, #2e004f)",
          color: "#ffffff",
        }} */
      >
        <Header style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              color: "white",
              height: "4rem",
              display: "flex",
              justifyContent: "center",
              justifyItems: "center",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <h1 style={{ height: "100" }}>Meeting Room Booking System </h1>
              </div>
            </div>
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
          <Breadcrumb
            style={{
              margin: "16px 0",
              justifyContent: "right",
              alignItems: "right",
              color: "white",
            }}
          >
            <Breadcrumb.Item>01952487468</Breadcrumb.Item>
            <Breadcrumb.Item>Login</Breadcrumb.Item>
          </Breadcrumb>

          <div
            style={{
              minHeight: 280,
              padding: 24,
              color: "white",
            }}
          >
            Main Header Content
            <FitureItem></FitureItem>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
            borderRadius: "8px",
            background: "linear-gradient(90deg, #2e004f, #000033, #2e004f)",
            color: "#ffffff",
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </div>
  );
};

export default LandingPageLayout;