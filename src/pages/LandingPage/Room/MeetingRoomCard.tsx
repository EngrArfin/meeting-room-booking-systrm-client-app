// MeetingRoomCard.tsx
import { Button, Card, Row, Col } from "antd";
import { IRoom } from "../../../styles"; // Ensure IRoom is properly typed
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setRoom } from "../../../redux/features/roomSlice";

const { Meta } = Card;

const MeetingRoomCard: React.FC<{ room: IRoom }> = ({ room }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    dispatch(setRoom(room));
    navigate("/room-details");
  };

  return (
    <div
      style={{
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
                src={room.image[0]}
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
            <div style={{ marginTop: "10px", color: "#000000" }}>
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
                backgroundColor: "#0077B6",
                borderColor: "#0077B6",
              }}
            >
              Room Details
            </Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default MeetingRoomCard;
