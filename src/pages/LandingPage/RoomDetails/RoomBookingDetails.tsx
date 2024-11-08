import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Card, Carousel, Col, Row } from "antd";
import { RootState } from "../../../redux/store";

const RoomBookingDetails: React.FC = () => {
  const navigate = useNavigate();
  const room = useSelector((state: RootState) => state.room.selectedRoom); // Assuming room is stored here

  const handleBookNow = () => {
    if (room) {
      navigate("/booking");
    } else {
      navigate("/"); // Redirect to home page if no room is selected
    }
  };

  if (!room) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Room details not found. Redirecting to home page...</h2>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
      <Row gutter={16}>
        <Col xs={24} md={12}>
          <Carousel autoplay>
            {room.image && room.image.length > 0 ? (
              room.image.map((image, index) => (
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

        <Col xs={24} md={12}>
          <Card
            style={{ height: "100%", borderRadius: "10px", padding: "20px" }}
          >
            <h1>{room.roomName}</h1>
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
              <strong>Amenities:</strong> {room.amenities.join(", ")}
            </p>

            <div style={{ display: "flex", gap: "10px" }}>
              <Button
                type="primary"
                onClick={() => navigate(-1)}
                style={{
                  backgroundColor: "#007bff",
                  borderColor: "#007bff",
                  marginTop: "20px",
                }}
              >
                Back to Rooms
              </Button>
              <Button
                type="primary"
                onClick={handleBookNow}
                style={{
                  backgroundColor: "#007bff",
                  borderColor: "#007bff",
                  marginTop: "20px",
                }}
              >
                Book Now
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default RoomBookingDetails;
