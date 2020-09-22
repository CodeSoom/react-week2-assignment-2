import React, { useState } from 'react';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

export default function App() {
  const [state, setState] = useState({
    todoItems: [],
  });

  const { todoItems } = state;
  const id = () => Math.random().toString(36).substr(2, 10);

  const onAddTodo = (todoText) => {
    const todoItem = { id: id(), todoText };
    setState({ todoItems: [...todoItems, todoItem] });
  };

  return (
    <div>
      <h1>To-do</h1>
      <TodoInput onAddTodo={onAddTodo} />
      <TodoList todoItems={todoItems} />
    </div>
  );
}
