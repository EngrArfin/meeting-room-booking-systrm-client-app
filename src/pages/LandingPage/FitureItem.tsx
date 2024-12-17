import { Card, Row, Col, Typography } from "antd";
import photo1 from "../../assets/images/card1.jpg";
import photo2 from "../../assets/images/card2.jpg";
import photo3 from "../../assets/images/card3.jpg";
import photo4 from "../../assets/images/card4.jpg";
import photo5 from "../../assets/images/card5.jpg";
import photo6 from "../../assets/images/card6.jpg";
import photo7 from "../../assets/images/card7.jpg";
import photo8 from "../../assets/images/card8.jpg";

const FitureItem = () => {
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
        Feature Room
      </Typography.Title>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card>
            <img style={{ height: 190, width: "100%" }} src={photo1} alt="" />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card>
            <img style={{ height: 190, width: "100%" }} src={photo2} alt="" />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card>
            <img style={{ height: 190, width: "100%" }} src={photo3} alt="" />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card>
            <img style={{ height: 190, width: "100%" }} src={photo4} alt="" />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card>
            <img style={{ height: 190, width: "100%" }} src={photo5} alt="" />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card>
            <img style={{ height: 190, width: "100%" }} src={photo6} alt="" />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card>
            <img style={{ height: 190, width: "100%" }} src={photo7} alt="" />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card>
            <img style={{ height: 190, width: "100%" }} src={photo8} alt="" />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default FitureItem;
