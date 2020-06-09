import React, { useState } from 'react';
import TodoTemplate from './TodoTemplate';

export default function App() {
  const [state, setState] = useState({
    todoList: [
      { data: '아무것도 안하기1', key: 1 },
      { data: '아무것도 안하기2', key: 2 },
    ],
  });

  const { todoList } = state;

  function handleClickAdd() {
    setState({
      todoList: todoList.concat(
        { data: '아무것도 안하기', key: todoList.length + 1 },
      ),
    });
  }

  function handleClickRemove(target) {
    setState({
      todoList: todoList.filter(({ key }) => key !== target),
    });
  }

  return (
    <TodoTemplate todoList={todoList} onClick={handleClickAdd} onClickRemove={handleClickRemove} />
  );
}
