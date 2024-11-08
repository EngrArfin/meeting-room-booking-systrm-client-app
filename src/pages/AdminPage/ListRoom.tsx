import React from "react";
import { Card, Col, Row, Button } from "antd";

interface Room {
  id: number;
  name: string;
  capacity: number;
  availability: string; // "Available", "Booked"
}

const rooms: Room[] = [
  { id: 1, name: "Room A", capacity: 10, availability: "Available" },
  { id: 2, name: "Room B", capacity: 15, availability: "Booked" },
  { id: 3, name: "Room C", capacity: 20, availability: "Available" },
  { id: 4, name: "Room D", capacity: 8, availability: "Booked" },
  { id: 5, name: "Room E", capacity: 12, availability: "Available" },
];

const ListRoom: React.FC = () => {
  return (
    <div>
      <h1>List of Meeting Rooms</h1>
      <Row gutter={16}>
        {rooms.map((room) => (
          <Col span={8} key={room.id}>
            <Card
              title={room.name}
              bordered={false}
              style={{
                marginBottom: "16px",
                backgroundColor:
                  room.availability === "Available" ? "#e7f7f1" : "#fbe9e7",
              }}
            >
              <p>Capacity: {room.capacity} people</p>
              <p>Status: {room.availability}</p>
              {room.availability === "Available" && (
                <Button type="primary">Book Room</Button>
              )}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ListRoom;
