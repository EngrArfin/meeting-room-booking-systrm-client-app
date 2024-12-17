import { Card, Typography, Row, Col, Button } from "antd";
import {
  CalendarOutlined,
  ClockCircleOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const ServiceAdvertisement = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/meeting-room");
  };

  return (
    <div style={{ padding: "20px" }}>
      <Title level={2} style={{ textAlign: "center", fontWeight: "600" }}>
        Room Category
      </Title>

      <div style={{ marginTop: "20px" }}>
        <Row gutter={[16, 16]} justify="center">
          {/* Boardroom */}
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card
              title="Boardroom"
              bordered={false}
              style={{
                background: "#f0f2f5", // Updated background color for the card
                borderRadius: "10px",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                color: "#000", // Text color updated to black for better contrast
              }}
              hoverable
              actions={[
                <CalendarOutlined key="calendar" />,
                <ClockCircleOutlined key="clock" />,
                <UserOutlined key="user" />,
              ]}
            >
              <Text style={{ fontSize: "14px" }}>
                Available for meetings from 9 AM to 6 PM. Capacity: 12 people.
              </Text>
              <div style={{ marginTop: "20px", textAlign: "center" }}>
                <Button
                  onClick={handleBookNow}
                  type="primary"
                  size="large"
                  style={{
                    width: "100%",
                    backgroundColor: "#0077B6", // Keep the original button color
                    borderColor: "#0077B6", // Matching border color
                  }}
                >
                  Book Now
                </Button>
              </div>
            </Card>
          </Col>

          {/* Conference Room */}
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card
              title="Conference Room"
              bordered={false}
              style={{
                background: "#f0f2f5", // Same background color for consistency
                borderRadius: "10px",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                color: "#000", // Black text color for contrast
              }}
              hoverable
              actions={[
                <CalendarOutlined key="calendar" />,
                <ClockCircleOutlined key="clock" />,
                <UserOutlined key="user" />,
              ]}
            >
              <Text style={{ fontSize: "14px" }}>
                Available for meetings from 9 AM to 5 PM. Capacity: 8 people.
              </Text>
              <div style={{ marginTop: "20px", textAlign: "center" }}>
                <Button
                  onClick={handleBookNow}
                  type="primary"
                  size="large"
                  style={{
                    width: "100%",
                    backgroundColor: "#0077B6",
                    borderColor: "#0077B6",
                  }}
                >
                  Book Now
                </Button>
              </div>
            </Card>
          </Col>

          {/* Team Room */}
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card
              title="Team Room"
              bordered={false}
              style={{
                background: "#f0f2f5", // Same background color
                borderRadius: "10px",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                color: "#000",
              }}
              hoverable
              actions={[
                <CalendarOutlined key="calendar" />,
                <ClockCircleOutlined key="clock" />,
                <UserOutlined key="user" />,
              ]}
            >
              <Text style={{ fontSize: "14px" }}>
                Available for meetings from 10 AM to 7 PM. Capacity: 6 people.
              </Text>
              <div style={{ marginTop: "20px", textAlign: "center" }}>
                <Button
                  onClick={handleBookNow}
                  type="primary"
                  size="large"
                  style={{
                    width: "100%",
                    backgroundColor: "#0077B6",
                    borderColor: "#0077B6",
                  }}
                >
                  Book Now
                </Button>
              </div>
            </Card>
          </Col>

          {/* Workshop Room */}
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card
              title="Workshop Room"
              bordered={false}
              style={{
                background: "#f0f2f5", // Updated background color
                borderRadius: "10px",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                color: "#000",
              }}
              hoverable
              actions={[
                <CalendarOutlined key="calendar" />,
                <ClockCircleOutlined key="clock" />,
                <UserOutlined key="user" />,
              ]}
            >
              <Text style={{ fontSize: "14px" }}>
                Available for workshops from 8 AM to 6 PM. Capacity: 20 people.
              </Text>
              <div style={{ marginTop: "20px", textAlign: "center" }}>
                <Button
                  onClick={handleBookNow}
                  type="primary"
                  size="large"
                  style={{
                    width: "100%",
                    backgroundColor: "#0077B6",
                    borderColor: "#0077B6",
                  }}
                >
                  Book Now
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ServiceAdvertisement;
