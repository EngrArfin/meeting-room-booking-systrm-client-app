// RoomData.tsx
import { Row, Col, Spin, Typography } from "antd";
import { useGetRoomsQuery } from "../../../redux/api/api"; // Ensure this is the correct API query hook
import MeetingRoomCard from "./MeetingRoomCard"; // Import the MeetingRoomCard component
import { IRoom } from "../../../styles";
import NavBar from "../Shared/NavBar";

const RoomData = () => {
  const { data, isLoading, error } = useGetRoomsQuery({});
  console.log(data);
  // Handle loading state
  if (isLoading) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <Spin size="large" tip="Loading Rooms..." />
      </div>
    );
  }

  // Handle error state
  if (error) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <Typography.Text type="danger">Failed to load rooms!</Typography.Text>
      </div>
    );
  }

  // Ensure data exists before destructuring
  if (!data || !data.data) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <Typography.Text type="danger">Error loading rooms!</Typography.Text>
      </div>
    );
  }

  const rooms = data.data;
  console.log(rooms);

  return (
    <div>
      <NavBar />
      <div
        style={{
          background: "#FAFAFA",
          color: "#ffffff",
        }}
      >
        <Typography.Title
          level={2}
          style={{
            color: "#333333",
            fontStyle: "normal",
            fontWeight: "600",
            marginBottom: "24px",
            marginTop: "24px",
            letterSpacing: "0.5px",
            textAlign: "center",
          }}
        >
          Room Booking
        </Typography.Title>
        <div>
          <Row gutter={[24, 24]} justify="center">
            {rooms.map((room: IRoom) => (
              <Col xs={24} sm={12} md={8} lg={6} key={room._id}>
                <MeetingRoomCard room={room} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default RoomData;
