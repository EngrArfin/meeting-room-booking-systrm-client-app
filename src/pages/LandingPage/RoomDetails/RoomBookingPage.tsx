import React, { useState, useEffect } from "react";
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
    const bookingData = {
      ...values,
      date: selectedDate,
      userId: user?._id, // Ensure userId is added
    };

    // Dispatch the action to send data to Redux
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
            Book Your Room
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
              rules={[{ required: true, message: "Please select a time slot" }]}
            >
              <Select
                placeholder="Select a time slot"
                style={{ width: "100%" }}
              >
                {availableSlots.map((slot) => (
                  <Option key={slot} value={slot}>
                    {slot}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Divider orientation="left">User Information</Divider>

            <Form.Item label={<Text strong>Full Name</Text>} name="name">
              <Input
                placeholder="Enter your full name"
                defaultValue={user?.name}
              />
            </Form.Item>

            <Form.Item label={<Text strong>Email</Text>} name="email">
              <Input
                placeholder="Enter your email"
                defaultValue={user?.email}
              />
            </Form.Item>

            <Form.Item label={<Text strong>Phone</Text>} name="phone">
              <Input
                placeholder="Enter your phone number"
                defaultValue={user?.phone}
              />
            </Form.Item>

            <Button
              type="primary"
              htmlType="submit"
              style={{ width: "100%", marginTop: "20px" }}
            >
              Confirm Booking
            </Button>
          </Form>
        </Space>
      </Card>
    </div>
  );
};

export default RoomBookingPage;
