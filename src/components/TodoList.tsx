import { Todo } from "../types";
import TodoItem from "./TodoItem";

interface ITodoList {
  list: Todo[];
  toggleTodo: (id: Todo["id"]) => void;
  removeTodo: (id: Todo["id"]) => void;
}

const TodoList = ({ list, toggleTodo, removeTodo }: ITodoList) => {
  return (
    <ul>
      {list.map((todo) => (
        <TodoItem
          key={todo.id}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
          {...todo}
        />
      ))}
    </ul>
  );
};

export default TodoList;
