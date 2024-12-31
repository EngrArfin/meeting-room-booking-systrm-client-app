import React, { useState } from "react";
import { Button, Checkbox, Typography, Space, Modal, Input } from "antd";
import { format } from "date-fns";
import { useAppDispatch } from "../../../redux/hooks";
import {
  toggleTodoCompletion,
  deleteTodo,
  editTodo,
} from "../../../redux/features/todoSlice";

const { Text, Paragraph } = Typography;

type TTodoCardProps = {
  id: string;
  title: string;
  description: string;
  time: string | null;
  isCompleted?: boolean;
};

const TodoCard: React.FC<TTodoCardProps> = ({
  id,
  title,
  description,
  time,
  isCompleted = false, // Default value for isCompleted
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const dispatch = useAppDispatch();

  const formattedTime = time
    ? format(new Date(time), "yyyy-MM-dd HH:mm")
    : "No Time Set";

  const handleToggle = () => {
    dispatch(toggleTodoCompletion(id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    dispatch(
      editTodo({
        id,
        title: newTitle,
        description: newDescription,
        time,
        isCompleted,
      })
    );
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setNewTitle(title);
    setNewDescription(description);
  };

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px",
        border: "1px solid #f0f0f0",
        marginBottom: "8px",
      }}
    >
      <Checkbox checked={isCompleted} onChange={handleToggle} />
      <Text strong style={{ flex: 1, margin: "0 16px" }}>
        {title}
      </Text>
      <Paragraph style={{ flex: 2, margin: "0" }}>
        {isCompleted ? (
          <span style={{ color: "green" }}>Done</span>
        ) : (
          <span style={{ color: "red" }}>Pending</span>
        )}
      </Paragraph>
      <Text style={{ flex: 1 }}>{formattedTime}</Text>
      <Paragraph style={{ flex: 2, margin: "0" }}>{description}</Paragraph>
      <Space>
        <Button type="primary" danger onClick={handleDelete}>
          Delete
        </Button>
        <Button
          onClick={handleEdit}
          type="default"
          style={{ backgroundColor: "#00bfff", color: "#fff" }}
        >
          Edit
        </Button>
      </Space>
      <Modal
        title="Edit Todo"
        visible={isEditing}
        onCancel={handleCancelEdit}
        onOk={handleSaveEdit}
      >
        <Input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="Title"
        />
        <Input.TextArea
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
          placeholder="Description"
          rows={4}
        />
      </Modal>
    </div>
  );
};

export default TodoCard;

/* 
import { Button, Checkbox, Typography, Space } from "antd";
import { format } from "date-fns";
import { useAppDispatch } from "../../../redux/hooks";
import {
  toggleTodoCompletion,
  deleteTodo,
  editTodo,
} from "../../../redux/features/todoSlice";

const { Text, Paragraph } = Typography;

type TTodoCardProps = {
  id: string;
  title: string;
  description: string;
  time: string | null;
  isCompleted?: boolean;
};

const TodoCard = ({
  id,
  title,
  description,
  time,
  isCompleted,
}: TTodoCardProps) => {
  const dispatch = useAppDispatch();

  const formattedTime = time
    ? format(new Date(time), "yyyy-MM-dd HH:mm")
    : "No Time Set";

  const handleToggle = () => {
    dispatch(toggleTodoCompletion(id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };
  const handleEdit = () => {
    dispatch(editTodo(id));
  };

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: "8px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px",
        border: "1px solid #f0f0f0",
      }}
    >
      <Checkbox checked={isCompleted} onChange={handleToggle} />
      <Text strong style={{ flex: 1, margin: "0 16px" }}>
        {title}
      </Text>
      <Paragraph style={{ flex: 2, margin: "0" }}>
        {isCompleted ? (
          <p
            style={{
              color: "red",
            }}
          >
            Done
          </p>
        ) : (
          <p
            style={{
              color: "green",
            }}
          >
            pending
          </p>
        )}
      </Paragraph>
      <Text style={{ flex: 1 }}>{formattedTime}</Text>
      <Paragraph style={{ flex: 2, margin: "0" }}>{description}</Paragraph>
      <Space>
        <Button type="primary" danger onClick={handleDelete}>
          Delete
        </Button>
        <Button
          onClick={handleEdit}
          type="default"
          style={{ backgroundColor: "#00bfff", color: "#fff" }}
        >
          Edit
        </Button>
      </Space>
    </div>
  );
};

export default TodoCard;
 */
