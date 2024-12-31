import React, { useState } from "react";
import { Button, Form, Input, Modal, Space, Dropdown, Menu } from "antd";
import { useAppDispatch } from "../../../redux/hooks";
import { useAddTodoMutation } from "../../../redux/api/api";
import { addTodo } from "../../../redux/features/todoSlice";
import { v4 as uuidv4 } from "uuid";

const AddToDo: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [addTodoMutation] = useAddTodoMutation();
  const dispatch = useAppDispatch();

  const showModal = () => setIsModalOpen(true);
  const handleCancel = () => setIsModalOpen(false);

  const handleFormSubmit = async (values: {
    title: string;
    description: string;
    time: string | null;
  }) => {
    const { title, description, time } = values;

    const newTodo = {
      id: uuidv4(),
      title,
      description,
      time,
      isCompleted: false,
    };

    await addTodoMutation(newTodo);
    dispatch(addTodo(newTodo));
    setIsModalOpen(false);
  };

  const filterMenu = (
    <Menu>
      <Menu.Item key="1">High</Menu.Item>
      <Menu.Item key="2">Medium</Menu.Item>
      <Menu.Item key="3">Low</Menu.Item>
    </Menu>
  );

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "16px",
        }}
      >
        <Button type="primary" onClick={showModal}>
          Add To Do
        </Button>
        <Dropdown overlay={filterMenu} trigger={["click"]}>
          <Button type="default">
            <Space>Filter</Space>
          </Button>
        </Dropdown>
      </div>
      <Modal
        title="Add Todo"
        visible={isModalOpen}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="addTodo"
          onFinish={handleFormSubmit}
          layout="vertical"
          initialValues={{ time: null }}
        >
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: "Please enter a title!" }]}
          >
            <Input placeholder="Enter title" />
          </Form.Item>

          <Form.Item name="description" label="Description">
            <Input.TextArea placeholder="Enter description" />
          </Form.Item>

          <Form.Item name="time" label="Time">
            <Input type="datetime-local" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add Todo
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default AddToDo;

/* import { v4 as uuidv4 } from "uuid"; 
import React, { useState } from "react";
import {
  Button,
  Form,
  Input,
  Modal,
  Dropdown,
  Menu,
  Space,
  DatePicker,
} from "antd";
import { useAppDispatch } from "../../../redux/hooks";
import { addTodo } from "../../../redux/features/todoSlice";

const AddToDo: React.FC = () => {
  const dispatch = useAppDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (values: any) => {
    const { title, description, time } = values;
    const id = uuidv4(); 
    const formattedTime = time ? time.format("YYYY-MM-DD HH:mm") : null;
    dispatch(addTodo({ id, title, description, time: formattedTime }));
    setIsModalOpen(false);
  };

  const filterMenu = (
    <Menu>
      <Menu.Item key="1">High</Menu.Item>
      <Menu.Item key="2">Medium</Menu.Item>
      <Menu.Item key="3">Low</Menu.Item>
    </Menu>
  );

  return (
    <div style={{ padding: "16px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "16px",
        }}
      >
        <Button type="primary" onClick={showModal}>
          Add To Do
        </Button>
        <Dropdown overlay={filterMenu} trigger={["click"]}>
          <Button type="default">
            <Space>Filter</Space>
          </Button>
        </Dropdown>
      </div>

      <Modal
        title="Add New To Do"
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        centered
        destroyOnClose
      >
        <Form layout="vertical" onFinish={handleFormSubmit}>
          <Form.Item
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please enter the title!" }]}
          >
            <Input placeholder="Enter title" />
          </Form.Item>

          <Form.Item
            label="Time"
            name="time"
            rules={[{ required: true, message: "Please select the time!" }]}
          >
            <DatePicker
              showTime
              style={{ width: "100%" }}
              format="YYYY-MM-DD HH:mm"
            />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: "Please enter a description!" }]}
          >
            <Input.TextArea rows={4} placeholder="Enter description" />
          </Form.Item>

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: "8px",
            }}
          >
            <Button onClick={handleCancel}>Cancel</Button>
            <Button type="primary" htmlType="submit">
              Save To Do
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default AddToDo;
 */
