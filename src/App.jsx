import React, { useState } from 'react';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default function App() {
  const [state, setState] = useState({
    userText: '',
    todos: [],
    todoId: 0,
  });

  const { userText, todos, todoId } = state;

  const handleChangeInput = (e) => {
    setState({
      ...state,
      userText: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setState({
      userText: '',
      todos: [...todos, {
        id: todoId,
        text: userText,
        done: false,
      }],
      todoId: todoId + 1,
    });
  };

  const handleClickDoneButton = (id) => {
    setState({
      ...state,
      todos: todos.filter((todo) => todo.id !== id),
    });
  };

  return (
    <>
      <h1>To-do</h1>
      <TodoForm
        userText={userText}
        onChange={handleChangeInput}
        onSubmit={handleSubmit}
      />
      <TodoList
        todos={todos}
        onClick={handleClickDoneButton}
      />
    </>
  );
}
