/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  Layout,
  Row,
  Col,
  Card,
  Statistic,
  DatePicker,
  Table,
  List,
  Button,
} from "antd";
import { Line } from "@ant-design/plots";
import moment from "moment";

const { Header, Content } = Layout;

const Report = () => {
  const [selectedDate, setSelectedDate] = useState<moment.Moment | null>(null);

  const summaryData = {
    totalRooms: 50,
    totalBookings: 120,
    totalCustomers: 80,
    totalRevenue: 15000,
  };

  const bookingData = [
    { date: "2024-10-01", bookings: 15 },
    { date: "2024-10-02", bookings: 20 },
    { date: "2024-10-03", bookings: 10 },
    { date: "2024-10-04", bookings: 25 },
    { date: "2024-10-05", bookings: 18 },
  ];

  const roomData = [
    {
      key: "1",
      roomName: "Conference Room A",
      capacity: 20,
      bookings: 25,
      revenue: 3000,
    },
    {
      key: "2",
      roomName: "Meeting Room B",
      capacity: 10,
      bookings: 15,
      revenue: 1500,
    },
    {
      key: "3",
      roomName: "Workshop Room C",
      capacity: 30,
      bookings: 30,
      revenue: 4500,
    },
  ];

  const lowAvailabilityData = [
    { key: "1", roomName: "Conference Room B", availability: "Low" },
    { key: "2", roomName: "Workshop Room D", availability: "Low" },
  ];

  const reviews = [
    {
      author: "Arfin Mia",
      content: "Great room, perfect for team meetings.",
      date: "2024-10-01",
    },
    {
      author: "Ariful Islam",
      content: "Well-equipped and spacious. Highly recommend.",
      date: "2024-10-02",
    },
  ];

  const bookingConfig = {
    data: bookingData,
    xField: "date",
    yField: "bookings",
    height: 250,
    xAxis: {
      label: {
        formatter: (v: moment.MomentInput) => moment(v).format("MM-DD"),
      },
    },
  };

  const roomColumns = [
    { title: "Room Name", dataIndex: "roomName", key: "roomName" },
    { title: "Capacity", dataIndex: "capacity", key: "capacity" },
    { title: "Bookings", dataIndex: "bookings", key: "bookings" },
    {
      title: "Revenue",
      dataIndex: "revenue",
      key: "revenue",
      render: (text: any) => `$${text}`,
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <Button type="primary" onClick={() => handleRoomBooking(record)}>
          Book Room
        </Button>
      ),
    },
  ];

  const availabilityColumns = [
    { title: "Room Name", dataIndex: "roomName", key: "roomName" },
    { title: "Availability", dataIndex: "availability", key: "availability" },
  ];

  const handleRoomBooking = (room: any) => {
    alert(`Booking process started for ${room.roomName}`);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ backgroundColor: "#fff", padding: "0 24px" }}>
        <h2>Meeting Room Report</h2>
      </Header>
      <Content style={{ margin: "24px" }}>
        <DatePicker
          style={{ marginBottom: "16px" }}
          onChange={(date) => setSelectedDate(date)}
          value={selectedDate}
        />

        <Row gutter={16}>
          <Col span={6}>
            <Card>
              <Statistic title="Total Rooms" value={summaryData.totalRooms} />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="Total Bookings"
                value={summaryData.totalBookings}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="Total Customers"
                value={summaryData.totalCustomers}
              />
            </Card>
          </Col>
          <Col span={6}>
            <Card>
              <Statistic
                title="Total Revenue"
                value={summaryData.totalRevenue}
                prefix="$"
              />
            </Card>
          </Col>
        </Row>

        <Card title="Bookings Over Time" style={{ marginTop: "24px" }}>
          <Line {...bookingConfig} />
        </Card>

        <Card title="Room Usage & Revenue" style={{ marginTop: "24px" }}>
          <Table
            columns={roomColumns}
            dataSource={roomData}
            pagination={{ pageSize: 5 }}
          />
        </Card>

        <Card title="Low Availability Rooms" style={{ marginTop: "24px" }}>
          <Table
            columns={availabilityColumns}
            dataSource={lowAvailabilityData}
            pagination={{ pageSize: 5 }}
          />
        </Card>

        <Card title="Customer Feedback" style={{ marginTop: "24px" }}>
          <List
            dataSource={reviews}
            renderItem={(item) => (
              <List.Item>
                <strong>{item.author}</strong>
                <div>{item.content}</div>
                <small>{item.date}</small>
              </List.Item>
            )}
          />
        </Card>
      </Content>
    </Layout>
  );
};

export default Report;
