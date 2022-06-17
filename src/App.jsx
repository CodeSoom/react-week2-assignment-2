import { useState } from 'react';

import Todos from './Todos';
import TodoForm from './TodoForm';

export default function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    const newTodos = [...todos, todo];

    setTodos(newTodos);
  }

  function handleSubmitTodoForm(title = '') {
    const todo = {
      id: Date.now(),
      title,
    };

    addTodo(todo);
  }

  return (
    <div>
      <h1>To-do</h1>

      <TodoForm onSubmit={handleSubmitTodoForm} />

      <Todos todos={todos} />
    </div>
  );
}
