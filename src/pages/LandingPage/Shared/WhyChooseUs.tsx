import { Card, Col, Row, Typography } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

const WhyChooseUs = () => {
  return (
    <div>
      <Typography.Title
        level={2}
        style={{
          color: "yellow",
          fontStyle: "italic",
          fontSize: "24px",
          paddingLeft: "10px",
          marginTop: "10px",
          marginBottom: "20px",
          display: "block",
        }}
      >
        Why Choose Us?
      </Typography.Title>
      <div style={{ padding: "20px", textAlign: "center" }}>
        {/* Why Choose Us Section */}

        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={12} md={8}>
            <Card
              bordered={false}
              style={{ background: "#e3f2fd", height: "100%" }}
            >
              <CheckCircleOutlined
                style={{ fontSize: "40px", color: "#4caf50" }}
              />
              <Typography.Title level={4}>
                Seamless Booking Experience
              </Typography.Title>
              <Typography.Paragraph>
                Enjoy a hassle-free booking process with a user-friendly
                interface.
              </Typography.Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              bordered={false}
              style={{ background: "#f3e5f5", height: "100%" }}
            >
              <CheckCircleOutlined
                style={{ fontSize: "40px", color: "#4caf50" }}
              />
              <Typography.Title level={4}>Secure Transactions</Typography.Title>
              <Typography.Paragraph>
                We ensure your payments are safe with end-to-end encryption.
              </Typography.Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card
              bordered={false}
              style={{ background: "#e3f2fd", height: "100%" }}
            >
              <CheckCircleOutlined
                style={{ fontSize: "40px", color: "#4caf50" }}
              />
              <Typography.Title level={4}>
                Seamless Booking Experience
              </Typography.Title>
              <Typography.Paragraph>
                Enjoy a hassle-free booking process with a user-friendly
                interface.
              </Typography.Paragraph>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default WhyChooseUs;
