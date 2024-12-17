import { Carousel, Avatar, Typography, Card } from "antd";
import photo1 from "../../../assets/icons/photo1.png";
import photo2 from "../../../assets/icons/photo2.png";
import photo3 from "../../../assets/icons/photo3.png";

const testimonials = [
  {
    name: "Arfin Mia",
    role: "Project Manager",
    feedback:
      "Absolutely thrilled with the service! The booking process was seamless, quick, and user-friendly. Highly recommended for anyone looking for efficiency.",
    image: photo1, // Using photo1.png
  },
  {
    name: "Samsel Arfin",
    role: "UI/UX Designer",
    feedback:
      "I loved the intuitive interface! Everything was organized perfectly, and the process was smooth. The team truly understands user needs.",
    image: photo2, // Using photo2.png
  },
  {
    name: "Mira Akter",
    role: "HR Specialist",
    feedback:
      "Outstanding customer support! Secure transactions and attention to detail made this a fantastic experience. Will definitely come back.",
    image: photo3, // Using photo3.png
  },
];

const Testimonials = () => {
  return (
    <div
      style={{
        padding: "40px 20px",
        textAlign: "center",
        backgroundColor: "#f4f4f4", // Base background color
      }}
    >
      <Typography.Title
        level={2}
        style={{
          color: "#333333",
          fontWeight: "700",
          marginBottom: "24px",
          letterSpacing: "0.5px",
        }}
      >
        What Our Customers Say
      </Typography.Title>

      <Carousel autoplay>
        {testimonials.map((testimonial, index) => (
          <div key={index}>
            <Card
              bordered={false}
              style={{
                maxWidth: "600px",
                margin: "0 auto",
                background: "#ffffff", // White card background
                borderRadius: "12px",
                padding: "20px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Subtle shadow
              }}
            >
              <Avatar
                src={testimonial.image}
                size={80}
                style={{
                  marginBottom: "16px",
                  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
                }}
              />
              <Typography.Title level={4} style={{ marginBottom: "8px" }}>
                {testimonial.name}
              </Typography.Title>
              <Typography.Text
                style={{
                  fontStyle: "italic",
                  color: "#888",
                  display: "block",
                  marginBottom: "12px",
                }}
              >
                {testimonial.role}
              </Typography.Text>
              <Typography.Paragraph
                style={{
                  fontSize: "16px",
                  lineHeight: "1.6",
                  color: "#555",
                  marginBottom: 0,
                }}
              >
                "{testimonial.feedback}"
              </Typography.Paragraph>
            </Card>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;
