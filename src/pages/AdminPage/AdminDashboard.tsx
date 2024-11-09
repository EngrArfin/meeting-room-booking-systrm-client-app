import { Layout, Breadcrumb, Card, Col, Row } from "antd";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const { Content } = Layout;

const AdminDashboard: React.FC = () => {
  const bookingsData = [
    { name: "Jan", bookings: 15 },
    { name: "Feb", bookings: 25 },
    { name: "Mar", bookings: 30 },
    { name: "Apr", bookings: 40 },
    { name: "May", bookings: 50 },
  ];

  const totalRooms = 25;
  const totalBookings = 120;
  const totalRevenue = "$5,500";

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout className="site-layout">
        <Content style={{ margin: "16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>

          <Row gutter={16}>
            <Col span={8}>
              <Card title="Total Rooms" bordered={false}>
                {totalRooms}
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Total Bookings" bordered={false}>
                {totalBookings}
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Total Revenue" bordered={false}>
                {totalRevenue}
              </Card>
            </Col>
          </Row>

          <Row gutter={16} style={{ marginTop: "20px" }}>
            <Col span={24}>
              <Card title="Monthly Bookings Overview" bordered={false}>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={bookingsData}>
                    <Line type="monotone" dataKey="bookings" stroke="#00bfae" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                  </LineChart>
                </ResponsiveContainer>
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;
