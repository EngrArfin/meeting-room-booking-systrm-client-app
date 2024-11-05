import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Card, Carousel, Col, Row } from "antd";
import { RootState } from "../../../redux/store"; // Adjust the import path as necessary

const RoomDetails: React.FC = () => {
  const room = useSelector((state: RootState) => state.room.selectedRoom);
  const navigate = useNavigate();

  if (!room) {
    // If no room is selected, redirect to the homepage or rooms list
    navigate("/");
    return null;
  }

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <Row gutter={16}>
        {/* Left side for images */}
        <Col xs={24} md={12}>
          <Carousel autoplay>
            {room.image && room.image.length > 0 ? (
              room.image.map((image: string, index: number) => (
                <div key={index}>
                  <img
                    alt={`Room Image ${index + 1}`}
                    src={image}
                    style={{
                      width: "100%",
                      height: "400px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              ))
            ) : (
              <div>
                <img
                  alt="No Room Image"
                  src="https://via.placeholder.com/800x400.png?text=No+Image+Available"
                  style={{ width: "100%", height: "400px", objectFit: "cover" }}
                />
              </div>
            )}
          </Carousel>
        </Col>

        {/* Right side for room details */}
        <Col xs={24} md={12}>
          <Card
            style={{ height: "100%", borderRadius: "10px", padding: "20px" }}
          >
            <h1 style={{ textAlign: "left", marginBottom: "10px" }}>
              {room.roomName}
            </h1>
            <p>
              <strong>Room No:</strong> {room.roomNo}
            </p>
            <p>
              <strong>Floor No:</strong> {room.floorNo}
            </p>
            <p>
              <strong>Capacity:</strong> {room.capacity} persons
            </p>
            <p>
              <strong>Price per Slot:</strong> {room.pricePerSlot} TK
            </p>
            <p>
              <strong>Amenities:</strong> {room.amenities.join(", ")}{" "}
              {/* Ensure amenities is an array */}
            </p>
            <div style={{ display: "flex" }}>
              <div>
                <Button
                  type="primary"
                  onClick={() => navigate(-1)}
                  style={{
                    backgroundColor: "#007bff",
                    borderColor: "#007bff",
                    width: "100%",
                    marginTop: "20px",
                  }}
                >
                  Back to Rooms
                </Button>
              </div>{" "}
              <br />
              <div>
                <Button
                  type="primary"
                  style={{
                    marginRight: 10,
                    backgroundColor: "#007bff",
                    borderColor: "#007bff",
                    width: "100%",
                    marginTop: "20px",
                  }}
                >
                  Book Now
                </Button>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default RoomDetails;
