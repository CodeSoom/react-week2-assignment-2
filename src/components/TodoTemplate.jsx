import React from 'react';

import TodoHeader from './TodoHeader';
import TodoList from './TodoList';

export default function TodoTemplate({ todoList, onClickAdd, onClickRemove }) {
  return (
    <div>
      <TodoHeader onClick={onClickAdd} />
      <TodoList todoList={todoList} onClick={onClickRemove} />
    </div>
  );
}
