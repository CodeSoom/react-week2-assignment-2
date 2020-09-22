import React from 'react';

import TodoItem from './TodoItem';

export default function TodoList({ todoItems }) {
  return (
    <ul>
      {todoItems.map(({ id, todoText }, index) => (
        <TodoItem key={id} index={Number(index) + 1} todoText={todoText} />))}
    </ul>
  );
}
