import React, { useEffect } from "react";
import { Card } from "antd";
import AddToDo from "./AddToDo";
import TodoCard from "./TodoCard";
import { useGetTodosQuery } from "../../../redux/api/api";
import { useAppDispatch } from "../../../redux/hooks";
import { setTodos } from "../../../redux/features/todoSlice";

interface TTodo {
  id: string;
  title: string;
  description: string;
  time: string | null;
  isCompleted: boolean;
}

const TodoData: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    data: todos,
    isLoading,
    isError,
  } = useGetTodosQuery(undefined); /* { pollingInterval: 1000 } */

  useEffect(() => {
    if (todos) {
      dispatch(setTodos(todos)); // Dispatch the todos when data is fetched
    }
  }, [todos, dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (isError) {
    return <p>Error fetching todos...</p>;
  }

  return (
    <div style={{ padding: "16px" }}>
      <Card
        style={{
          background: "linear-gradient(to bottom right, #f0f2f5, #d6e4ff)",
          borderRadius: "16px",
          padding: "24px",
        }}
      >
        <AddToDo />
        {todos?.map(
          (
            item: TTodo // Type the 'item' as TTodo
          ) => (
            <TodoCard
              key={item.id}
              id={item.id}
              title={item.title}
              time={item.time}
              description={item.description}
              isCompleted={item.isCompleted}
            />
          )
        )}
      </Card>
    </div>
  );
};

export default TodoData;

/* import { Card } from "antd";
import TodoCard from "./TodoCard";
import AddToDo from "./AddToDo";
import { useAppSelector } from "../../../redux/hooks";

const TodoData = () => {
  const { todos } = useAppSelector((state) => state.todos);
  return (
    <div style={{ padding: "16px" }}>
      <Card
        style={{
          background: "linear-gradient(to bottom right, #f0f2f5, #d6e4ff)",
          borderRadius: "16px",
          padding: "24px",
        }}
        bodyStyle={{ padding: "0" }}
      >
        <div>
          <AddToDo />
        </div>

        <Card
          style={{
            backgroundColor: "#fff",
            borderRadius: "8px",
            padding: "16px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
          bodyStyle={{ padding: "0" }}
        >
          {todos.map((item) => (
            <TodoCard
              key={item.id}
              id={item.id}
              title={item.title}
              time={item.time}
              description={item.description}
              isCompleted={item.isCompleted}
            />
          ))}
        </Card>
      </Card>
    </div>
  );
};

export default TodoData;
 */
