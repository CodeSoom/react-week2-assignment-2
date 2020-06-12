import React, { useState } from 'react';

import TodoApp from './TodoApp';

function makeRandomId(todo) {
  return ([...todo].reduce((acc, v) => acc + v.charCodeAt(0), 0)
        + Math.floor(Math.random() * 999)
        + todo[0]);
}

export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleRemoveTodoItem = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();

    if (input === '') {
      return;
    }

    setTodos([
      ...todos,
      {
        id: makeRandomId(input),
        input,
      },
    ]);

    setInput('');
  };

  return (
    <TodoApp
      todos={todos}
      input={input}
      onRemoveTodoItem={handleRemoveTodoItem}
      onInputChange={handleInputChange}
      onInputSubmit={handleInputSubmit}
    />
  );
}
