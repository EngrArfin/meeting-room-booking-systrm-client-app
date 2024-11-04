/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useSignupMutation } from "../../redux/api/api";
import { useAppDispatch } from "../../redux/hooks";
import { signup } from "../../redux/features/authSlice";
import { Link } from "react-router-dom";
import { Card, Form, Input, Button, Typography, Alert } from "antd";
import { FaGoogle, FaGithub } from "react-icons/fa";

const { Title, Paragraph } = Typography;

const Signup = () => {
  const [signupUser, { isLoading, error }] = useSignupMutation();
  const dispatch = useAppDispatch();

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
      const result = await signupUser(formData).unwrap(); // Use formData here
      dispatch(signup(result));
      // Handle successful signup (e.g., navigate or show success message)
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
              style={{ width: "100%" }}
            >
              Sign Up
            </Button>
          </Form.Item>

          {error && (
            <Form.Item>
              <Alert
                message="Signup failed"
                description={
                  (error as any)?.data?.message || "An error occurred"
                }
                type="error"
                showIcon
              />
            </Form.Item>
          )}
        </Form>

        <div style={{ marginTop: "24px", textAlign: "center" }}>
          <Paragraph>Or sign up with:</Paragraph>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "8px",
              marginTop: "16px",
            }}
          >
            <Button
              style={{ display: "flex", alignItems: "center" }}
              icon={<FaGoogle style={{ marginRight: "8px" }} />}
            >
              Google
            </Button>
            <Button
              style={{ display: "flex", alignItems: "center" }}
              icon={<FaGithub style={{ marginRight: "8px" }} />}
            >
              GitHub
            </Button>
          </div>
        </div>

        <div style={{ marginTop: "16px", textAlign: "center" }}>
          <Paragraph>
            Already have an account?{" "}
            <Link
              to="/login"
              style={{ color: "#1890ff", textDecoration: "underline" }}
            >
              Login
            </Link>
          </Paragraph>
        </div>
      </Card>
    </div>
  );
};

export default Signup;
