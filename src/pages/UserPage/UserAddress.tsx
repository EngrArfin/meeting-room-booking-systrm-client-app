import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Card,
  Select,
  Checkbox,
  Row,
  Col,
  Typography,
} from "antd";

const { Title } = Typography;
const { Option } = Select;

interface BookingFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  room: string;
  bookingDate: string;
  startTime: string;
  endTime: string;
  attendees: number;
  defaultBooking: boolean;
}

const RoomBooking: React.FC = () => {
  const [defaultBooking, setDefaultBooking] = useState(false);

  // Handle form submission
  const handleFinish = (values: BookingFormValues) => {
    console.log("Form values: ", values);
    // Handle form submission logic, e.g., sending data to backend
  };

  return (
    <div style={{ padding: "50px", maxWidth: "900px", margin: "0 auto" }}>
      <Card>
        <Title level={2} style={{ textAlign: "center" }}>
          Book a Meeting Room
        </Title>

        <p style={{ textAlign: "center" }}>
          Please fill in the details below to book a meeting room.
        </p>

        <Form layout="vertical" onFinish={handleFinish}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="First Name"
                name="firstName"
                rules={[
                  { required: true, message: "Please input your first name!" },
                ]}
              >
                <Input placeholder="First Name" />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                label="Last Name"
                name="lastName"
                rules={[
                  { required: true, message: "Please input your last name!" },
                ]}
              >
                <Input placeholder="Last Name" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input placeholder="Email" />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                label="Phone"
                name="phone"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
              >
                <Input placeholder="Phone" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Room"
                name="room"
                rules={[{ required: true, message: "Please select a room!" }]}
              >
                <Select placeholder="Select a room">
                  <Option value="Conference Room A">Conference Room A</Option>
                  <Option value="Meeting Room B">Meeting Room B</Option>
                  <Option value="Boardroom C">Boardroom C</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                label="Booking Date"
                name="bookingDate"
                rules={[{ required: true, message: "Please select a date!" }]}
              >
                <Input type="date" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Start Time"
                name="startTime"
                rules={[
                  { required: true, message: "Please select a start time!" },
                ]}
              >
                <Input type="time" />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                label="End Time"
                name="endTime"
                rules={[
                  { required: true, message: "Please select an end time!" },
                ]}
              >
                <Input type="time" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Number of Attendees"
                name="attendees"
                rules={[
                  {
                    required: true,
                    message: "Please input the number of attendees!",
                  },
                ]}
              >
                <Input placeholder="Attendees" type="number" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="defaultBooking" valuePropName="checked">
                <Checkbox
                  checked={defaultBooking}
                  onChange={() => setDefaultBooking(!defaultBooking)}
                >
                  Save as Default Booking
                </Checkbox>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item style={{ textAlign: "center" }}>
            <Button type="primary" htmlType="submit">
              Book Room
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default RoomBooking;
