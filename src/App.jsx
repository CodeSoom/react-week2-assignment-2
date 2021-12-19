import React, { useState } from 'react';
import Page from './Page';

export default function App() {
  const [state, setState] = useState({
    todos: [],
    inputText: '',
  });
  const { todos, inputText } = state;

  const onEdit = (e) => {
    setState({ ...state, inputText: e.target.value });
  };

  const onClickAdd = () => {
    setState({
      ...state,
      inputText: '',
      todos: [...todos, { key: todos.length + 1, text: inputText }],
    });
  };

  const onClickFinish = (key) => {
    setState({
      ...state,
      todos: [...todos.filter((item) => item.key !== key)],
    });
  };

  return (
    <Page
      todos={todos}
      inputText={inputText}
      onEdit={onEdit}
      onClickAdd={onClickAdd}
      onClickFinish={onClickFinish}
    />
  );
}
