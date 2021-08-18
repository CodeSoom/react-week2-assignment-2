import { useState, useRef } from 'react';

import Form from './Form';
import List from './List';

export default function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const todoID = useRef(0);

  function handleSubmit(e) {
    e.preventDefault();
    setTodos(
      [...todos,
        {
          id: todoID.current,
          text: input,
        }],
    );
    todoID.current += 1;
    setInput('');
  }

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleDelete(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      <p>To-do</p>
      <Form
        onSubmit={handleSubmit}
        onChange={handleChange}
        input={input}
      />
      <List
        todos={todos}
        onClick={handleDelete}
      />
    </div>
  );
}
