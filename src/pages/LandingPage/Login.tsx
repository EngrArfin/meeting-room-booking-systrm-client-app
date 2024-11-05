import { Form, Input, Button, Typography, Row, Col, Card } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { useAppDispatch } from "../../redux/hooks";
import { useLoginMutation } from "../../redux/api/api";
import { CSSProperties, useEffect, useState } from "react";

interface ErrorResponse {
  message?: string;
}

interface LoginValues {
  email: string;
  password: string;
  remember: boolean;
}

const { Title } = Typography;

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isMediumOrSmallDevice, setIsMediumOrSmallDevice] = useState(false);

  const [loginUser, { isLoading, isError, error }] = useLoginMutation();

  useEffect(() => {
    const handleResize = () => {
      setIsMediumOrSmallDevice(window.innerWidth <= 1024); // Set breakpoint at 1024px (medium and small devices)
    };

    handleResize(); // Check size on component mount
    window.addEventListener("resize", handleResize); // Adjust size on window resize

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onFinish = async (values: LoginValues) => {
    try {
      const result = await loginUser(values).unwrap();
      console.log("Login Successful:", result);

      localStorage.setItem("token", result.token);
      const userResponse = await fetchUserData(result.token);
      if (userResponse) {
        dispatch(setUser({ user: userResponse, token: result.token }));
      }

      navigate("/"); /* /user/dashboard */
    } catch (err) {
      console.error("Login Failed:", err);
    }
  };

  const fetchUserData = async (token: string) => {
    try {
      const response = await fetch("http://localhost:5000/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error;
    }
  };

  const overlayStyle: CSSProperties = {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100%",
    padding: "40px",
  };

  return (
    <div>
      <div>
        <div style={overlayStyle}>
          <Row
            justify="center"
            align="middle"
            style={{ height: "90vh", backgroundColor: "#f0f2f5" }}
          >
            <Col xs={22} sm={16} md={12} lg={8}>
              <Title
                level={3}
                style={{
                  textAlign: "center",
                  marginBottom: "30px",
                  color: "red",
                  fontSize: "40px",
                }}
              >
                Login Account
              </Title>
              <Card
                style={{
                  padding: "40px 50px",
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
                  borderRadius: "10px",
                  background: "#ffffff",
                }}
              >
                <Form
                  name="loginForm"
                  layout="vertical"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                >
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      { required: true, message: "Please input your email!" },
                    ]}
                  >
                    <Input type="email" placeholder="Enter your email" />
                  </Form.Item>

                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password placeholder="Enter your password" />
                  </Form.Item>

                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      block
                      loading={isLoading}
                    >
                      Login
                    </Button>
                  </Form.Item>

                  {isError && (
                    <div style={{ color: "red" }}>
                      {error && "data" in error
                        ? (error as FetchBaseQueryError).data // Type assertion
                          ? (error.data as ErrorResponse).message ||
                            "Login failed"
                          : "Login failed"
                        : "Login failed"}
                    </div>
                  )}

                  <div style={{ textAlign: "center" }}>
                    <NavLink to="/register">Register Now</NavLink>
                  </div>
                </Form>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Login;
