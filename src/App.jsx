import React, { useState } from 'react';

import Page from './Page';

export default function App() {
  const [state, setState] = useState({
    newId: 100,
    inputtedTodo: '',
    todoList: [],
  });

  const { newId, inputtedTodo, todoList } = state;

  function handleClickAddTodo() {
    if (inputtedTodo === '') {
      return;
    }

    setState({
      ...state,
      newId: newId + 1,
      inputtedTodo: '',
      todoList: [...todoList, { id: newId, title: inputtedTodo }],
    });
  }

  function handleChangeText(value) {
    setState({
      ...state,
      inputtedTodo: value,
    });
  }

  const handleClickRemoveTodo = (id) => {
    setState({
      ...state,
      todoList: todoList.filter((todo) => (todo.id !== id)),
    });
  };

  return (
    <Page
      inputtedTodo={inputtedTodo}
      todoList={todoList}
      onChangeText={handleChangeText}
      onClickAddTodo={handleClickAddTodo}
      onClickRemoveTodo={handleClickRemoveTodo}
    />
  );
}
