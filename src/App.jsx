import { useState } from 'react';

import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (content) => {
    setTodos([
      ...todos,
      {
        id: Date.now(),
        content,
      },
    ]);
  };

  const handleComplete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <h1>To-do</h1>
      <AddTodoForm addTodo={addTodo} />
      <br />
      <TodoList todos={todos} handleComplete={handleComplete} />
    </>
  );
}
