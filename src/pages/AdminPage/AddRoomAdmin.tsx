import React from "react";
import {
  Form,
  Input,
  Button,
  Upload,
  InputNumber,
  Select,
  message,
  DatePicker,
  TimePicker,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { TextArea } = Input;
const { Option } = Select;

const AddRoomAdmin: React.FC = () => {
  const [form] = Form.useForm();

  // On form submit success
  const onFinish = () => {
    console.log("Received values from form: ");
    message.success("Room added successfully!");
    form.resetFields(); // Reset form fields after submission
  };

  // On form submit failure
  const onFinishFailed = () => {
    console.error("Failed:");
    message.error("Failed to add room. Please check your input.");
  };

  return (
    <Form
      form={form}
      name="addRoom"
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      {/* Meeting Room Name */}
      <Form.Item
        label="Meeting Room Name"
        name="roomName"
        rules={[{ required: true, message: "Please enter the room name" }]}
      >
        <Input placeholder="Enter meeting room name" />
      </Form.Item>

      {/* Room Description */}
      <Form.Item
        label="Room Description"
        name="roomDescription"
        rules={[{ required: true, message: "Please enter a room description" }]}
      >
        <TextArea rows={4} placeholder="Enter room description" />
      </Form.Item>

      {/* Price per Hour */}
      <Form.Item
        label="Price per Hour"
        name="pricePerHour"
        rules={[{ required: true, message: "Please enter the price per hour" }]}
      >
        <InputNumber
          min={0}
          style={{ width: "100%" }}
          formatter={(value) => `$ ${value}`}
          placeholder="Enter price per hour"
        />
      </Form.Item>

      {/* Room Capacity */}
      <Form.Item
        label="Room Capacity"
        name="capacity"
        rules={[{ required: true, message: "Please enter the room capacity" }]}
      >
        <InputNumber
          min={1}
          style={{ width: "100%" }}
          placeholder="Enter room capacity"
        />
      </Form.Item>

      {/* Category */}
      <Form.Item
        label="Room Category"
        name="category"
        rules={[{ required: true, message: "Please select a room category" }]}
      >
        <Select placeholder="Select a room category">
          <Option value="conference">Conference</Option>
          <Option value="meeting">Meeting</Option>
          <Option value="event">Event</Option>
        </Select>
      </Form.Item>

      {/* Booking Date */}
      <Form.Item
        label="Available Booking Date"
        name="availableDate"
        rules={[{ required: true, message: "Please select a booking date" }]}
      >
        <DatePicker style={{ width: "100%" }} placeholder="Select a date" />
      </Form.Item>

      {/* Booking Time */}
      <Form.Item
        label="Available Time Slot"
        name="availableTime"
        rules={[{ required: true, message: "Please select a time slot" }]}
      >
        <TimePicker style={{ width: "100%" }} placeholder="Select time slot" />
      </Form.Item>

      {/* Room Image */}
      <Form.Item
        label="Room Image"
        name="roomImage"
        valuePropName="fileList"
        rules={[{ required: true, message: "Please upload a room image" }]}
      >
        <Upload
          name="roomImage"
          listType="picture"
          maxCount={1}
          beforeUpload={() => false}
        >
          <Button icon={<UploadOutlined />}>Upload Room Image</Button>
        </Upload>
      </Form.Item>

      {/* Submit Button */}
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Add Room
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddRoomAdmin;
