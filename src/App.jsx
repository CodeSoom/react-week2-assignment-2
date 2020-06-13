import React, { useState } from 'react';

import TodoPage from './TodoPage';

export default function App() {
  const [state, setState] = useState({
    inputValue: '',
    todoList: [],
  });

  const { inputValue, todoList } = state;

  const generateRandom = () => Math.random().toString(36).substring(7);

  const handleSubmitAddTodo = (e) => {
    e.preventDefault();
    setState({
      ...state,
      inputValue: '',
      todoList: [...todoList, { id: inputValue + generateRandom(), todo: inputValue }],
    });
  };

  const handleChangeInput = (e) => {
    setState({ ...state, inputValue: e.target.value });
  };

  const handleClickRemoveTodo = (e) => {
    setState({
      ...state,
      todoList: todoList.filter((item) => e.target.dataset.id !== item.id),
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
