import React, { useState } from "react";
import { Form, Input, Button, Card, Typography, Row, Col } from "antd";

const { Title } = Typography;

type UserInfo = {
  firstName: string;
  lastName: string;
  email: string;
  telephone: string;
  fax?: string;
};

const AccountInformation: React.FC = () => {
  // Initial state for user information
  const [userInfo, setUserInfo] = useState<UserInfo>({
    firstName: "Md Samsel",
    lastName: "Arfin",
    email: "arfin.cse.green.edu.bd@gmail.com",
    telephone: "01952487468",
    fax: "",
  });

  // Handle form submission
  const handleFinish = (values: UserInfo) => {
    console.log("Form values: ", values);
    setUserInfo(values);
  };

  return (
    <div style={{ padding: "50px", maxWidth: "900px", margin: "0 auto" }}>
      <Card>
        <Title level={2} style={{ textAlign: "center" }}>
          My Account Information
        </Title>

        <Form
          layout="vertical"
          onFinish={handleFinish}
          initialValues={userInfo}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="First Name"
                name="firstName"
                rules={[
                  { required: true, message: "Please input your first name!" },
                ]}
              >
                <Input placeholder="Enter your first name" />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                label="Last Name"
                name="lastName"
                rules={[
                  { required: true, message: "Please input your last name!" },
                ]}
              >
                <Input placeholder="Enter your last name" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="E-Mail"
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please input a valid email!",
                  },
                ]}
              >
                <Input placeholder="Enter your email" />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                label="Telephone"
                name="telephone"
                rules={[
                  { required: true, message: "Please input your telephone!" },
                ]}
              >
                <Input placeholder="Enter your telephone number" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Fax" name="fax">
                <Input placeholder="Enter your fax number (if any)" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item style={{ textAlign: "center" }}>
            <Button type="primary" htmlType="submit">
              Update Information
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default AccountInformation;
