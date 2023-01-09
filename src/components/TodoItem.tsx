import React from "react";
import { Todo } from "../types";

interface ITodoItem extends Todo {
  children?: React.ReactNode;
  toggleTodo: (id: Todo["id"]) => void;
  removeTodo: (id: Todo["id"]) => void;
}

const TodoItem = ({
  id,
  title,
  completed,
  toggleTodo,
  removeTodo,
}: ITodoItem) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodo(id)}
      />
      <span>{title}</span>
      <span onClick={() => removeTodo(id)}>&times;</span>
      {/* {children} */}
    </li>
  );
};

export default TodoItem;
