import React from 'react';

import TodoInput from './TodoInput';
import TodoList from './TodoList';

function Page({
  todos,
  onClickAdd,
  onClickComplete,
}) {
  return (
    <>
      <h1>To-do</h1>
      <TodoInput
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
