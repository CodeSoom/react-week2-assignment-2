import React, { useState } from 'react';

import TodoListPage from './TodoListPage';

export default function App() {
  const [state, setState] = useState({
    todoItems: [],
  });

  const { todoItems } = state;
  const id = () => Math.random().toString(36).substr(2, 10);

  const handleAddTodo = (todoText) => {
    const todoItem = { id: id(), todoText };
    setState({ todoItems: [...todoItems, todoItem] });
  };

  const handleClickCompletedButton = (todoId) => {
    setState({
      todoItems: todoItems.filter((todoItem) => todoItem.id !== todoId),
    });
  };

  return (
    <TodoListPage
      todoItems={todoItems}
      onAddTodo={handleAddTodo}
      onClick={handleClickCompletedButton}
    />
  );
}
