import React, { useState } from 'react';

import TodoPage from './TodoPage';

const shortId = require('shortid');

export default function App() {
  const [state, setState] = useState({
    inputValue: '',
    todoList: [],
  });

  const { inputValue, todoList } = state;

  const handleSubmitAddTodo = (e) => {
    e.preventDefault();
    setState({
      ...state,
      inputValue: '',
      todoList: [...todoList, { id: shortId.generate(), todo: inputValue }],
    });
  };

  const handleChangeInput = (e) => {
    setState({ ...state, inputValue: e.target.value });
  };

  const handleClickRemoveTodo = (removeId) => {
    setState({
      ...state,
      todoList: todoList.filter((item) => removeId !== item.id),
    });
  };

  return (
    <TodoPage
      state={state}
      onSubmitAddTodo={handleSubmitAddTodo}
      onChangeInput={handleChangeInput}
      onClickRemove={handleClickRemoveTodo}
    />
  );
}
