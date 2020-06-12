import React, { useState } from 'react';

import Todo from './pages/Todo';

export default function App() {
  const [state, setState] = useState({
    todoList: [],
    input: '',
    id: 0,
  });
  const { todoList, input } = state;

  const handleChangeInput = ({ target: { value } }) => {
    setState({
      ...state,
      input: value,
    });
  };

  const handleClickRemoveTodo = (id) => {
    setState({
      ...state,
      todoList: todoList.filter((item) => item.id !== id),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      setState({
        ...state,
        input: '',
        id: state.id + 1,
        todoList: [
          ...todoList,
          {
            id: state.id,
            text: input,
          },
        ],
      });
    }
  };

  return (
    <Todo
      todoList={todoList}
      input={input}
      handleChangeInput={handleChangeInput}
      handleClickRemoveTodo={handleClickRemoveTodo}
      handleSubmit={handleSubmit}
    />
  );
}
