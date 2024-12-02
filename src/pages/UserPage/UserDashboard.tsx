import { Layout, Breadcrumb, Card, Row, Col, List, Typography } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetUserByIdQuery,
  useGetUserBookingsQuery,
} from "../../redux/api/api";
import { setUser } from "../../redux/features/userSlice";
import { RootState } from "../../redux/store";

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
  const dispatch = useDispatch();

  const { user } = useSelector((state: RootState) => state.user);

  const {
    data: userData,
    isLoading: userLoading,
    error: userError,
  } = useGetUserByIdQuery(user._id);
  const {
    data: bookingsData,
    isLoading: bookingsLoading,
    error: bookingsError,
  } = useGetUserBookingsQuery(undefined);

  useEffect(() => {
    if (userData) {
      dispatch(setUser(userData));
    }
  }, [userData, dispatch]);

  if (userLoading || bookingsLoading) {
    return <div>Loading...</div>;
  }

  if (userError || bookingsError) {
    return <div>Error loading data</div>;
  }

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
                    <Text strong>First Name:</Text>{" "}
                    <Text>{userData?.firstName}</Text>
                  </List.Item>
                  <List.Item>
                    <Text strong>Last Name:</Text>{" "}
                    <Text>{userData?.lastName}</Text>
                  </List.Item>
                  <List.Item>
                    <Text strong>Email:</Text> <Text>{userData?.email}</Text>
                  </List.Item>
                  <List.Item>
                    <Text strong>Telephone:</Text>{" "}
                    <Text>{userData?.telephone}</Text>
                  </List.Item>
                </List>
              </Card>
            </Col>

            <Col span={16}>
              <Card title="Booking History" bordered={false}>
                <List
                  itemLayout="horizontal"
                  dataSource={bookingsData as Booking[]}
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
