import React from "react";
import { Card, Col, Row, Button, Tag } from "antd";
import { Link } from "react-router-dom";

interface Room {
  id: number;
  name: string;
  capacity: number;
  availability: string; // "Available", "Booked"
  category: string; // Meeting, Conference, Event
  description: string;
}

const rooms: Room[] = [
  {
    id: 1,
    name: "Room A",
    capacity: 10,
    availability: "Available",
    category: "Meeting",
    description: "Ideal for small meetings and brainstorming sessions.",
  },
  {
    id: 2,
    name: "Room B",
    capacity: 15,
    availability: "Booked",
    category: "Conference",
    description: "Perfect for larger meetings and conferences.",
  },
  {
    id: 3,
    name: "Room C",
    capacity: 20,
    availability: "Available",
    category: "Event",
    description: "Spacious and suitable for events and workshops.",
  },
  {
    id: 4,
    name: "Room D",
    capacity: 8,
    availability: "Booked",
    category: "Meeting",
    description: "A cozy room for intimate discussions.",
  },
  {
    id: 5,
    name: "Room E",
    capacity: 12,
    availability: "Available",
    category: "Event",
    description: "Versatile room for events and seminars.",
  },
];

const ListRoom: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Available Meeting Rooms</h1>
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
              cover={
                <img
                  alt={room.name}
                  src={`https://via.placeholder.com/500x300?text=${room.name}`}
                />
              }
            >
              <p>
                <strong>Capacity:</strong> {room.capacity} people
              </p>
              <p>
                <strong>Category:</strong> {room.category}
              </p>
              <p>
                <strong>Description:</strong> {room.description}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                <Tag
                  color={room.availability === "Available" ? "green" : "red"}
                >
                  {room.availability}
                </Tag>
              </p>
              {room.availability === "Available" ? (
                <Link to={`/book-room/${room.id}`}>
                  <Button type="primary">Book Room</Button>
                </Link>
              ) : (
                <Button type="default" disabled>
                  Room Booked
                </Button>
              )}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ListRoom;
