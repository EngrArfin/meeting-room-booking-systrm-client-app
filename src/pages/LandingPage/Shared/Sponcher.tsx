import { Row, Col, Typography, Divider, Tooltip } from "antd";
import logo1 from "../../../assets/icons/logo1.png";
import logo2 from "../../../assets/icons/logo2.png";
import logo3 from "../../../assets/icons/logo3.png";
import logo4 from "../../../assets/icons/logo4.png";
import logo5 from "../../../assets/icons/logo5.png";
import logo6 from "../../../assets/icons/logo6.png";
import logo7 from "../../../assets/icons/logo7.png";
import logo8 from "../../../assets/icons/logo8.png";

const { Title, Paragraph } = Typography;

const Sponcher = () => {
  const sponsors = [
    {
      id: 1,
      logo: logo1,
      name: "Company A",
      description: "Global Technology Leader",
    },
    {
      id: 2,
      logo: logo2,
      name: "Company B",
      description: "Innovative Solutions Provider",
    },
    { id: 3, logo: logo3, name: "Company C", description: "Industry Pioneers" },
    {
      id: 4,
      logo: logo4,
      name: "Company D",
      description: "Sustainability Experts",
    },
    {
      id: 5,
      logo: logo5,
      name: "Company E",
      description: "Professional Services",
    },
    {
      id: 6,
      logo: logo6,
      name: "Company F",
      description: "Consulting & Strategy",
    },
    {
      id: 7,
      logo: logo7,
      name: "Company G",
      description: "Business Innovators",
    },
    {
      id: 8,
      logo: logo8,
      name: "Company H",
      description: "Tech-Driven Solutions",
    },
  ];

  return (
    <div className="p-8">
      <Title
        level={2}
        style={{
          textAlign: "center",
          fontWeight: "700",
          color: "#333",
        }}
      >
        Our Sponsors & Collaborators
      </Title>

      <Divider style={{ margin: "20px 0", borderColor: "#dcdcdc" }} />

      <Row gutter={[48, 48]}>
        {/* Left Side - Sponsor About Section */}
        <Col xs={24} md={12}>
          <Title
            level={3}
            style={{
              fontWeight: "600",
              color: "#444",
              marginBottom: "20px",
            }}
          >
            About Our Sponsors
          </Title>
          <Paragraph style={{ fontSize: "16px", color: "#666" }}>
            We collaborate with forward-thinking companies that drive
            innovation, sustainability, and impactful results across industries.
            Our sponsors play a vital role in supporting our mission and
            expanding opportunities for growth and success.
          </Paragraph>

          <div style={{ marginTop: "30px" }}>
            <a href="/contact" style={{ fontSize: "16px", color: "#1890ff" }}>
              Interested in partnering with us? Contact us today.
            </a>
          </div>
        </Col>

        {/* Right Side - Logos */}
        <Col xs={24} md={12}>
          <Row gutter={[16, 16]} justify="center">
            {sponsors.map((sponsor) => (
              <Col
                key={sponsor.id}
                xs={12}
                sm={8}
                lg={6}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Tooltip
                  title={`${sponsor.name}: ${sponsor.description}`}
                  placement="bottom"
                >
                  <div
                    style={{
                      width: "120px",
                      height: "120px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "50%",
                      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
                      backgroundColor: "#fff",
                      transition: "transform 0.3s ease",
                      padding: "10px",
                      cursor: "pointer",
                    }}
                    className="logo-container"
                  >
                    <img
                      src={sponsor.logo}
                      alt={`Sponsor ${sponsor.name}`}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: "50%",
                      }}
                    />
                  </div>
                </Tooltip>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Sponcher;
