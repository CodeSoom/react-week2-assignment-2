import React, { useState } from 'react';

import Todo from './pages/Todo';

export default function App() {
  const [state, setState] = useState({
    todoList: [],
    input: '',
    nextId: 0,
  });
  const { todoList, input, nextId } = state;

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
        todoList: [
          ...todoList,
          {
            id: nextId,
            text: input,
          },
        ],
        input: '',
        nextId: nextId + 1,
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
