import { Layout, Row, Col, Typography, Space } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  GithubOutlined,
} from "@ant-design/icons";
/* import logo from "../../assets/icons/logo.jpg";
 */
const { Footer } = Layout;
const { Text, Title } = Typography;

const Footers = () => {
  return (
    <div>
      <hr />
      <Footer
        style={{
          borderRadius: "8px",
          background: "#000033",
          color: "#ffffff",
          /* background:
          margin: 10,
            "linear-gradient(70deg, #2e004f, #00bfae, #2e004f, #00bfae)",
          color: "#ffffff", */
        }}
      >
        <div style={{ maxWidth: "1600px", margin: "0 auto" }}>
          <Row gutter={[16, 16]}>
            {/* Column 1: Logo or Company Info */}
            <Col xs={28} sm={12} md={8}>
              <div style={{ display: "flex" }}>
                {/* <div>
                  <img style={{ height: 60, width: 90 }} src={logo} alt="" />
                </div> */}
                <div>
                  <Title level={2} style={{ color: "#fff" }}>
                    Meeting Room Booking System
                  </Title>
                </div>
              </div>

              <Text style={{ color: "#d9d9d9" }}>
                The Meeting Room Booking System is the professionals meeting
                room booking plartform. every business man can Join our
                plartform to find the perfect meeting room service for your
                needs.
              </Text>
            </Col>

            {/* Column 2: Quick Links */}
            <Col xs={24} sm={12} md={8}>
              <Title level={4} style={{ color: "#fff" }}>
                Quick Links
              </Title>
              <Space direction="vertical" size="middle">
                <Text style={{ color: "#d9d9d9" }}>Home</Text>
                <Text style={{ color: "#d9d9d9" }}>Best Room</Text>
                <Text style={{ color: "#d9d9d9" }}>Service</Text>
                <Text style={{ color: "#d9d9d9" }}>About Us</Text>
                <Text style={{ color: "#d9d9d9" }}>Contact</Text>
              </Space>
            </Col>

            {/* Column 3: Social Media Links */}
            <Col xs={24} sm={12} md={8}>
              <Title level={4} style={{ color: "#fff" }}>
                Follow Us
              </Title>
              <Space size="large">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookOutlined
                    style={{ fontSize: "24px", color: "#d9d9d9" }}
                  />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TwitterOutlined
                    style={{ fontSize: "24px", color: "#d9d9d9" }}
                  />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramOutlined
                    style={{ fontSize: "24px", color: "#d9d9d9" }}
                  />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubOutlined
                    style={{ fontSize: "24px", color: "#d9d9d9" }}
                  />
                </a>
              </Space>
            </Col>
          </Row>

          <Row
            style={{
              marginTop: "40px",
              borderTop: "1px solid #333",
              paddingTop: "20px",
            }}
          >
            <Col xs={24}>
              <Text
                style={{
                  color: "#d9d9d9",
                  textAlign: "center",
                  display: "block",
                }}
              >
                Ant Design ©{new Date().getFullYear()} Created by Meeting Room
                Booking System
              </Text>
            </Col>
          </Row>
        </div>
      </Footer>
    </div>
  );
};

export default Footers;
