import { useState } from 'react';

import Field from './Field';
import Todos from './Todos';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  function addTodo(newTodo) {
    setTodos([...todos, newTodo]);
  }

  function deleteTodo(index) {
    setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
  }

  function handleChange(input) {
    setTodo(input);
  }

  return (
    <div>
      <h1>To-do</h1>
      <div>
        <Field
          todo={todo}
          onChange={handleChange}
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
