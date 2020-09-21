import React, { useState } from 'react';

import TodoInput from './TodoInput';

export default function TodoApp() {
  const [state, setState] = useState({
    todoItems: [],
  });

  const { todoItems } = state;

  const onAddTodo = (todoText) => {
    const todoItem = { id: todoItems.length + 1, todoText };
    setState({ todoItems: [...todoItems, todoItem] });
  };

  return (
    <div>
      <h1>To-do</h1>
      <TodoInput onAddTodo={onAddTodo} />
    </div>
  );
}
