/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Input, Button, Typography, Row, Col, Card } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { useLoginMutation } from "../../redux/api/api";
import { setUser } from "../../redux/features/authSlice";
import { CSSProperties } from "react";
import { verifyToken } from "../../utils/verifyToken";

const { Title } = Typography;

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loginUser, { isLoading, isError, error }] = useLoginMutation();

  const onFinish = async (values: { email: string; password: string }) => {
    try {
      const result = await loginUser(values).unwrap();
      console.log("Login Successful:", result);
      localStorage.setItem("token", result.accessToken);
      localStorage.setItem("user", JSON.stringify(result.data));
      const user = verifyToken(result.accessToken);
      console.log(user);
      dispatch(
        setUser({
          ...result,
          user,
          token: result.accessToken,
        })
      );

      if (result.data.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (err) {
      console.error("Login Failed:", err);
    }
  };

  const overlayStyle: CSSProperties = {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100%",
    padding: "40px",
  };

  return (
    <div style={overlayStyle}>
      <Row
        justify="center"
        align="middle"
        style={{ height: "100vh", backgroundColor: "#f0f2f5" }}
      >
        <Col xs={22} sm={16} md={12} lg={8}>
          <Title
            level={3}
            style={{
              textAlign: "center",
              marginBottom: "30px",
              color: "red",
              fontSize: "36px",
            }}
          >
            Login to Your Account
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
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password placeholder="Enter your password" />
              </Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                loading={isLoading}
                style={{
                  background: "linear-gradient(135deg, #FF6F61, #FF8A00)",
                  borderColor: "transparent",
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontWeight: "600",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(135deg, #FF8A00, #FF6F61)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "linear-gradient(135deg, #FF6F61, #FF8A00)";
                }}
              >
                Login
              </Button>
              {isError && (
                <div style={{ color: "red" }}>
                  {(error as any).data?.message || "An error occurred"}
                </div>
              )}
              <div style={{ marginTop: "16px", textAlign: "center" }}>
                I have no account? <NavLink to="/signup">Sign Up</NavLink>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
