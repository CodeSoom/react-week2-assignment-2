import { useState } from 'react';

import Form from './Form';
import List from './List';

export default function App() {
  const [input, setInput] = useState({
    inputValue: '',
  });
  const [todos, setTodos] = useState([]);

  const { inputValue } = input;

  function handleSubmit(e) {
    e.preventDefault();
    setTodos(
      [...todos, inputValue],
    );
    setInput({
      inputValue: '',
    });
  }

  function handleChange(e) {
    setInput({
      inputValue: e.target.value,
    });
  }

  function handleDelete(index) {
    setTodos(
      [...todos.slice(0, index), ...todos.slice(index + 1)],
    );
  }

  return (
    <div>
      <p>To-do</p>
      <Form
        onSubmit={handleSubmit}
        onChange={handleChange}
        inputValue={inputValue}
      />
      <List
        todos={todos}
        onClick={handleDelete}
      />
    </div>
  );
}
