import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Card,
  Select,
  Checkbox,
  Row,
  Col,
  Typography,
} from "antd";

const { Title } = Typography;
const { Option } = Select;

interface AddressFormValues {
  firstName: string;
  lastName: string;
  company?: string;
  address1: string;
  address2?: string;
  city: string;
  postCode: string;
  country: string;
  region: string;
  defaultAddress: boolean;
}

const UserAddress: React.FC = () => {
  const [defaultAddress, setDefaultAddress] = useState(false);

  // Handle form submission with specific type
  const handleFinish = (values: AddressFormValues) => {
    console.log("Form values: ", values);
    // Handle form submission logic, e.g., sending data to backend
  };

  return (
    <div style={{ padding: "50px", maxWidth: "900px", margin: "0 auto" }}>
      <Card>
        <Title level={2} style={{ textAlign: "center" }}>
          Add New Address
        </Title>

        <p style={{ textAlign: "center" }}>
          Please enter the required details to add a new address.
        </p>

        <Form layout="vertical" onFinish={handleFinish}>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="First Name"
                name="firstName"
                rules={[
                  { required: true, message: "Please input your first name!" },
                ]}
              >
                <Input placeholder="First Name" />
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
                <Input placeholder="Last Name" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Company" name="company">
                <Input placeholder="Company" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Address 1"
                name="address1"
                rules={[
                  { required: true, message: "Please input your address!" },
                ]}
              >
                <Input placeholder="Address 1" />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item label="Address 2" name="address2">
                <Input placeholder="Address 2 (Optional)" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="City"
                name="city"
                rules={[{ required: true, message: "Please input your city!" }]}
              >
                <Input placeholder="City" />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                label="Post Code"
                name="postCode"
                rules={[
                  { required: true, message: "Please input your post code!" },
                ]}
              >
                <Input placeholder="Post Code" />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="Country"
                name="country"
                rules={[
                  { required: true, message: "Please select your country!" },
                ]}
              >
                <Select placeholder="Select your country">
                  <Option value="Bangladesh">Bangladesh</Option>
                  {/* Add other country options here */}
                </Select>
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                label="Region / State"
                name="region"
                rules={[
                  { required: true, message: "Please select your region!" },
                ]}
              >
                <Select placeholder="--- Please Select ---">
                  <Option value="Dhaka">Dhaka</Option>
                  <Option value="Chittagong">Chittagong</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="defaultAddress" valuePropName="checked">
                <Checkbox
                  checked={defaultAddress}
                  onChange={() => setDefaultAddress(!defaultAddress)}
                >
                  Default Address
                </Checkbox>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item style={{ textAlign: "center" }}>
            <Button type="primary" htmlType="submit">
              Continue
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default UserAddress;
