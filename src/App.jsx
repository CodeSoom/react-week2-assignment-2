import React, { useState } from 'react';
import uuid from 'react-uuid';

import InputTodo from './InputTodo';
import TodoList from './TodoList';

export default function App() {
  const [state, setState] = useState({
    todos: [],
    todo: '',
  });

  const { todos, todo } = state;

  function handleAddClick() {
    setState({
      todos: [...todos, { id: uuid(), content: todo }],
      todo: '',
    });
  }

  function handleInputChange(value) {
    setState({
      todos,
      todo: value,
    });
  }

  function handleFinishClick(finishedTodo) {
    setState({
      todos: todos.filter((item) => item.id !== finishedTodo.id),
      todo,
    });
  }

  return (
    <>
      <h3>To-do</h3>
      <InputTodo onSubmit={handleAddClick} onChange={handleInputChange} todo={todo} />
      <TodoList todos={todos} onClick={handleFinishClick} />
    </>
  );
}
