import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Button, Row, Col, Typography, Spin, message } from "antd";
import contractBacground from "../../assets/images/sider2.jpg";
import NavBar from "./Shared/NavBar";
import { submitContractForm } from "../../redux/features/contractSlice";
import { AppDispatch } from "src/redux/store";
import { RootState } from "src/redux/store";

interface FormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contract = () => {
  const dispatch = useDispatch<AppDispatch>(); // Use correct dispatch type
  const { loading, success, error } = useSelector(
    (state: RootState) => state.contract
  );

  const handleSubmit = (values: FormValues) => {
    dispatch(submitContractForm(values)); // Dispatch the async thunk action
  };

  // Display success or error messages
  if (success) {
    message.success("Your message has been sent successfully!");
  }

  if (error) {
    message.error("Something went wrong. Please try again.");
  }

  return (
    <div>
      <NavBar />
      <div
        style={{
          backgroundImage: `url(${contractBacground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
          marginTop: "30px",
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            padding: "40px",
            borderRadius: "8px",
            maxWidth: "800px",
            width: "100%",
          }}
        >
          <Typography.Title
            level={1}
            style={{ color: "#fff", fontSize: "36px", textAlign: "center" }}
          >
            Contract US
          </Typography.Title>
          <Typography.Paragraph
            style={{ color: "#ddd", textAlign: "center", fontSize: "16px" }}
          >
            Feel free to reach out to us for any inquiries or feedback. We are
            here to help!
          </Typography.Paragraph>

          <Form
            name="contact-form"
            layout="vertical"
            onFinish={handleSubmit}
            style={{ marginTop: "30px" }}
          >
            <Row gutter={16}>
              <Col xs={24} sm={12}>
                <Form.Item
                  name="name"
                  label={
                    <Typography.Text style={{ color: "#fff" }}>
                      Your Name
                    </Typography.Text>
                  }
                  rules={[
                    { required: true, message: "Please enter your name" },
                  ]}
                >
                  <Input placeholder="Enter your name" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item
                  name="email"
                  label={
                    <Typography.Text style={{ color: "#fff" }}>
                      Your Email
                    </Typography.Text>
                  }
                  rules={[
                    { required: true, message: "Please enter your email" },
                    { type: "email", message: "Please enter a valid email" },
                  ]}
                >
                  <Input placeholder="Enter your email" />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              name="subject"
              label={
                <Typography.Text style={{ color: "#fff" }}>
                  Subject
                </Typography.Text>
              }
              rules={[{ required: true, message: "Please enter the subject" }]}
            >
              <Input placeholder="Enter the subject" />
            </Form.Item>

            <Form.Item
              name="message"
              label={
                <Typography.Text style={{ color: "#fff" }}>
                  Message
                </Typography.Text>
              }
              rules={[{ required: true, message: "Please enter your message" }]}
            >
              <Input.TextArea
                rows={4}
                placeholder="Write your message here..."
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: "100%", fontWeight: "bold" }}
                disabled={loading}
              >
                {loading ? <Spin /> : "Send Message"}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contract;
