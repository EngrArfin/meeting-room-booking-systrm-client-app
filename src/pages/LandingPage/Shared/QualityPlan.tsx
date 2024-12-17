import { Row, Col, Card, Typography, Button } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

const plans = [
  {
    id: 1,
    title: "Basic Plan",
    price: "৳500 / day",
    headerColor: "linear-gradient(to bottom, #000000, #333333)", // Black gradient for header
    buttonColor: "#2980b9",
    borderTopColor: "#ff5a5a",
    features: [
      { text: "1 meeting room booking per day", available: true },
      { text: "Standard room amenities", available: true },
      { text: "Basic support", available: true },
      { text: "Limited booking slots", available: false },
      { text: "No priority booking", available: false },
    ],
  },
  {
    id: 2,
    title: "Standard Plan",
    price: "৳1000 / day",
    headerColor: "linear-gradient(to bottom, #000000, #333333)", // Black gradient for header
    buttonColor: "#2980b9",
    borderTopColor: "#ff9800",
    features: [
      { text: "1 meeting room booking per day", available: true },
      { text: "Premium room amenities", available: true },
      { text: "Priority support", available: true },
      { text: "Flexible booking slots", available: true },
      { text: "Access to meeting room upgrades", available: false },
    ],
  },
  {
    id: 3,
    title: "Premium Plan",
    price: "৳2000 / day",
    headerColor: "linear-gradient(to bottom, #000000, #333333)", // Black gradient for header
    buttonColor: "#2980b9",
    borderTopColor: "#ff9800",
    features: [
      { text: "Unlimited room bookings a day", available: true },
      { text: "Premium room advanced tech", available: true },
      { text: "24/7 priority support", available: true },
      { text: "Flexible and priority booking slots", available: true },
      { text: "Free meeting room upgrades", available: true },
    ],
  },
];

const QualityPlan = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/meeting-room");
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    const target = e.target as HTMLButtonElement;
    target.style.backgroundColor = "#2980b9";
    target.style.borderColor = "#2980b9";
  };

  const handleMouseLeave = (
    e: React.MouseEvent<HTMLElement>,
    buttonColor: string
  ) => {
    const target = e.target as HTMLButtonElement;
    target.style.backgroundColor = buttonColor;
    target.style.borderColor = buttonColor;
  };

  return (
    <div style={{ padding: "60px 20px", backgroundColor: "#f8f9fa" }}>
      {/* Section Title */}
      <Title level={2} style={{ textAlign: "center", marginBottom: "40px" }}>
        Room Quality Plans
      </Title>

      <Row gutter={[32, 32]} justify="center">
        {plans.map((plan) => (
          <Col xs={24} sm={12} md={8} key={plan.id}>
            <Card
              bordered={false}
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                textAlign: "center",
                boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
                borderTop: `5px solid ${plan.borderTopColor}`, // Red or yellow border at the top
              }}
            >
              {/* Header Section */}
              <div
                style={{
                  background: plan.headerColor,
                  padding: "30px 0",
                  color: "#fff",
                  fontWeight: "600",
                }}
              >
                <Title
                  level={3}
                  style={{ margin: 0, color: "#fff", fontSize: "24px" }}
                >
                  {plan.title}
                </Title>
                <Title
                  level={2}
                  style={{
                    margin: "10px 0 0",
                    color: "#fff",
                    fontSize: "28px",
                  }}
                >
                  {plan.price}
                </Title>
              </div>

              {/* Features Section */}
              <div style={{ padding: "20px", marginTop: "10px" }}>
                <ul
                  style={{
                    listStyleType: "none",
                    padding: 0,
                    margin: "20px 0",
                    textAlign: "left",
                  }}
                >
                  {plan.features.map((feature, index) => (
                    <li
                      key={index}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "10px",
                        fontSize: "16px",
                        color: feature.available ? "#333" : "#aaa",
                      }}
                    >
                      {feature.available ? (
                        <CheckCircleOutlined
                          style={{ color: "#28a745", marginRight: "8px" }}
                        />
                      ) : (
                        <CloseCircleOutlined
                          style={{ color: "#e74c3c", marginRight: "8px" }}
                        />
                      )}
                      {feature.text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Button */}
              <Button
                onClick={handleBookNow}
                type="primary"
                size="large"
                style={{
                  backgroundColor: "#2980b9",
                  borderColor: "#2980b9",
                  width: "100%",
                  fontWeight: "500",
                  padding: "12px 0",
                  fontSize: "16px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => handleMouseEnter(e)}
                onMouseLeave={(e) => handleMouseLeave(e, "#2980b9")}
              >
                SELECT
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default QualityPlan;
