import { Avatar, Button, List, Skeleton, message } from "antd";
import { Link } from "react-router-dom";
import { useGetUsersQuery } from "../../redux/api/api";
import Item from "antd/es/list/Item";

interface DataType {
  _id: string;
  name: string;
  email: string;
  role: string;
  picture?: string;
}

const UserList = () => {
  const { data, error, isLoading, isFetching } = useGetUsersQuery(undefined);
  const users: DataType[] = data?.data || [];
  if (error) {
    message.error("Failed to load users");
  }

  return (
    <div>
      <h1>Total User: {Item.length}</h1>
      <List
        className="demo-loadmore-list"
        loading={isLoading || isFetching}
        itemLayout="horizontal"
        dataSource={users}
        renderItem={(item: DataType) => (
          <List.Item
            actions={[
              <Link to={`/admin/edit-user/${item._id}`} key="edit">
                Edit
              </Link>,
              <Button
                type="link"
                key="delete"
                onClick={() => message.success(`User ${item._id} deleted`)}
              >
                Delete
              </Button>,
            ]}
          >
            <Skeleton avatar title={false} loading={isLoading} active>
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={item.picture || "https://via.placeholder.com/150"}
                  />
                }
                title={<a href="#">{item.name}</a>}
                description={item.email}
              />
              <div>Role: {item.role}</div>
            </Skeleton>
          </List.Item>
        )}
      />
    </div>
  );
};

export default UserList;
