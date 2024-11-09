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
} from "antd";
import moment from "moment";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store";
import { submitBooking } from "../../../redux/features/bookingSlice";

const { Option } = Select;
const { Title, Text } = Typography;

const RoomBookingPage: React.FC = () => {
  const { roomId } = useParams<{ roomId: string }>();

  const dispatch: AppDispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);

  useEffect(() => {
    if (selectedDate) {
      setAvailableSlots(["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM"]);
    }
  }, [selectedDate]);

  const handleDateChange = (
    _date: moment.Moment | null,
    dateString: string | string[]
  ) => {
    setSelectedDate(Array.isArray(dateString) ? dateString[0] : dateString);
  };

  const handleSubmit = (values: {
    name: string;
    email: string;
    phone: string;
    timeSlot: string;
  }) => {
    if (!roomId) {
      alert("Room ID is missing. Please provide a valid Room ID in the URL.");
      return;
    }

    if (!selectedDate) {
      alert("Please select a date before proceeding with the booking.");
      return;
    }

    const bookingData = {
      ...values,
      date: selectedDate,
      userId: user?._id,
      roomId,
    };

    dispatch(submitBooking(bookingData));
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "40px" }}>
      <Card
        bordered={false}
        style={{ boxShadow: "0 4px 12px rgba(0,0,0,0.15)" }}
      >
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <Title level={3} style={{ textAlign: "center", color: "#1890ff" }}>
            Book Your Room (Room ID: {roomId})
          </Title>
          <Divider />
          <Form
            layout="vertical"
            onFinish={handleSubmit}
            style={{ width: "100%" }}
          >
            <Form.Item
              label={<Text strong>Select Date</Text>}
              name="date"
              rules={[{ required: true, message: "Please select a date" }]}
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
              rules={[{ required: true, message: "Please select a time" }]}
            >
              <Select
                placeholder="Select a time slot"
                style={{ width: "100%" }}
              >
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
              initialValue={user?.name || ""}
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input placeholder="Enter your full name" />
            </Form.Item>

            <Form.Item
              label={<Text strong>Your Email</Text>}
              name="email"
              initialValue={user?.email || ""}
              rules={[{ required: true, message: "Please enter your email" }]}
            >
              <Input type="email" placeholder="Enter your email" />
            </Form.Item>

            <Form.Item
              label={<Text strong>Your Phone</Text>}
              name="phone"
              rules={[{ required: true, message: "Please enter your phone" }]}
            >
              <Input type="phone" placeholder="Enter your phone number" />
            </Form.Item>

            <Button type="primary" htmlType="submit" block>
              Confirm Booking
            </Button>
          </Form>
        </Space>
      </Card>
    </div>
  );
};

export default RoomBookingPage;
