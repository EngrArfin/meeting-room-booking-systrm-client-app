/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { Avatar, Button, List, Skeleton, message } from "antd";

interface DataType {
  _id: string;
  name: string;
  email: string;
  role: string;
  picture?: string; // Assuming there's a picture URL, modify as per your backend data
}

const UserList = () => {
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [, setData] = useState<DataType[]>([]);
  const [list, setList] = useState<DataType[]>([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    setInitLoading(true);
    fetch("http://localhost:5000/admin/users", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`, // Include the token for authentication
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setInitLoading(false);
        setData(res.data);
        setList(res.data);
      })
      .catch((_error) => {
        message.error("Failed to load users");
        setInitLoading(false);
      });
  };

  const onLoadMore = () => {
    setLoading(true);
    // Assuming pagination or more data fetching logic here
    setLoading(false);
  };

  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          height: 32,
          lineHeight: "32px",
        }}
      >
        <Button onClick={onLoadMore}>See more..</Button>
      </div>
    ) : null;

  return (
    <div>
      <List
        className="demo-loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={list}
        renderItem={(item) => (
          <List.Item
            actions={[
              <a key="list-loadmore-edit">Edit</a>,
              <a key="list-loadmore-delete">Delete</a>,
            ]}
          >
            <Skeleton avatar title={false} loading={initLoading} active>
              <List.Item.Meta
                avatar={<Avatar src={item.picture} />}
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
