import React from "react";
import { Card, Button, Space } from "antd";
import { FaBed, FaCalendarAlt, FaClock } from "react-icons/fa";
import { UserBooking, Room } from "../../../styles";

interface BookingCardProps {
  userBooking: UserBooking;
}

const { Meta } = Card;

const BookingHistoryCard: React.FC<BookingCardProps> = ({ userBooking }) => {
  return (
    <Card
      hoverable
      style={{
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease-in-out",
        marginBottom: "24px",
      }}
    >
      <Meta
        title={`Booking Date: ${new Date(
          userBooking.date
        ).toLocaleDateString()}`}
        description={userBooking.status}
      />
      <div style={{ marginTop: "15px" }}>
        {userBooking.rooms.map((room: Room, idx: number) => (
          <div key={idx} style={{ marginBottom: "15px" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <FaBed style={{ color: "#1890ff", marginRight: "8px" }} />
              <strong>{room.name}</strong>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <FaCalendarAlt style={{ color: "#1890ff", marginRight: "8px" }} />
              <span>{room.date}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <FaClock style={{ color: "#1890ff", marginRight: "8px" }} />
              <span>{room.time}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <strong>Duration:</strong> {room.duration} hours
            </div>
          </div>
        ))}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <div>
          <strong>Total: </strong>${userBooking.totalAmount.toFixed(2)}
        </div>
        <Space>
          <Button type="primary" danger>
            Deny
          </Button>
          <Button>Cancel</Button>
        </Space>
      </div>
    </Card>
  );
};

export default BookingHistoryCard;
