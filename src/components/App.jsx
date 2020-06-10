import React, { useState } from 'react';

import TodoTemplate from './TodoTemplate';

export default function App() {
  const [state, setState] = useState({
    todoList: [],
  });

  const { todoList } = state;

  function handleClickAdd(todoContent) {
    setState({
      todoList: todoList.concat(
        { data: todoContent, key: todoList.length + 1 },
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
