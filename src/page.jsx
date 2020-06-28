import React from 'react';

import TodoCreate from './todoCreate';
import TodoComplete from './todoComplete';

export default function Page({
  todo,
  todos,
  handleChangeTodo,
  handleClickCreate,
  handleClickComplete,
}) {
  return (
    <div>
      <h1>To-do</h1>
      <TodoCreate
        todo={todo}
        onChange={handleChangeTodo}
        onClick={handleClickCreate}
      />
      <TodoComplete
        todos={todos}
        onClick={handleClickComplete}
      />
    </div>
  );
}
