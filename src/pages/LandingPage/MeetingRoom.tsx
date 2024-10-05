import { Button, Card, Typography } from "antd";

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
  return (
    <div>
      <Typography.Text
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
      </Typography.Text>
      <div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ margin: 10 }}>
            <Card
              hoverable
              style={{ width: 260 }}
              cover={
                <img
                  style={{ height: 190, width: "100%" }}
                  alt="example"
                  src={room1}
                />
              }
            >
              <Meta title="Business Primim Room" description="" />
              <p style={{ marginTop: 5 }}>Capacity: 20</p>
              <p style={{ marginTop: 5 }}>Price: 10,000 TK (1-Slot)</p>
              <Button
                style={{
                  border: 2,
                  justifyContent: "center",
                  alignItems: "center",
                  background: "yellow",
                  marginLeft: 50,
                  marginTop: 10,
                }}
              >
                See Details
              </Button>
            </Card>
          </div>
          <div style={{ margin: 10 }}>
            <Card
              hoverable
              style={{ width: 260 }}
              cover={
                <img
                  style={{ height: 190, width: "100%" }}
                  alt="example"
                  src={room2}
                />
              }
            >
              <Meta title="Business Primim Room" description="" />
              <p style={{ marginTop: 5 }}>Capacity: 20</p>
              <p style={{ marginTop: 5 }}>Price: 10,000 TK (1-Slot)</p>
              <Button
                style={{
                  border: 2,
                  justifyContent: "center",
                  alignItems: "center",
                  background: "yellow",
                  marginLeft: 50,
                  marginTop: 10,
                }}
              >
                See Details
              </Button>
            </Card>
          </div>

          <div style={{ margin: 10 }}>
            <Card
              hoverable
              style={{ width: 260 }}
              cover={
                <img
                  style={{ height: 190, width: "100%" }}
                  alt="example"
                  src={room3}
                />
              }
            >
              <Meta title="Business Primim Room" description="" />
              <p style={{ marginTop: 5 }}>Capacity: 20</p>
              <p style={{ marginTop: 5 }}>Price: 10,000 TK (1-Slot)</p>
              <Button
                style={{
                  border: 2,
                  justifyContent: "center",
                  alignItems: "center",
                  background: "yellow",
                  marginLeft: 50,
                  marginTop: 10,
                }}
              >
                See Details
              </Button>
            </Card>
          </div>

          <div style={{ margin: 10 }}>
            <Card
              hoverable
              style={{ width: 260 }}
              cover={
                <img
                  style={{ height: 190, width: "100%" }}
                  alt="example"
                  src={room4}
                />
              }
            >
              <Meta title="Business Primim Room" description="" />
              <p style={{ marginTop: 5 }}>Capacity: 20</p>
              <p style={{ marginTop: 5 }}>Price: 10,000 TK (1-Slot)</p>
              <Button
                style={{
                  border: 2,
                  justifyContent: "center",
                  alignItems: "center",
                  background: "yellow",
                  marginLeft: 50,
                  marginTop: 10,
                }}
              >
                See Details
              </Button>
            </Card>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ margin: 10 }}>
            <Card
              hoverable
              style={{ width: 260 }}
              cover={
                <img
                  style={{ height: 190, width: "100%" }}
                  alt="example"
                  src={room5}
                />
              }
            >
              <Meta title="Business Primim Room" description="" />
              <p style={{ marginTop: 5 }}>Capacity: 20</p>
              <p style={{ marginTop: 5 }}>Price: 10,000 TK (1-Slot)</p>
              <Button
                style={{
                  border: 2,
                  justifyContent: "center",
                  alignItems: "center",
                  background: "yellow",
                  marginLeft: 50,
                  marginTop: 10,
                }}
              >
                See Details
              </Button>
            </Card>
          </div>
          <div style={{ margin: 10 }}>
            <Card
              hoverable
              style={{ width: 260 }}
              cover={
                <img
                  style={{ height: 190, width: "100%" }}
                  alt="example"
                  src={room6}
                />
              }
            >
              <Meta title="Business Primim Room" description="" />
              <p style={{ marginTop: 5 }}>Capacity: 20</p>
              <p style={{ marginTop: 5 }}>Price: 10,000 TK (1-Slot)</p>
              <Button
                style={{
                  border: 2,
                  justifyContent: "center",
                  alignItems: "center",
                  background: "yellow",
                  marginLeft: 50,
                  marginTop: 10,
                }}
              >
                See Details
              </Button>
            </Card>
          </div>

          <div style={{ margin: 10 }}>
            <Card
              hoverable
              style={{ width: 260 }}
              cover={
                <img
                  style={{ height: 190, width: "100%" }}
                  alt="example"
                  src={room7}
                />
              }
            >
              <Meta title="Business Primim Room" description="" />
              <p style={{ marginTop: 5 }}>Capacity: 20</p>
              <p style={{ marginTop: 5 }}>Price: 10,000 TK (1-Slot)</p>
              <Button
                style={{
                  border: 2,
                  justifyContent: "center",
                  alignItems: "center",
                  background: "yellow",
                  marginLeft: 50,
                  marginTop: 10,
                }}
              >
                See Details
              </Button>
            </Card>
          </div>

          <div style={{ margin: 10 }}>
            <Card
              hoverable
              style={{ width: 260 }}
              cover={
                <img
                  style={{ height: 190, width: "100%" }}
                  alt="example"
                  src={room8}
                />
              }
            >
              <Meta title="Business Primim Room" description="" />
              <p style={{ marginTop: 5 }}>Capacity: 20</p>
              <p style={{ marginTop: 5 }}>Price: 10,000 TK (1-Slot)</p>
              <Button
                style={{
                  border: 2,
                  justifyContent: "center",
                  alignItems: "center",
                  background: "yellow",
                  marginLeft: 50,
                  marginTop: 10,
                }}
              >
                See Details
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingRoom;
