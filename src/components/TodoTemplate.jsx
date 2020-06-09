import React from 'react';

import TodoAddButton from './TodoAddButton';
import TodoList from './TodoList';

export default function TodoTemplate({ todoList, onClick }) {
  return (
    <div>
      <TodoAddButton onClick={onClick} />
      <TodoList todoList={todoList} />
    </div>
  );
}
