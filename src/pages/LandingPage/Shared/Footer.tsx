import { Layout, Row, Col, Typography, Space } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import logo from "../../../assets/icons/logo.png";

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
        }}
      >
        <div style={{ maxWidth: "1600px", margin: "0 auto" }}>
          <Row gutter={[16, 16]}>
            <Col xs={28} sm={12} md={8}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div>
                  <img
                    style={{
                      height: "1.5rem",
                      width: "1.5rem",
                      marginRight: 10,
                    }}
                    src={logo}
                    alt=""
                  />
                </div>
                <div>
                  <Title
                    level={2}
                    style={{ color: "#fff", fontSize: "1.5rem" }}
                  >
                    Meeting Room Book
                  </Title>
                </div>
              </div>

              <Text style={{ color: "#d9d9d9", fontSize: "0.9rem" }}>
                The Meeting Room Booking System is the professionals meeting
                room booking plartform. every business man can Join our
                plartform to find the perfect meeting room service for your
                needs.
              </Text>
            </Col>

            <Col xs={24} sm={12} md={8}>
              <Title level={4} style={{ color: "#fff", fontSize: "1.1rem" }}>
                Quick Links
              </Title>
              <Space direction="vertical" size="middle">
                <Text style={{ color: "#d9d9d9", fontSize: "0.9rem" }}>
                  About Us
                </Text>
                <Text style={{ color: "#d9d9d9", fontSize: "0.9rem" }}>
                  Privacy Policy
                </Text>
                <Text style={{ color: "#d9d9d9", fontSize: "0.9rem" }}>
                  Terms of Service
                </Text>

                <Text style={{ color: "#d9d9d9", fontSize: "0.9rem" }}>
                  Contact
                </Text>
              </Space>
            </Col>

            <Col xs={24} sm={12} md={8}>
              <Title level={4} style={{ color: "#fff", fontSize: "1.1rem" }}>
                Follow Us
              </Title>
              <div>
                <p style={{ fontSize: "0.9rem" }}>
                  Email : arfin.cse.green.edu.bd@gmail.com{" "}
                </p>
                <p style={{ fontSize: "0.9rem" }}>Phone number : 01981397907</p>
                <p style={{ fontSize: "0.9rem" }}>
                  Office address : Shawrapara, Mirpur-10, Dhaka-1206
                </p>
              </div>
              <Space size="large" style={{ margin: 10 }}>
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
                  fontSize: "0.8rem",
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
