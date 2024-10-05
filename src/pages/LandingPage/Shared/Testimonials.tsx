import { Carousel, Avatar, Typography, Card } from "antd";

const testimonials = [
  {
    name: "John Doe",
    role: "Project Manager",
    feedback: "Amazing service! Booking was quick and easy.",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Jane Smith",
    role: "Designer",
    feedback: "i'm jane and Loved the interface and the seamless process!",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Bob Johnson",
    role: "CEO",
    feedback: "Top-notch customer service and secure transactions.",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const Testimonials = () => {
  return (
    <div>
      <Typography.Title
        level={2}
        style={{
          color: "yellow",
          fontStyle: "italic",
          fontSize: "24px",
          paddingLeft: "10px",
          marginTop: "10px",
          marginBottom: "20px",
          display: "block",
        }}
      >
        Customer Testimonials
      </Typography.Title>
      <div style={{ padding: "20px", textAlign: "center" }}>
        <Carousel autoplay>
          {testimonials.map((testimonial, index) => (
            <div key={index}>
              <Card bordered={false} style={{ background: "#f9fbe7" }}>
                <Avatar src={testimonial.avatar} size={64} />
                <Typography.Title level={4}>
                  {testimonial.name}
                </Typography.Title>
                <Typography.Text>{testimonial.role}</Typography.Text>
                <Typography.Paragraph>
                  {testimonial.feedback}
                </Typography.Paragraph>
              </Card>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
