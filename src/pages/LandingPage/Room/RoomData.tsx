import { Row, Col, Spin, Typography } from "antd";
import { useGetRoomsQuery } from "../../../redux/api/api";
import MeetingRoomCard from "./MeetingRoomCard";
import { IRoom } from "../../../styles";

const RoomData = () => {
  const { data, isLoading } = useGetRoomsQuery(undefined);

  if (isLoading) {
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <Spin size="large" tip="Loading Rooms..." />
      </div>
    );
  }

  const { data: rooms } = data;

  return (
    <div>
      <Typography.Title
        level={2}
        style={{
          color: "yellow",
          fontStyle: "italic",
          fontSize: "24px",
          paddingLeft: "10px",
          marginTop: "10px",
          marginBottom: "20px",
          display: "block",
        }}
      >
        Meeting Room
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
  );
};

export default RoomData;
