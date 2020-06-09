import React from 'react';

import TodoAddButton from './TodoAddButton';
import TodoList from './TodoList';

export default function TodoTemplate({ todoList, onClick, onClickRemove }) {
  return (
    <div>
      <input />
      <TodoAddButton onClick={onClick} />
      <TodoList todoList={todoList} onClick={onClickRemove} />
    </div>
  );
}
