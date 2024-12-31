import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Todo = {
  id: string;
  title: string;
  description: string;
  time: string | null;
  isCompleted: boolean;
};

type InitialState = {
  todos: Todo[];
};

const initialState: InitialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    },
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    toggleTodoCompletion: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isCompleted = !todo.isCompleted;
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action: PayloadAction<Todo>) => {
      const index = state.todos.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if (index !== -1) {
        state.todos[index] = action.payload;
      }
    },
  },
});

export const { setTodos, addTodo, toggleTodoCompletion, deleteTodo, editTodo } =
  todoSlice.actions;

export default todoSlice.reducer;

/* import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type TTodo = {
  id: string;
  title: string;
  description: string;
  time: string | null;
  isCompleted?: boolean;
};
type TInitialState = {
  todos: TTodo[];
};
const initialState: TInitialState = {
  todos: [],
};
const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isCompleted: false });
    },
    toggleTodoCompletion: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isCompleted = !todo.isCompleted;
      }
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    editTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});
export const { addTodo, toggleTodoCompletion, deleteTodo, editTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
 */
