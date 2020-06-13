import React, { useState } from 'react';

import TodoPage from './TodoPage';

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
      todoList: [...todoList, { id: todoList.length, todo: inputValue }],
    });
  };

  const handleChangeInput = (e) => {
    setState({ ...state, inputValue: e.target.value });
  };

  const handleClickRemoveTodo = (e) => {
    setState({
      ...state,
      todoList: todoList.filter((item) => Number(e.target.dataset.id) !== item.id),
    });
  };

  return (
    <TodoPage
      state={state}
      handleSubmitAddTodo={handleSubmitAddTodo}
      handleChangeInput={handleChangeInput}
      handleClickRemoveTodo={handleClickRemoveTodo}
    />
  );
}
