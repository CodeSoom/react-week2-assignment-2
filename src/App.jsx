import { useState } from 'react';

import Input from './Input';
import Todos from './Todos';

export default function App() {
  const [todos, setTodos] = useState([]);
  function addTodo(newTodo) {
    setTodos([...todos, newTodo]);
  }

  function deleteTodo(index) {
    setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
  }

  return (
    <div>
      <h1>To-do</h1>
      <div>
        <Input
          onClick={addTodo}
        />

        <Todos
          todos={todos}
          onClick={deleteTodo}
        />
      </div>
    </div>
  );
}
