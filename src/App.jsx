import { useState } from 'react';

import { nanoid } from 'nanoid';

import Field from './Field';
import Todos from './Todos';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState({
    id: '',
    text: '',
  });

  function addTodo(newTodo) {
    setTodos([...todos, newTodo]);
  }

  function deleteTodo(id) {
    setTodos(todos.filter((item) => item.id !== id));
  }

  function handleChange(input) {
    setTodo({
      id: nanoid(),
      text: input,
    });
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
