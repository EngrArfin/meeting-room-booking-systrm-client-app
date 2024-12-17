/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Form,
  Input,
  Button,
  Typography,
  notification,
  Alert,
  Row,
  Col,
} from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { useLoginMutation } from "../../redux/api/api";
import { setUser } from "../../redux/features/authSlice";
import { verifyToken } from "../../utils/verifyToken";
import loginPhoto from "../../assets/images/card11.jpg";

const { Title, Text } = Typography;

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loginUser, { isLoading, isError, error }] = useLoginMutation();

  // Using Form.useForm to manage form state
  const [form] = Form.useForm();

  const onFinish = async (values: { email: string; password: string }) => {
    try {
      const result = await loginUser(values).unwrap();
      localStorage.setItem("token", result.accessToken);
      localStorage.setItem("user", JSON.stringify(result.data));

      // Verify token
      const user = verifyToken(result.accessToken);
      if (!user) throw new Error("Invalid token.");

      dispatch(setUser({ ...result, user, token: result.accessToken }));
      navigate(result.data.role === "admin" ? "/admin" : "/");
    } catch (err: any) {
      // Display error notification
      notification.error({
        message: "Login Failed",
        description: err?.message || "An error occurred during login.",
      });
    }
  };

  // Function to set admin credentials in the form
  const setAdminCredentials = () => {
    form.setFieldsValue({
      email: "arfin191@gmail.com",
      password: "Arfin191",
    });
  };

  // Function to set user credentials in the form
  const setUserCredentials = () => {
    form.setFieldsValue({
      email: "user191@gmail.com",
      password: "User191",
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f0f2f5",
        padding: "0 20px",
      }}
    >
      <Row
        gutter={[16, 16]}
        style={{
          width: "100%",
          maxWidth: "1200px",
          height: "100vh",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Left Side: Image */}
        <Col
          xs={0}
          sm={0}
          md={12}
          style={{
            backgroundImage: `url(${loginPhoto})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            borderRadius: "8px",
          }}
        ></Col>

        {/* Right Side: Form */}
        <Col
          xs={24}
          sm={24}
          md={12}
          style={{
            background: "#fff",
            padding: "40px",
            borderRadius: "8px",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Title
            level={3}
            style={{
              textAlign: "center",
              color: "#333",
              marginBottom: "20px",
              fontSize: "28px",
              fontWeight: "700",
            }}
          >
            Welcome Login
          </Title>
          <Text
            style={{
              display: "block",
              textAlign: "center",
              marginBottom: "30px",
              color: "#555",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            Please log in to your account
          </Text>

          {/* Buttons for Admin/User Credentials */}
          <Row gutter={16} style={{ marginBottom: "20px" }}>
            <Col span={12}>
              <Button block onClick={setAdminCredentials}>
                Admin Credentials
              </Button>
            </Col>
            <Col span={12}>
              <Button block onClick={setUserCredentials}>
                User Credentials
              </Button>
            </Col>
          </Row>

          {/* Login Form */}
          <Form layout="vertical" form={form} onFinish={onFinish}>
            <Form.Item
              label="Email Address"
              name="email"
              rules={[{ required: true, message: "Please input your email!" }]}
            >
              <Input
                placeholder="Enter your email"
                style={{
                  borderRadius: "8px",
                  padding: "10px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                }}
              />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password
                placeholder="Enter your password"
                style={{
                  borderRadius: "8px",
                  padding: "10px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                }}
              />
            </Form.Item>

            <Button
              type="primary"
              htmlType="submit"
              block
              loading={isLoading}
              style={{
                background: "#007BFF",
                color: "#fff",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: "600",
                marginBottom: "15px",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#0077B6",
                borderColor: "#0077B6",
              }}
            >
              Log In
            </Button>

            {/* Display error message if login fails */}
            {isError && (
              <Alert
                message="Login Failed"
                description={
                  (error as any).data?.message || "An error occurred."
                }
                type="error"
                showIcon
                style={{ marginBottom: "15px" }}
              />
            )}

            <Text
              style={{
                display: "block",
                textAlign: "center",
                marginTop: "15px",
              }}
            >
              Don't have an account? <NavLink to="/signup">Sign Up</NavLink>
            </Text>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
