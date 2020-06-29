import React, { useState } from 'react';

import Page from './page';

const initialState = {
  newId: 1,
  todoTitle: '',
  todos: [],
};

export default function App() {
  const [state, setState] = useState(initialState);
  const { newId, todoTitle, todos } = state;

  function handleChangeTodo(event) {
    setState({
      ...state,
      todoTitle: event.target.value,
    });
  }

  function handleClickCreate() {
    setState({
      newId: newId + 1,
      todoTitle: '',
      todos: [...todos, { id: newId, title: todoTitle }],
    });
  }

  function handleClickComplete(id) {
    setState({
      ...state,
      todos: todos.filter((todo) => todo.id !== id),
    });
  }

  return (
    <Page
      todoTitle={todoTitle}
      todos={todos}
      onChangeTodo={handleChangeTodo}
      onClickCreate={handleClickCreate}
      onClickComplete={handleClickComplete}
    />
  );
}
