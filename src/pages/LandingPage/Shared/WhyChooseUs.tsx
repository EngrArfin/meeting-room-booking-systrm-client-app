import { Card, Col, Row, Typography } from "antd";
import {
  CheckCircleOutlined,
  LockOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";

const WhyChooseUs = () => {
  return (
    <div style={{ backgroundColor: "#f4f4f4", padding: "50px 20px" }}>
      <Typography.Title
        level={2}
        style={{
          color: "#1a1a1a",
          fontWeight: "bold",
          marginBottom: "40px",
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        Why Choose Us?
      </Typography.Title>
      <Row gutter={[24, 24]} justify="center">
        {/* Card 1 */}
        <Col xs={24} sm={12} md={8}>
          <Card
            bordered={false}
            style={{
              background: "#ffffff",
              borderRadius: "12px",
              boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              height: "100%",
            }}
          >
            <CheckCircleOutlined
              style={{
                fontSize: "50px",
                color: "#00796b",
                marginBottom: "16px",
              }}
            />
            <Typography.Title
              level={4}
              style={{
                color: "#004d40",
                fontWeight: "600",
                marginBottom: "12px",
              }}
            >
              Seamless Booking Experience
            </Typography.Title>
            <Typography.Paragraph
              style={{
                color: "#555555",
                fontSize: "14px",
                lineHeight: "1.8",
              }}
            >
              Enjoy a hassle-free booking process with a user-friendly
              interface.
            </Typography.Paragraph>
          </Card>
        </Col>
        {/* Card 2 */}
        <Col xs={24} sm={12} md={8}>
          <Card
            bordered={false}
            style={{
              background: "#ffffff", // White background for a formal look
              borderRadius: "12px",
              boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              height: "100%",
            }}
          >
            <LockOutlined
              style={{
                fontSize: "50px",
                color: "#d84315",
                marginBottom: "16px",
              }}
            />
            <Typography.Title
              level={4}
              style={{
                color: "#bf360c",
                fontWeight: "600",
                marginBottom: "12px",
              }}
            >
              Secure Transactions
            </Typography.Title>
            <Typography.Paragraph
              style={{
                color: "#555555",
                fontSize: "14px",
                lineHeight: "1.8",
              }}
            >
              We ensure your payments are safe with end-to-end encryption.
            </Typography.Paragraph>
          </Card>
        </Col>
        {/* Card 3 */}
        <Col xs={24} sm={12} md={8}>
          <Card
            bordered={false}
            style={{
              background: "#ffffff", // White background for a formal look
              borderRadius: "12px",
              boxShadow: "0 6px 15px rgba(0, 0, 0, 0.1)",
              textAlign: "center",
              height: "100%",
            }}
          >
            <DollarCircleOutlined
              style={{
                fontSize: "50px",
                color: "#388e3c",
                marginBottom: "16px",
              }}
            />
            <Typography.Title
              level={4}
              style={{
                color: "#2e7d32",
                fontWeight: "600",
                marginBottom: "12px",
              }}
            >
              100% Money Back Guarantee
            </Typography.Title>
            <Typography.Paragraph
              style={{
                color: "#555555",
                fontSize: "14px",
                lineHeight: "1.8",
              }}
            >
              We promise a 100% money-back guarantee with friendly support as
              part of our policy.
            </Typography.Paragraph>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default WhyChooseUs;
