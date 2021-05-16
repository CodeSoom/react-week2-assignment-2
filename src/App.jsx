import React, { useState } from 'react';

import Page from './Page';

export default function App() {
  const [state, setState] = useState({
    todo: '',
    todoList: [],
  });

  const { todo, todoList } = state;

  function handleClickAddTodo() {
    if (todo === '') {
      return;
    }

    setState({
      ...state,
      todo: '',
      todoList: [...todoList, todo],
    });
  }

  function handleChangeText(value) {
    setState({
      ...state,
      todo: value,
    });
  }

  const handleClickRemoveTodo = (key) => {
    setState({
      ...state,
      todoList: todoList.filter((todoItem, i) => (`${todoItem}_${i}` !== key)),
    });
  };

  return (
    <Page
      todo={todo}
      todoList={todoList}
      onChangeText={handleChangeText}
      onClickAddTodo={handleClickAddTodo}
      onClickRemoveTodo={handleClickRemoveTodo}
    />
  );
}
