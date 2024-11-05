import { Button, Card, Row, Col } from "antd";
import { IRoom } from "../../../styles"; // Ensure this has the correct properties
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setRoom } from "../../../redux/features/roomSlice.";

const { Meta } = Card;

const MeetingRoomCard: React.FC<{ room: IRoom }> = ({ room }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    dispatch(setRoom(room)); // Set the selected room in Redux
    navigate("/room-details"); // Navigate to the Details page
  };

  return (
    <div
      style={{
        background: "#000033",
        color: "#ffffff",
        borderRadius: "8px",
        padding: "10px",
      }}
    >
      <Row gutter={[16, 16]} justify="center">
        <Col>
          <Card
            hoverable
            style={{
              width: "110%",
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            }}
            cover={
              <img
                alt="Room"
                src={room.image}
                style={{
                  height: "190px",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            }
          >
            <Meta
              title={room.roomName}
              style={{ fontWeight: "bold", color: "#444" }}
            />
            <div style={{ marginTop: "10px", color: "#666" }}>
              <p style={{ margin: "5px 0" }}>Capacity: {room.capacity}</p>
              <p style={{ margin: "5px 0" }}>
                Price: {room.pricePerSlot} TK (1-Slot)
              </p>
            </div>
            <Button
              onClick={handleDetailsClick}
              type="primary"
              style={{
                width: "100%",
                background: "#ffd700",
                color: "#000033",
                border: "none",
                marginTop: "15px",
                borderRadius: "5px",
                fontWeight: "bold",
              }}
            >
              Details
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default MeetingRoomCard;
