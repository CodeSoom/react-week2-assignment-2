import React from 'react';

import TodoList from './TodoList';
import Insert from './Insert';

export default function Page({ todos, onInsert, onFinish }) {
  return (
    <div>
      <h1>To-do</h1>
      <Insert onClick={onInsert} placeholder="할 일을 입력해 주세요" />
      <TodoList todos={todos} onClick={onFinish} />
    </div>
  );
}
