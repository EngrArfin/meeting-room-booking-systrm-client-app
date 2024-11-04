import { Button, Card, Typography, Row, Col } from "antd";

const { Meta } = Card;

import room1 from "../../assets/images/room1.jpg";
import room2 from "../../assets/images/room2.jpg";
import room3 from "../../assets/images/room3.jpg";
import room4 from "../../assets/images/room4.jpg";
import room5 from "../../assets/images/room5.jpg";
import room6 from "../../assets/images/room6.jpg";
import room7 from "../../assets/images/room7.jpg";
import room8 from "../../assets/images/room8.jpg";

const MeetingRoom = () => {
  const roomData = [
    { title: "Business Premium Room", img: room1 },
    { title: "Business Premium Room", img: room2 },
    { title: "Business Premium Room", img: room3 },
    { title: "Business Premium Room", img: room4 },
    { title: "Business Premium Room", img: room5 },
    { title: "Business Premium Room", img: room6 },
    { title: "Business Premium Room", img: room7 },
    { title: "Business Premium Room", img: room8 },
  ];

  return (
    <div
      style={{
        background: "#000033",
        color: "#ffffff",
      }}
    >
      <Typography.Title
        style={{
          color: "yellow",
          fontStyle: "italic",
          fontSize: "24px",
          paddingLeft: "10px",
          marginTop: "10px",
          margin: "20px",
        }}
      >
        Meeting Room
      </Typography.Title>
      <Row gutter={[16, 16]} justify="center">
        {roomData.map((room, index) => (
          <Col
            xs={24} // 100% width on extra small screens
            sm={12} // 50% width on small screens
            md={8} // 33.33% width on medium screens
            lg={6} // 25% width on large screens
            key={index}
          >
            <Card
              hoverable
              style={{ width: "100%" }} // Ensure the card uses full width of the column
              cover={
                <img
                  alt="example"
                  src={room.img}
                  style={{ height: 190, width: "100%" }}
                />
              }
            >
              <Meta title={room.title} description="" />
              <p style={{ marginTop: 5 }}>Capacity: 20</p>
              <p style={{ marginTop: 5 }}>Price: 10,000 TK (1-Slot)</p>
              <Button
                style={{
                  border: 2,
                  justifyContent: "center",
                  alignItems: "center",
                  background: "yellow",
                  marginTop: 10,
                  marginLeft: 70,
                }}
              >
                See Details
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MeetingRoom;
