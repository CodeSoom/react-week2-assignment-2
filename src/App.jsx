import React, { useState } from 'react';

import TodoPage from './TodoPage';

export default function App() {
  const [state, setState] = useState({
    todoTitle: '',
    todos: [
    ],
  });

  const { todoTitle, todos } = state;

  const handleTodoAdd = () => {
    setState({
      todoTitle: '',
      todos: [...todos, {
        id: new Date().toISOString(),
        title: todoTitle.trim(),
      }],
    });
  };

  const handleTodoDelete = (id) => {
    setState({
      ...state,
      todos: todos.filter(({ id: todoId }) => todoId !== id),
    });
  };

  const handleTodoChange = (title) => {
    setState({
      ...state,
      todoTitle: title,
    });
  };

  return (
    <TodoPage
      todos={todos}
      onFormSubmit={handleTodoAdd}
      onListItemClick={handleTodoDelete}
      todoTitle={todoTitle}
      onInputChange={handleTodoChange}
    />
  );
}
