import React, { useState } from 'react';

import TodoApp from './TodoApp';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const handleAddTodoItem = ({ todo }) => {
    setTodos([
      ...todos,
      {
        id: [...todo].reduce((acc, v) => acc + v.charCodeAt(0), 0)
        + Math.floor(Math.random() * 999)
        + todo[0],
        todo,
      },
    ]);
  };

  const handleRemoveTodoItem = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    handleAddTodoItem({ todo: input });
    setInput('');
  };

  return (
    <TodoApp
      todos={todos}
      input={input}
      onAddTodoItem={handleAddTodoItem}
      onRemoveTodoItem={handleRemoveTodoItem}
      onInputChange={handleInputChange}
      onInputSubmit={handleInputSubmit}
    />
  );
}
