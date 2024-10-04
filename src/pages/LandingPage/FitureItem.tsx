import { Card, Divider, Row, Col } from "antd";
import photo1 from "../../assets/images/card1.jpg";
import photo2 from "../../assets/images/card2.jpg";
import photo3 from "../../assets/images/card3.jpg";
import photo4 from "../../assets/images/card4.jpg";
import photo5 from "../../assets/images/card5.jpg";
import photo6 from "../../assets/images/card6.jpg";
import photo7 from "../../assets/images/card7.jpg";
import photo8 from "../../assets/images/card8.jpg";
import photo9 from "../../assets/images/card9.jpg";
import photo10 from "../../assets/images/card10.jpg";
import photo11 from "../../assets/images/card11.jpg";
import photo12 from "../../assets/images/card12.jpg";

const FitureItem = () => {
  return (
    <div>
      <Divider style={{ borderColor: "#7cb305", color: "yellow" }}>
        Product Fiture
      </Divider>
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
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card>
            <img style={{ height: 190, width: "100%" }} src={photo9} alt="" />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card>
            <img style={{ height: 190, width: "100%" }} src={photo10} alt="" />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card>
            <img style={{ height: 190, width: "100%" }} src={photo11} alt="" />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6}>
          <Card>
            <img style={{ height: 190, width: "100%" }} src={photo12} alt="" />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default FitureItem;
