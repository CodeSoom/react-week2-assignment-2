import React from 'react';

import TodoItem from './TodoItem';

export default function TodoList({ todoList, onClick }) {
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onClick={onClick}
        />
      ))}
    </ul>
  );
}
