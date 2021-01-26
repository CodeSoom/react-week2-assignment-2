import React, { useState } from 'react';

import TodoInsert from './TodoInsert';
import TodoList from './TodoList';

export default function App() {
  const [userInput, setUserInput] = useState('');
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos(todos.concat({
      id: +new Date(),
      text: userInput,
    }));
    setUserInput('');
  };

  return (
    <>
      <h1>To-do</h1>
      <TodoInsert
        userInput={userInput}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
      <TodoList todos={todos} />
    </>
  );
}
