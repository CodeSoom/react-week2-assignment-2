import React, { useState } from 'react';

import TodoListPage from './TodoListPage';

export default function App() {
  const [state, setState] = useState({
    todoItems: [],
  });

  const { todoItems } = state;
  const generateId = () => Math.random().toString(36).substr(2, 10);

  const handleAddTodo = (todoText) => {
    const todoItem = { id: generateId(), todoText };
    setState({ todoItems: [...todoItems, todoItem] });
  };

  const handleClickComplete = (todoId) => {
    setState({
      todoItems: todoItems.filter((todoItem) => todoItem.id !== todoId),
    });
  };

  return (
    <TodoListPage
      todoItems={todoItems}
      onAddTodo={handleAddTodo}
      onClickComplete={handleClickComplete}
    />
  );
}
