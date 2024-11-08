import { Card, Col, Row, Table, Tag } from "antd";
import { Footer } from "antd/es/layout/layout";

const RoomManagemen = () => {
  // Sample data for product management table
  const productColumns = [
    {
      title: "Product",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: "Stock",
      dataIndex: "stock",
      key: "stock",
      render: (stock: number) => (
        <Tag color={stock > 0 ? "green" : "red"}>
          {stock > 0 ? "In Stock" : "Out of Stock"}
        </Tag>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <div>
          <a style={{ marginRight: "10px" }}>Edit</a>
          <a>Delete</a>
        </div>
      ),
    },
  ];

  const productData = [
    {
      key: "1",
      name: "Custom Mechanical Keyboard",
      brand: "Keychron",
      stock: 12,
      price: "$120",
    },
    {
      key: "2",
      name: "RGB Mechanical Keyboard",
      brand: "Corsair",
      stock: 0,
      price: "$150",
    },
  ];
  return (
    <div>
      <Row gutter={16} style={{ marginTop: "20px" }}>
        <Col span={24}>
          <Card title="Product Management" bordered={false}>
            <Table columns={productColumns} dataSource={productData} />
          </Card>
        </Col>
      </Row>
      {/* Footer */}
      <Footer style={{ textAlign: "center" }}>
        Mechanical Keyboard Admin Dashboard ©2024 Created by Samsel Arfin
      </Footer>
    </div>
  );
};

export default RoomManagemen;
