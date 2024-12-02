// src/pages/signup/Signup.tsx
import { useState } from "react";
import { useSignupMutation } from "../../redux/api/api";
import { useAppDispatch } from "../../redux/hooks";
import { signup } from "../../redux/features/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { Card, Form, Input, Button, Typography, Alert } from "antd";

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
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f2f5",
      }}
    >
      <Card
        title={<Title level={2}>Create an Account</Title>}
        style={{ maxWidth: "400px", width: "100%" }}
      >
        <Form onFinish={handleSubmit} layout="vertical" style={{ margin: "0" }}>
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
            rules={[{ required: true, message: "Please enter your password!" }]}
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
                background: "linear-gradient(135deg, #FF6F61, #FF8A00)",
                borderColor: "transparent",
                borderRadius: "8px",
                fontSize: "16px",
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
          />
        )}
        <Paragraph style={{ textAlign: "center", marginTop: "20px" }}>
          Already have an account? <Link to="/login">Login</Link>
        </Paragraph>
      </Card>
    </div>
  );
};

export default Signup;
