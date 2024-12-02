import React from "react";
import { Card, Col, Row, Button, Tag, Spin } from "antd";
import { Link } from "react-router-dom";
import { IRoom } from "../../styles";
import { useGetRoomsQuery } from "../../redux/api/api";

const ListRoom: React.FC = () => {
  const { data, isLoading } = useGetRoomsQuery(undefined);

  // Show loading spinner while data is being fetched
  if (isLoading) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <Spin size="large" tip="Loading Rooms..." />
      </div>
    );
  }

  const rooms: IRoom[] = data?.data || []; // Fallback to empty array if data is undefined.

  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin - Meeting Room Management</h1>
      <Row gutter={16}>
        {rooms.map((room: IRoom) => (
          <Col span={8} key={room._id}>
            <Card
              title={room.roomName}
              bordered={false}
              style={{
                marginBottom: "16px",
                backgroundColor:
                  room.availability === "Available" ? "#e7f7f1" : "#fbe9e7", // Green if available, red if unavailable
              }}
              cover={
                <img
                  alt={room.roomName}
                  height="200"
                  src={
                    Array.isArray(room.image) && room.image.length > 0
                      ? room.image[0] // Use the first image in the array
                      : "https://via.placeholder.com/300" // Fallback image
                  }
                />
              }
            >
              <p>
                <strong>Capacity:</strong> {room.capacity} people
              </p>
              <p>
                <strong>Category:</strong> Floor {room.floorNo}
              </p>
              <p>
                <strong>Price per Slot:</strong> ${room.pricePerSlot}
              </p>
              <p>
                <strong>Status:</strong>{" "}
                <Tag
                  color={room.availability === "Available" ? "green" : "red"}
                >
                  {room.availability}
                </Tag>
              </p>

              {/* Conditional button based on availability */}
              {room.availability === "Available" ? (
                <Link to={`/book-room/${room._id}`}>
                  <Button type="primary">Book Room</Button>
                </Link>
              ) : (
                <Button type="default" disabled>
                  Room Booked
                </Button>
              )}

              {/* Edit button for admin to modify room details */}
              <Link to={`/edit-room/${room._id}`}>
                <Button type="default" style={{ marginTop: "10px" }}>
                  Edit Room
                </Button>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ListRoom;
