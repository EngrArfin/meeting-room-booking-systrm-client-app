// src/pages/signup/Signup.tsx
import { useState } from "react";
import { useSignupMutation } from "../../redux/api/api";
import { useAppDispatch } from "../../redux/hooks";
import { signup } from "../../redux/features/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { Card, Form, Input, Button, Typography, Alert } from "antd";
import photo from "../../assets/icons/signup.jpg";

const { Title, Paragraph } = Typography;

const Signup = () => {
  const [signupUser, { isLoading, error }] = useSignupMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    role: "user",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const result = await signupUser(formData).unwrap();
      dispatch(signup(result));
      navigate("/login");
    } catch (err) {
      console.error("Signup failed", err);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        flexDirection: "row",
      }}
    >
      {/* Left side with image */}
      <div
        style={{
          flex: 1,
          backgroundImage: `url(${photo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Right side with signup form */}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f0f2f5",
          padding: "20px",
        }}
      >
        <Card
          title={
            <Title level={2} style={{ textAlign: "center" }}>
              Sign Up Account
            </Title>
          }
          style={{ maxWidth: "600px", width: "100%" }}
        >
          <Form
            onFinish={handleSubmit}
            layout="vertical"
            style={{ margin: "0" }}
          >
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please enter your name!" }]}
            >
              <Input
                placeholder="Name"
                name="name"
                onChange={handleChange}
                required
              />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[{ required: true, message: "Please enter your email!" }]}
            >
              <Input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                required
              />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please enter your password!" },
              ]}
            >
              <Input.Password
                placeholder="Password"
                name="password"
                onChange={handleChange}
                required
              />
            </Form.Item>

            <Form.Item label="Phone" name="phone">
              <Input placeholder="Phone" name="phone" onChange={handleChange} />
            </Form.Item>

            <Form.Item label="Address" name="address">
              <Input
                placeholder="Address"
                name="address"
                onChange={handleChange}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={isLoading}
                style={{
                  width: "100%",
                  background: "#007BFF",
                  color: "#fff",
                  borderRadius: "8px",
                  fontSize: "16px",
                  backgroundColor: "#0077B6",
                  borderColor: "#0077B6",
                }}
              >
                Sign Up
              </Button>
            </Form.Item>
          </Form>
          {error && (
            <Alert
              message="Error!"
              description="There was an error signing up!"
              type="error"
              style={{ marginTop: "10px" }}
            />
          )}
          <Paragraph style={{ textAlign: "center", marginTop: "20px" }}>
            Already have an account?{" "}
            <Link to="/login" style={{ borderColor: "#0077B6" }}>
              Login
            </Link>
          </Paragraph>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
