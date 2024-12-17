import { Row, Col, Card, Typography } from "antd";
import aboutBacground from "../../assets/images/room1.jpg";
import NavBar from "./Shared/NavBar";

const About = () => {
  return (
    <div>
      <NavBar />
      <div
        style={{
          backgroundImage: `url(${aboutBacground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
          padding: "20px",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            padding: "40px",
            borderRadius: "8px",
            maxWidth: "800px",
          }}
        >
          <Typography.Title
            level={1}
            style={{ color: "#fff", fontSize: "48px" }}
          >
            About Us
          </Typography.Title>
          <Typography.Paragraph style={{ color: "#ddd", fontSize: "18px" }}>
            We are dedicated to providing the best room booking services,
            ensuring a seamless and secure experience for our users. Our
            platform offers a wide range of features that cater to different
            customer needs, making the process simple, efficient, and
            stress-free.
          </Typography.Paragraph>
        </div>

        <div
          style={{
            marginTop: "40px",
            padding: "20px",
            width: "100%",
          }}
        >
          <Typography.Title
            level={2}
            style={{ color: "#fff", marginBottom: "20px" }}
          >
            Our Services
          </Typography.Title>
          <Row gutter={[16, 16]} justify="center">
            <Col xs={24} sm={12} md={8}>
              <Card
                bordered={false}
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  color: "#fff",
                  textAlign: "center",
                  height: "100%",
                }}
              >
                <Typography.Title level={4} style={{ color: "#fff" }}>
                  Seamless Booking Experience
                </Typography.Title>
                <Typography.Paragraph style={{ color: "#ddd" }}>
                  Book your rooms quickly and easily with our intuitive
                  platform.
                </Typography.Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card
                bordered={false}
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  color: "#fff",
                  textAlign: "center",
                  height: "100%",
                }}
              >
                <Typography.Title level={4} style={{ color: "#fff" }}>
                  24/7 Customer Support
                </Typography.Title>
                <Typography.Paragraph style={{ color: "#ddd" }}>
                  Our dedicated team is always here to help, no matter the time.
                </Typography.Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card
                bordered={false}
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  color: "#fff",
                  textAlign: "center",
                  height: "100%",
                }}
              >
                <Typography.Title level={4} style={{ color: "#fff" }}>
                  Secure Transactions
                </Typography.Title>
                <Typography.Paragraph style={{ color: "#ddd" }}>
                  Your payments are protected with our top-notch security
                  systems.
                </Typography.Paragraph>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default About;
