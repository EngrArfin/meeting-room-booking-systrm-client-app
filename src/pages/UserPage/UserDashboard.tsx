import { Layout, Breadcrumb, Card, Row, Col, List, Typography } from "antd";

const { Header, Content } = Layout;
const { Text } = Typography;

const UserDashboard: React.FC = () => {
  const orderData = [
    {
      orderId: "ORD123456",
      date: "2024-09-15",
      status: "Shipped",
      total: "$120.00",
    },
    {
      orderId: "ORD123457",
      date: "2024-09-12",
      status: "Delivered",
      total: "$89.99",
    },
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout>
        <Header style={{ background: "#fff", padding: 0 }}>
          <Breadcrumb style={{ padding: "16px 24px" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
        </Header>

        <Content style={{ margin: "16px 24px", minHeight: 280 }}>
          <Row gutter={16}>
            <Col span={8}>
              <Card title="Account Information" bordered={false}>
                <List>
                  <List.Item>
                    <Text strong>First Name:</Text> <Text>Md Samsel</Text>
                  </List.Item>
                  <List.Item>
                    <Text strong>Last Name:</Text> <Text>Arfin</Text>
                  </List.Item>
                  <List.Item>
                    <Text strong>Email:</Text>{" "}
                    <Text>arfin.cse.green.edu.bd@gmail.com</Text>
                  </List.Item>
                  <List.Item>
                    <Text strong>Telephone:</Text> <Text>01952487468</Text>
                  </List.Item>
                </List>
              </Card>
            </Col>

            <Col span={16}>
              <Card title="Order History" bordered={false}>
                <List
                  itemLayout="horizontal"
                  dataSource={orderData}
                  renderItem={(item) => (
                    <List.Item>
                      <List.Item.Meta
                        title={`Order ID: ${item.orderId}`}
                        description={`Date: ${item.date}`}
                      />
                      <div>Status: {item.status}</div>
                      <div>Total: {item.total}</div>
                    </List.Item>
                  )}
                />
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default UserDashboard;
