import { useState } from "react";
import TodoItem from "./TodoItem";
interface Todo {
  id: number;
  text: string;
  done: boolean;
}
export default function TodoList() {
  // Todo 리스트 전체를 담을 state(배열)
  const [todos, setTodos] = useState<Todo[]>([]);

  // 새로운 Todo text를 담을 state
  const [newTodo, setNewTodo] = useState<string>("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      const updatedTodo = [
        ...todos,
        { id: Date.now(), text: newTodo, done: false },
      ];
      console.log(updatedTodo);
      setTodos(updatedTodo);
      setNewTodo("");
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Enter") addTodo();
  };

  // checkbox 선택시, todo.done을
  // false > true / true > false로 변경
  const toggleComplete = (id: number) => {
    // 
  };
  return (
    <div>
      <h4>Todo list</h4>
      <input
        type="text"
        placeholder="Todo..."
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo) => {
          return <TodoItem todo={todo} key={todo.id} />;
        })}
      </ul>
    </div>
  );
}