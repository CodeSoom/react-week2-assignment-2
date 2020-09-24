import React, { useState } from 'react';

import UpdatableTodoList from './UpdatableTodoList';

export default function App() {
  const [state, setState] = useState({
    newTodo: '',
    todos: [
    ],
  });

  const { newTodo, todos } = state;

  const handleTodosAdd = () => {
    setState({
      newTodo: '',
      todos: [...todos, {
        id: new Date().toISOString(),
        name: newTodo,
      }],
    });
  };

  const handleTodosDelete = (id) => {
    setState({
      ...state,
      todos: todos.filter(({ id: todoId }) => todoId !== id),
    });
  };

  const handleNewTodoChange = (source) => {
    setState({
      ...state,
      newTodo: source,
    });
  };

  return (
    <UpdatableTodoList
      todos={todos}
      onTodosAdd={handleTodosAdd}
      onTodosDelete={handleTodosDelete}
      newTodo={newTodo}
      onNewTodoChange={handleNewTodoChange}
    />
  );
}
