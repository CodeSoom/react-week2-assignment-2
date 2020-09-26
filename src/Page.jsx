import React from 'react';

import TodoInput from './TodoInput';
import Todos from './Todos';

export default function Page({
  todos, todoContent,
  onChangeContent, onClickAdd, onClickCompleted,
}) {
  return (
    <div>
      <h1>To-do</h1>
      <TodoInput onChange={onChangeContent} onClick={onClickAdd} value={todoContent} />
      {
        todos.length === 0
          ? <p>할 일이 없어요!</p>
          : <Todos todos={todos} onClick={onClickCompleted} />
      }
    </div>
  );
}
