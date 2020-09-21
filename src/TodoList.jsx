import React from 'react';

import TodoItem from './TodoItem';

export default function TodoList({ todoItems }) {
  return (
    <ul>
      {todoItems.map(({ id, todoText }) => <TodoItem key={id} id={id} todoText={todoText} />)}
    </ul>
  );
}
