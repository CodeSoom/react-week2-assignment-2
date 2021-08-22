import React, { useState } from 'react';
import uuid from 'react-uuid';

import Page from './Page';

export default function App() {
  const [state, setState] = useState({
    inputText: '',
    todoList: [],
  });

  const { inputText, todoList } = state;

  function handleChangeInput(event) {
    const { value } = event.target;
    setState({
      ...state,
      inputText: value,
    });
  }

  function handleAddTodo() {
    setState({
      ...state,
      inputText: '',
      todoList: [
        ...todoList,
        {
          id: uuid(),
          contents: inputText,
        },
      ],
    });
  }

  function handleDeleteTodo(id) {
    setState({
      ...state,
      todoList: todoList.filter((todo) => todo.id !== id),
    });
  }

  return (
    <Page
      inputText={inputText}
      todoList={todoList}
      onChangeInput={handleChangeInput}
      onClickAdd={handleAddTodo}
      onClickDelete={handleDeleteTodo}
    />
  );
}
