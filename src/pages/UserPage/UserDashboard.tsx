import { Layout, Breadcrumb, Card, Row, Col, List, Typography } from "antd";
/* import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/features/userSlice"; */

const { Header, Content } = Layout;
const { Text } = Typography;

interface Booking {
  bookingId: string;
  date: string;
  status: string;
  total: string;
  room: string;
}

const UserDashboard: React.FC = () => {
  /* const dispatch = useDispatch(); */

  // Static user data
  const staticUserData = {
    firstName: "Arfin",
    lastName: "mia",
    email: "arfin@gmail.com",
    telephone: "123-456-7890",
  };

  // Static booking data
  const staticBookingsData: Booking[] = [
    {
      bookingId: "B001",
      date: "2024-12-01",
      status: "Confirmed",
      total: "$150",
      room: "Deluxe Suite",
    },
    {
      bookingId: "B002",
      date: "2024-12-05",
      status: "Pending",
      total: "$200",
      room: "Executive Room",
    },
  ];

  // Dispatch static data to Redux store
  /*   useEffect(() => {
    dispatch(setUser(staticUserData));
  }, [dispatch]); */

  return (
    <Layout style={{ minHeight: "50vh" }}>
      <Layout>
        <Header style={{ background: "#fff", padding: 0 }}>
          <Breadcrumb style={{ padding: "5px 5px" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
        </Header>

        <Content style={{ margin: "5px 5px", minHeight: 100 }}>
          <Row gutter={16}>
            <Col span={8}>
              <Card title="Account Information" bordered={false}>
                <List>
                  <List.Item>
                    <Text strong>First Name:</Text>{" "}
                    <Text>{staticUserData.firstName}</Text>
                  </List.Item>
                  <List.Item>
                    <Text strong>Last Name:</Text>{" "}
                    <Text>{staticUserData.lastName}</Text>
                  </List.Item>
                  <List.Item>
                    <Text strong>Email:</Text>{" "}
                    <Text>{staticUserData.email}</Text>
                  </List.Item>
                  <List.Item>
                    <Text strong>Telephone:</Text>{" "}
                    <Text>{staticUserData.telephone}</Text>
                  </List.Item>
                </List>
              </Card>
            </Col>

            <Col span={16}>
              <Card title="Booking History" bordered={false}>
                <List
                  itemLayout="horizontal"
                  dataSource={staticBookingsData}
                  renderItem={(item: Booking) => (
                    <List.Item>
                      <List.Item.Meta
                        title={`Booking ID: ${item.bookingId}`}
                        description={`Date: ${item.date}`}
                      />
                      <div>Room: {item.room}</div>
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
