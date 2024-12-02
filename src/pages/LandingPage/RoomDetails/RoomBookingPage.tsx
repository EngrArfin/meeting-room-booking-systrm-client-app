/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  DatePicker,
  Button,
  Form,
  Input,
  Select,
  Typography,
  Card,
  Space,
  Divider,
  message,
} from "antd";
import { Moment } from "moment";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { useSendBookingMutation } from "../../../redux/api/api";

const { Option } = Select;
const { Title, Text } = Typography;

interface BookingFormValues {
  name: string;
  email: string;
  phone: string;
  timeSlot: string;
}

interface User {
  _id: string;
  name: string;
}

interface Booking {
  name: string;
  email: string;
  phone: string;
  timeSlot: string;
  date: string;
  userId: string;
  roomId: string;
}

const RoomBookingPage: React.FC = () => {
  const { roomId } = useParams<{ roomId: string }>();
  const { user } = useSelector((state: RootState) => state.auth) as {
    user: User | null;
  };
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);

  const [sendBooking, { isLoading }] = useSendBookingMutation();

  useEffect(() => {
    if (selectedDate) {
      setAvailableSlots(["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM"]);
    }
  }, [selectedDate]);

  const handleDateChange = (
    _date: Moment | null,
    dateString: string | string[]
  ) => {
    if (typeof dateString === "string") {
      setSelectedDate(dateString || null);
    } else {
      setSelectedDate(null);
    }
  };

  const handleSubmit = async (values: BookingFormValues) => {
    if (!roomId || !selectedDate) {
      message.error("Room or Date information is missing.");
      return;
    }

    if (!user) {
      message.error("User is not authenticated.");
      return;
    }

    const bookingData: Booking = {
      ...values,
      date: selectedDate,
      userId: user._id,
      roomId,
    };

    try {
      await sendBooking(bookingData).unwrap();
      message.success("Booking confirmed successfully!");
    } catch (error: any) {
      message.error(
        error?.data?.message || "Failed to book the room. Try again later."
      );
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "40px" }}>
      <Card
        bordered={false}
        style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}
      >
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <Title level={3} style={{ textAlign: "center", color: "#1890ff" }}>
            Book Your Room
          </Title>
          <Divider />
          <Form layout="vertical" onFinish={handleSubmit}>
            <Form.Item
              label={<Text strong>Select Date</Text>}
              name="date"
              rules={[{ required: true, message: "Please select a date!" }]}
            >
              <DatePicker
                format="YYYY-MM-DD"
                onChange={handleDateChange}
                style={{ width: "100%" }}
              />
            </Form.Item>

            <Form.Item
              label={<Text strong>Available Time Slots</Text>}
              name="timeSlot"
              rules={[
                { required: true, message: "Please select a time slot!" },
              ]}
            >
              <Select placeholder="Select a time slot">
                {availableSlots.map((slot, index) => (
                  <Option key={index} value={slot}>
                    {slot}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              label={<Text strong>Your Name</Text>}
              name="name"
              rules={[{ required: true, message: "Please enter your name!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label={<Text strong>Your Email</Text>}
              name="email"
              rules={[{ required: true, message: "Please enter your email!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label={<Text strong>Your Phone</Text>}
              name="phone"
              rules={[{ required: true, message: "Please enter your phone!" }]}
            >
              <Input />
            </Form.Item>

            <Button type="primary" htmlType="submit" block loading={isLoading}>
              {isLoading ? "Booking..." : "Confirm Booking"}
            </Button>
          </Form>
        </Space>
      </Card>
    </div>
  );
};

export default RoomBookingPage;
