import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const Todos = useSelector((state) => state.todos);

  return (
    <ul>
      {Todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} index={index} />
      ))}
    </ul>
  );
};

export default TodoList;
