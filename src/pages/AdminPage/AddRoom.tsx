import React from "react";
import {
  Form,
  Input,
  Button,
  InputNumber,
  Select,
  DatePicker,
  TimePicker,
  message,
} from "antd";
import { UploadOutlined } from "@ant-design/icons";
import Upload from "antd/es/upload/Upload";

const { TextArea } = Input;
const { Option } = Select;

const AddRoomBooking: React.FC = () => {
  const [form] = Form.useForm();

  // On form submit success
  const onFinish = () => {
    console.log("Received values from form: ");
    message.success("Room booking successfully added!");
    form.resetFields(); // Reset form fields after submission
  };

  // On form submit failure
  const onFinishFailed = () => {
    console.error("Failed:");
    message.error("Failed to add room booking. Please check your input.");
  };

  return (
    <Form
      form={form}
      name="addRoomBooking"
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      {/* Meeting Room Name */}
      <Form.Item
        label="Meeting Room Name"
        name="roomName"
        rules={[
          { required: true, message: "Please enter the meeting room name" },
        ]}
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
        label="Category"
        name="category"
        rules={[{ required: true, message: "Please select a room category" }]}
      >
        <Select placeholder="Select a category">
          <Option value="conference">Conference</Option>
          <Option value="meeting">Meeting</Option>
          <Option value="event">Event</Option>
        </Select>
      </Form.Item>

      {/* Booking Date */}
      <Form.Item
        label="Booking Date"
        name="bookingDate"
        rules={[{ required: true, message: "Please select a booking date" }]}
      >
        <DatePicker
          style={{ width: "100%" }}
          placeholder="Select a booking date"
        />
      </Form.Item>

      {/* Booking Time */}
      <Form.Item
        label="Booking Time"
        name="bookingTime"
        rules={[{ required: true, message: "Please select a booking time" }]}
      >
        <TimePicker
          style={{ width: "100%" }}
          placeholder="Select a booking time"
        />
      </Form.Item>

      {/* Room Image */}
      <Form.Item
        label="Room Image"
        name="image"
        valuePropName="fileList"
        rules={[{ required: true, message: "Please upload a room image" }]}
      >
        <Upload
          name="image"
          listType="picture"
          maxCount={1}
          beforeUpload={() => false}
        >
          <Button icon={<UploadOutlined />}>Upload Image</Button>
        </Upload>
      </Form.Item>

      {/* Submit Button */}
      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Add Room Booking
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddRoomBooking;
