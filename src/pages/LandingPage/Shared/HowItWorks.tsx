import React from "react";
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
          color: "yellow",
          fontStyle: "italic",
          fontSize: "24px",
          paddingLeft: "10px",
          marginTop: "10px",
          marginBottom: "20px",
          display: "block",
        }}
      >
        How It Works
      </Typography.Title>
      <div style={{ padding: "20px", textAlign: "center" }}>
        {/* How It Works Section */}

        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} sm={8}>
            <Card
              bordered={false}
              style={{ background: "#fff3e0", height: "100%" }}
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
              style={{ background: "#e0f7fa", height: "100%" }}
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
              style={{ background: "#f1f8e9", height: "100%" }}
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
