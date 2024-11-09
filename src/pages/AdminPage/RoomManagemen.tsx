import { Card, Col, Row, Table, Tag } from "antd";
import { Footer } from "antd/es/layout/layout";

const RoomManagement = () => {
  const roomColumns = [
    {
      title: "Room Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Capacity",
      dataIndex: "capacity",
      key: "capacity",
    },
    {
      title: "Availability",
      dataIndex: "availability",
      key: "availability",
      render: (availability: boolean) => (
        <Tag color={availability ? "green" : "red"}>
          {availability ? "Available" : "Booked"}
        </Tag>
      ),
    },
    {
      title: "Price per Hour",
      dataIndex: "pricePerHour",
      key: "pricePerHour",
      render: (price: string) => `$${price}`,
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <div>
          <a style={{ marginRight: "10px" }}>Edit</a>
          <a>Delete</a>
        </div>
      ),
    },
  ];

  const roomData = [
    {
      key: "1",
      name: "Conference Room A",
      capacity: 20,
      availability: true,
      pricePerHour: "50",
    },
    {
      key: "2",
      name: "Meeting Room B",
      capacity: 10,
      availability: false,
      pricePerHour: "40",
    },
    {
      key: "3",
      name: "Board Room C",
      capacity: 8,
      availability: true,
      pricePerHour: "60",
    },
  ];

  return (
    <div>
      <Row gutter={16} style={{ marginTop: "20px" }}>
        <Col span={24}>
          <Card title="Room Management" bordered={false}>
            <Table columns={roomColumns} dataSource={roomData} />
          </Card>
        </Col>
      </Row>
      <Footer style={{ textAlign: "center" }}>
        Meeting Room Booking System Admin Dashboard ©2024 Created by Samsel
        Arfin
      </Footer>
    </div>
  );
};

export default RoomManagement;
