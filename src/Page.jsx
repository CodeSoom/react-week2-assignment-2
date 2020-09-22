import React from 'react';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

function Page({
  inputValue,
  todos,
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
        todos={todos}
        onClick={onClickComplete}
      />
    </>
  );
}

export default Page;
