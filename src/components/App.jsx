import React, { useState } from 'react';

import TodoTemplate from './TodoTemplate';

export default function App() {
  const [state, setState] = useState({
    todoList: [],
  });

  const { todoList } = state;

  function generateKey() {
    if (todoList.length === 0) {
      return 0;
    }
    return Math.max(...todoList.map(({ key }) => key)) + 1;
  }

  function handleClickAdd(todoContent) {
    setState({
      todoList: todoList.concat(
        { content: todoContent, key: generateKey() },
      ),
    });
  }

  function handleClickRemove(target) {
    setState({
      todoList: todoList.filter(({ key }) => key !== target),
    });
  }

  return (
    <TodoTemplate
      todoList={todoList}
      onClickAdd={handleClickAdd}
      onClickRemove={handleClickRemove}
    />
  );
}
