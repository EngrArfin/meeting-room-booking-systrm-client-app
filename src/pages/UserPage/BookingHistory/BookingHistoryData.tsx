import { Row, Col } from "antd";
import { useGetUserBookingsQuery } from "../../../redux/api/api";
import { UserBooking, Room } from "../../../styles";
import BookingHistoryCard from "./BookingHistoryCard";

const BookingHistoryData: React.FC = () => {
  const { data: userBookings = [] } = useGetUserBookingsQuery(undefined);

  const groupedRooms = userBookings.reduce(
    (acc: Record<string, UserBooking[]>, userBooking: UserBooking) => {
      userBooking.rooms.forEach((room: Room) => {
        if (!acc[room.name]) {
          acc[room.name] = [];
        }
        acc[room.name].push(userBooking);
      });
      return acc;
    },
    {}
  );

  return (
    <div style={{ padding: "20px 50px", background: "#f5f5f5" }}>
      <h1
        style={{
          textAlign: "center",
          fontWeight: 700,
          fontSize: "36px",
          marginBottom: "30px",
        }}
      >
        Your Booking History
      </h1>

      {Object.keys(groupedRooms).map((roomType) => (
        <div key={roomType} style={{ marginBottom: "50px" }}>
          <Row gutter={[16, 24]}>
            {groupedRooms[roomType]
              .slice(0, 3)
              .map((userBooking: UserBooking, index: number) => (
                <Col
                  key={userBooking.id + index}
                  xs={24}
                  sm={24}
                  md={24}
                  lg={24}
                >
                  <BookingHistoryCard userBooking={userBooking} />
                </Col>
              ))}
          </Row>
        </div>
      ))}
    </div>
  );
};

export default BookingHistoryData;
