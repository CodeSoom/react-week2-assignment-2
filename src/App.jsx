import React, { useState } from 'react';
import Page from './Page';

export default function App() {
  const [state, setState] = useState([]);

  function handleClickAdd(newTodo) {
    setState([...state, newTodo]);
  }

  function handleClickComplete(completeTodo) {
    setState(state.filter((t) => t !== completeTodo));
  }

  return (
    <Page
      todo={state}
      handleClickAdd={handleClickAdd}
      handleClickComplete={handleClickComplete}
    />
  );
}
