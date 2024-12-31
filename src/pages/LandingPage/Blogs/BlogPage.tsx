import { Card, Col, Row, Typography, Button, Space } from "antd";
import { CalendarOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import blog1 from "../../../assets/images/blog1.jpg";
import blog2 from "../../../assets/images/blog2.jpg";
import blog3 from "../../../assets/images/blog3.jpg";
import blog4 from "../../../assets/images/blog4.jpg";

const { Title, Paragraph } = Typography;

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Choose the Perfect Meeting  Business",
      date: "2024-12-16",
      author: "John Doe",
      description:
        "Choosing the right meeting room can enhance productivity and create a professional environment for your business.",
      imgUrl: blog1, // Replaced with local image
    },
    {
      id: 2,
      title: "Maximizing Meeting Space: Tips Effective Use",
      date: "2024-12-10",
      author: "Jane Smith",
      description:
        "Maximize your meeting room's potential by optimizing space and making it comfortable for attendees.",
      imgUrl: blog2, // Replaced with local image
    },
    {
      id: 3,
      title: "Benefits Remote Meetings and Virtual Rooms",
      date: "2024-12-05",
      author: "Alice Johnson",
      description:
        "Learn how remote meetings and virtual rooms can improve collaboration and flexibility for your team.",
      imgUrl: blog3, // Replaced with local image
    },
    {
      id: 4, // New blog post added
      title: "Future of Hybrid Meetings in Post-Pandemic World",
      date: "2024-12-01",
      author: "Robert Lee",
      description:
        "As businesses transition to a hybrid model, meeting rooms need to adapt to accommodate both in-person and virtual participants effectively.",
      imgUrl: blog4, // Replaced with local image
    },
  ];

  return (
    <div style={{ padding: "40px" }}>
      <Title level={2} style={{ textAlign: "center", fontWeight: "600" }}>
        Blog - Tips & Advice
      </Title>
      <Row gutter={[16, 16]}>
        {blogPosts.map((post) => (
          <Col key={post.id} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              cover={<img alt={post.title} src={post.imgUrl} />}
              style={{
                borderRadius: "10px",
                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#ffffff",
              }}
            >
              <Title level={4}>{post.title}</Title>
              <Space style={{ marginBottom: "10px" }}>
                <CalendarOutlined />
                <span>{post.date}</span>
                <UserOutlined />
                <span>{post.author}</span>
              </Space>
              <Paragraph ellipsis={{ rows: 3, expandable: true }}>
                {post.description}
              </Paragraph>
              <Link to={`/blog/${post.id}`}>
                <Button
                  type="primary"
                  size="small"
                  style={{
                    backgroundColor: "#0077B6",
                    borderColor: "#0077B6",
                  }}
                >
                  Read More
                </Button>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BlogPage;
