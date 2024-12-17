import { Card, Col, Row, Typography } from "antd";
import {
  CalendarOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

const HowItWorks = () => {
  return (
    <div>
      <Typography.Title
        level={2}
        style={{
          color: "#333333",
          fontStyle: "normal",
          fontWeight: "600",
          marginBottom: "24px",
          marginTop: "24px",
          letterSpacing: "0.5px",
          textAlign: "center",
        }}
      >
        How It Works
      </Typography.Title>

      <div style={{ padding: "20px", textAlign: "center" }}>
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={8}>
            <Card
              bordered={false}
              style={{ background: "#FFFFFF", height: "100%" }}
            >
              <CalendarOutlined
                style={{ fontSize: "40px", color: "#ff9800" }}
              />
              <Typography.Title level={4}>Select a Room</Typography.Title>
              <Typography.Paragraph>
                Browse available rooms and choose the perfect one for your
                needs.
              </Typography.Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card
              bordered={false}
              style={{ background: "#FFFFFF", height: "100%" }}
            >
              <ClockCircleOutlined
                style={{ fontSize: "40px", color: "#00acc1" }}
              />
              <Typography.Title level={4}>Choose Date & Time</Typography.Title>
              <Typography.Paragraph>
                Pick your preferred date and time for booking.
              </Typography.Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={8}>
            <Card
              bordered={false}
              style={{ background: "#FFFFFF", height: "100%" }}
            >
              <CheckCircleOutlined
                style={{ fontSize: "40px", color: "#66bb6a" }}
              />
              <Typography.Title level={4}>Confirm Booking</Typography.Title>
              <Typography.Paragraph>
                Finalize your booking with just a few clicks.
              </Typography.Paragraph>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HowItWorks;
