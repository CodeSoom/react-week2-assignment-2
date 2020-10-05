import React from 'react';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

function Page({
  inputValue,
  todo,
  onChangeInput,
  onClickAdd,
  onClickComplete,
}) {
  return (
    <>
      <h1>To-do</h1>
      <TodoInput
        value={inputValue}
        onChange={onChangeInput}
        onClick={onClickAdd}
      />
      <TodoList
        todo={todo}
        onClick={onClickComplete}
      />
    </>
  );
}

export default Page;
