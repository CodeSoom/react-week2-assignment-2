import React from 'react';

import TodoCreate from './todoCreate';
import TodoComplete from './todoComplete';

export default function Page({
  todoTitle,
  todos,
  onChangeTodo,
  onClickCreate,
  onClickComplete,
}) {
  return (
    <div>
      <h1>To-do</h1>
      <TodoCreate
        value={todoTitle}
        onChange={onChangeTodo}
        onClick={onClickCreate}
      />
      <TodoComplete
        todos={todos}
        onClick={onClickComplete}
      />
    </div>
  );
}
