/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  Col,
  Form,
  Input,
  Row,
  Space,
  Typography,
  notification,
} from "antd";
import axios from "axios";
import { RootState } from "../../../redux/store";
import { IRoom } from "../../../styles";

const ConfirmBooking: React.FC = () => {
  const navigate = useNavigate();
  const room = useSelector(
    (state: RootState) => state.room.selectedRoom as IRoom
  );
  const [loading, setLoading] = useState(false);

  const handlePayment = async (values: { name: string; email: string }) => {
    if (!room) {
      notification.error({ message: "Room details not found" });
      navigate("/");
      return;
    }

    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("User is not authenticated. Token missing.");
      }

      const bookingData = {
        name: values.name,
        email: values.email,
        roomId: room._id,
        timeSlot: room.timeSlot,
        date: room.date,
      };

      const response = await axios.post(
        "https://meeting-room-booking-system-peach.vercel.app/api/bookings",
        bookingData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        notification.success({
          message: "Booking Confirmed",
          description: `Your booking for room ${room.roomName} is confirmed.`,
        });
        navigate("/thank-you");
      }
    } catch (error: any) {
      console.error("Error response:", error.response); // Debugging
      notification.error({
        message: "Booking Failed",
        description: error.response?.data?.message || error.message,
      });
    } finally {
      setLoading(false);
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
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
      <Typography.Title level={3}>Confirm Your Booking</Typography.Title>
      <Row gutter={16}>
        <Col xs={24} md={12}>
          <Card style={{ marginBottom: "20px", borderRadius: "10px" }}>
            <Typography.Title level={4}>{room.roomName}</Typography.Title>
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
          </Card>
        </Col>

        <Col xs={24} md={12}>
          <Card title="Enter Your Details">
            <Form onFinish={handlePayment}>
              <Form.Item
                name="name"
                label="Full Name"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input placeholder="Enter your name" />
              </Form.Item>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: "Please input your email!" },
                  {
                    type: "email",
                    message: "Please input a valid email!",
                  },
                ]}
              >
                <Input placeholder="Enter your email" />
              </Form.Item>
              <Space>
                <Button type="primary" htmlType="submit" loading={loading}>
                  Confirm Booking
                </Button>
                <Button onClick={() => navigate("/")} type="default">
                  Cancel
                </Button>
              </Space>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ConfirmBooking;
