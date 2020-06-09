import React from 'react';

import TodoHeader from './TodoHeader';
import TodoList from './TodoList';

export default function TodoTemplate({ todoList, onClick, onClickRemove }) {
  return (
    <div>
      <TodoHeader onClick={onClick} />
      <TodoList todoList={todoList} onClick={onClickRemove} />
    </div>
  );
}
