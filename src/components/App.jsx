import React, { useState } from 'react';

import TodoListPage from './TodoListPage';
import { generateId } from '../common/utils';

export default function App() {
  const [state, setState] = useState({
    todoItems: [],
  });

  const { todoItems } = state;

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
